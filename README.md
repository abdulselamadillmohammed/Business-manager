# Business Manager

**Business Manager** is a web application designed to help users track their expenses and revenue streams, providing insightful visualizations to monitor financial performance. The app is built using **React** for the front end and **Django** for the back end. It also includes features like **Redux** for state management, **TanStack Query** for client-side caching, and **Redis** for backend caching.

## Features

- **Expense and Revenue Tracking**: Log and manage your expenses and income over time.
- **Visualize Data with Graphs**: Generate real-time graphs for expenses and revenue streams using **Chart.js**.
- **State Management**: Powered by **Redux** for predictable state management in the frontend.
- **Client-Side Caching**: Uses **TanStack Query (React Query)** to efficiently cache and manage API data.
- **Backend Caching**: Utilizes **Redis** to improve backend performance by caching frequently requested data.
- **Django REST Framework**: API endpoints built with Django REST Framework.
- **MySQL**: Database for storing user data, transactions, and other records.

## Tech Stack

- **Frontend**: React
- **Backend**: Django + Django REST Framework
- **Database**: MySQL
- **State Management**: Redux
- **Client-Side Caching**: TanStack Query (React Query)
- **Backend Caching**: Redis
- **Data Visualization**: Chart.js
- **Design**: Figma (for UI/UX design)

## Installation

### Prerequisites

- **Node.js** and **npm** for the React frontend.
- **Python 3.9+** for the Django backend.
- **MySQL** for database setup.
- **Redis** for caching (optional but recommended).
  
### Steps to Run Locally

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/business-manager.git
cd business-manager
```

#### 2. Set Up the Frontend (React)

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```
2. **Install the dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm start
   ```
   This will start the React development server at `http://localhost:5173`.

#### 3. Set Up the Backend (Django)

1. **Navigate to the backend directory**:
   ```bash
   cd ../backend
   ```
2. **Create and activate a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. **Install the dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
4. **Configure MySQL**:
   - Make sure you have MySQL installed and running.
   - Update the `DATABASES` setting in `backend/settings.py` with your MySQL credentials.

5. **Apply migrations**:
   ```bash
   python manage.py migrate
   ```

6. **Run the Django server**:
   ```bash
   python manage.py runserver
   ```

The backend will now be available at `http://localhost:8000`.

#### 4. Set Up Redis (Optional)

1. **Start Redis**:
   If you have Redis installed locally, you can start the Redis server:

   ```bash
   redis-server
   ```

2. **Configure Redis in Django**:
   Update the Redis caching configuration in `settings.py` if not already done.

## Data Visualization

- **Chart.js** is used to display graphs for expenses and revenue streams. Users can view daily, weekly, or monthly reports.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
