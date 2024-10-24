# WaterApp

**WaterApp** is a mobile application designed to help users track their daily water intake and monitor hydration levels over time. The app is built using **React Native** (with Expo) for the front end, a **FastAPI** backend connected to a **MongoDB** database, and also includes an optional **Django** backend for flexibility.

## Features

- **Track Water Intake**: Users can log and monitor their daily water intake.
- **Cross-platform Support**: Built with React Native, so it runs on both Android and iOS devices.
- **Multiple Backends**:
  - **FastAPI + MongoDB**: A fast, lightweight API for handling user data with MongoDB as the primary database.
  - **Django**: An alternative backend option using Django for those who prefer a more full-featured, relational database setup.

## Tech Stack

- **Frontend**: React Native (Expo)
- **Backend 1**: FastAPI (with MongoDB for storage)
- **Backend 2**: Django (optional, using PostgreSQL or MySQL)
- **State Management**: Redux (or any other preferred state management library)
- **Client-Side Caching**: TanStack Query (React Query) for API caching

## Installation

### Prerequisites

- **Node.js** and **npm** installed for React Native development
- **Python 3.9+** for the FastAPI and Django backends
- **MongoDB** installed locally or available through a cloud service like MongoDB Atlas
- **PostgreSQL/MySQL** (if you plan to use the Django backend)

### Steps to Run Locally

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/waterapp.git
cd waterapp
```

#### 2. Set Up the Frontend (Expo)

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```
2. **Install the dependencies**:
   ```bash
   npm install
   ```
3. **Run the app in Expo**:
   ```bash
   npm start
   ```
   This will start the Expo development server, and you can scan the QR code in the Expo Go app on your mobile device to test the app.

#### 3. Set Up the FastAPI Backend

1. **Navigate to the backend directory**:
   ```bash
   cd ../backend_fastapi
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
4. **Run the FastAPI server**:
   ```bash
   uvicorn main:app --reload
   ```
   The API will be available at `http://127.0.0.1:8000`.

#### 4. Optional: Set Up the Django Backend

1. **Navigate to the Django backend directory**:
   ```bash
   cd ../backend
   ```
2. **Create and activate a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```
3. **Install the dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
4. **Apply migrations**:
   ```bash
   python manage.py migrate
   ```
5. **Run the Django server**:
   ```bash
   python manage.py runserver
   ```

## API Endpoints

### FastAPI Endpoints
- `GET /water`: Retrieve the current water intake records.
- `POST /water`: Log a new water intake entry.
- `DELETE /water/{id}`: Delete a water intake entry by its ID.

### Django Endpoints (Optional)
- Similar to the FastAPI endpoints, but using Django Rest Framework for API handling.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
