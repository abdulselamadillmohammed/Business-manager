import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useCurrentUser, useAllTransactions } from "../services/queries"; // Assuming these queries exist
import styles from "../assets/css/expensesPage.module.css";
import DashboardSidebar from "../components/DashboardSidebar";

export default function ExpensesPage() {
  const token = localStorage.getItem("accessToken");

  // Fetch user and transactions data
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
  console.log(transactions);

  // Local states
  const [chartType, setChartType] = useState("line");
  const [timeRange, setTimeRange] = useState("week");

  // Handlers
  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
  };

  // Render loading/error states
  if (userIsLoading || transactionsLoading) return <p>Loading...</p>;
  if (userIsError) return <p>Error fetching user data</p>;
  if (transactionsError) return <p>Error fetching transactions</p>;

  const sampleData = [
    { date: "2024-01-01", amount: 10 },
    { date: "2024-01-02", amount: 25 },
    { date: "2024-01-03", amount: 15 },
    { date: "2024-01-04", amount: 45 },
    { date: "2024-01-05", amount: 35 },
    { date: "2024-01-06", amount: 60 },
    { date: "2024-01-07", amount: 105 },
  ];

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
      <ChartComponent
        width={800}
        height={400}
        data={sampleData}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {DataComponent}
      </ChartComponent>
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
            <label htmlFor="chartType" className={styles.dropdownLabel}>
              Select Chart Type:
            </label>
            <select
              id="chartType"
              className={styles.dropdown}
              value={chartType}
              onChange={(e) => handleChartTypeChange(e.target.value)}
            >
              <option value="line">Line Chart</option>
              <option value="bar">Bar Chart</option>
            </select>
          </div>

          <div className={styles.timeRangeSelector}>
            <button
              className={
                timeRange === "day"
                  ? styles.activeButton
                  : styles.inactiveButton
              }
              onClick={() => handleTimeRangeChange("day")}
            >
              Past Day
            </button>
            <button
              className={
                timeRange === "week"
                  ? styles.activeButton
                  : styles.inactiveButton
              }
              onClick={() => handleTimeRangeChange("week")}
            >
              Past Week
            </button>
            <button
              className={
                timeRange === "year"
                  ? styles.activeButton
                  : styles.inactiveButton
              }
              onClick={() => handleTimeRangeChange("year")}
            >
              Past Year
            </button>
            <button
              className={
                timeRange === "all"
                  ? styles.activeButton
                  : styles.inactiveButton
              }
              onClick={() => handleTimeRangeChange("all")}
            >
              All Time
            </button>
          </div>
        </div>
        <div className={styles.chartContainer}>{renderChart()}</div>
      </div>
    </div>
  );
}
