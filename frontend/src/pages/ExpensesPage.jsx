import React, { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useCurrentUser, useAllTransactions } from "../services/queries";
import styles from "../assets/css/expensesPage.module.css";
import DashboardSidebar from "../components/DashboardSidebar";
import dayjs from "dayjs";

export default function ExpensesPage() {
  const token = localStorage.getItem("accessToken");

  const {
    data: user,
    isLoading: userIsLoading,
    isError: userIsError,
  } = useCurrentUser(token);

  const {
    data: transactions,
    isLoading: transactionsLoading,
    isError: transactionsError,
  } = useAllTransactions();

  const [chartType, setChartType] = useState("line");
  const [timeRange, setTimeRange] = useState("week");

  const filteredData = useMemo(() => {
    if (!transactions) return [];

    const now = dayjs();
    let startDate;
    let dateFormat;

    switch (timeRange) {
      case "day":
        startDate = now.subtract(1, "day");
        dateFormat = "h A";
        break;
      case "week":
        startDate = now.subtract(7, "days");
        dateFormat = "dddd";
        break;
      case "month":
        startDate = now.subtract(1, "month");
        dateFormat = "MMM D";
        break;
      case "year":
        startDate = now.subtract(1, "year");
        dateFormat = "MMMM";
        break;
      case "all":
      default:
        startDate = null; // No start date, include all transactions
        dateFormat = "MMM YYYY";
        break;
    }

    let filteredTransactions = transactions.filter(
      (txn) => txn.transaction_type === "E"
    );
    if (startDate) {
      filteredTransactions = filteredTransactions.filter((txn) =>
        dayjs(txn.created_at).isAfter(startDate)
      );
    }

    const aggregatedData = filteredTransactions.reduce((acc, txn) => {
      let dateKey;
      let dateLabel;
      const amount = parseFloat(txn.transaction_price);

      if (timeRange === "day") {
        dateKey = dayjs(txn.created_at).format("HH"); // Hour in 24h format
        dateLabel = dayjs(txn.created_at).format("h A"); // For display
      } else {
        dateKey = dayjs(txn.created_at).format(dateFormat);
        dateLabel = dateKey;
      }

      if (acc[dateKey]) {
        acc[dateKey].amount += amount;
      } else {
        acc[dateKey] = { dateKey, dateLabel, amount };
      }

      return acc;
    }, {});

    const dataArray = Object.values(aggregatedData);

    // Custom sorting for days of the week and day timeRange
    if (timeRange === "week") {
      const dayOrder = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      dataArray.sort(
        (a, b) => dayOrder.indexOf(a.dateLabel) - dayOrder.indexOf(b.dateLabel)
      );
    } else if (timeRange === "day") {
      dataArray.sort((a, b) => parseInt(a.dateKey) - parseInt(b.dateKey));
    } else {
      // Default sorting for other cases
      dataArray.sort(
        (a, b) => dayjs(a.dateKey, dateFormat) - dayjs(b.dateKey, dateFormat)
      );
    }

    return dataArray;
  }, [transactions, timeRange]);

  if (userIsLoading || transactionsLoading) return <p>Loading...</p>;
  if (userIsError) return <p>Error fetching user data</p>;
  if (transactionsError) return <p>Error fetching transactions</p>;

  const renderChart = () => {
    const ChartComponent = chartType === "line" ? LineChart : BarChart;
    const DataComponent =
      chartType === "line" ? (
        <Line
          type="monotone"
          dataKey="amount"
          stroke="#8884d8"
          strokeWidth={2}
        />
      ) : (
        <Bar dataKey="amount" fill="#8884d8" />
      );

    return (
      <div className={styles.chartWrapper}>
        <ChartComponent
          className={styles.chartComponentTest}
          width={1000}
          height={400}
          data={filteredData} // Ensure the data is sorted correctly
          margin={{ top: 20, right: 30, left: 20, bottom: 50 }} // Increase the bottom margin
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="dateLabel"
            interval={0}
            angle={
              timeRange === "day" ||
              timeRange === "month" ||
              timeRange === "all"
                ? 90
                : 0
            }
            textAnchor={
              timeRange === "day" ||
              timeRange === "month" ||
              timeRange === "all"
                ? "start"
                : "end"
            }
            tick={{ dy: 10 }} // Add padding to move the labels down
          />
          <YAxis
            tickFormatter={(value) => Number(value).toFixed(2)}
            label={{
              value: "Amount",
              angle: -90,
              position: "insideLeft",
              offset: -10, // Adjust this value as needed
              style: {
                textAnchor: "middle",
                fontSize: "14px",
                fill: "#8884d8",
              },
            }}
          />

          <Tooltip formatter={(value) => Number(value).toFixed(2)} />

          {DataComponent}
        </ChartComponent>
      </div>
    );
  };

  return (
    <div className={styles.expensesPageContainer}>
      <div className={styles.expensesPageLeftSideContainer}>
        <DashboardSidebar
          profilePicture={`http://127.0.0.1:8000${user.profile_picture}`}
          username={user.username}
        />
      </div>
      <div className={styles.expensesPageMainSectionContainer}>
        <h1 className={styles.heading}>Expenses</h1>
        <div className={styles.controlsContainer}>
          <div className={styles.chartTypeSelector}>
            <select
              id="chartType"
              className={styles.dropdown}
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
            >
              <option value="line">Line Chart</option>
              <option value="bar">Bar Chart</option>
            </select>
          </div>

          <div className={styles.timeRangeSelector}>
            <select
              className={styles.dropdown}
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="day">Past Day</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
              <option value="year">Past Year</option>
              <option value="all">All Time</option>
            </select>
          </div>
        </div>
        <div
          className={styles.chartContainer}
          style={{
            overflowX: "scroll", // Enable scrolling for the X-axis
            display: "block",
          }}
        >
          {renderChart()}
        </div>
      </div>
    </div>
  );
}
