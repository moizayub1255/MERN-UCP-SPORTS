# GameOn - Sports Website

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Introduction
GameOn is a full-stack sports website designed for managing university sports events. It provides an admin panel for managing leaderboards, game scores, and team rankings while offering users real-time updates.

## Features
- **Leaderboard Management:** Separate leaderboards for boys and girls.
- **Admin Panel:** Manage games, assign points, and update team rankings.
- **Real-time Updates:** Changes in the dashboard reflect instantly on the leaderboard.
- **Authentication:** Secure login for admin access.
- **User Interface:** Modern and responsive UI using React.
- **Backend Integration:** Express.js for managing APIs and data storage.

## Technologies Used
### Frontend:
- React.js
- Bootstrap
- React Router

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose ORM)

### Deployment & Hosting:
- Frontend: **Vercel**
- Backend: **Vercel (Serverless Functions)**  
- Database: **MongoDB Atlas**

## Installation
### Prerequisites:
- Node.js installed
- MongoDB setup

### Clone Repository:
```sh
https://github.com/moizayub1255/MERN-UCP-SPORTS.git
```

### Install Dependencies:
#### Backend:
```sh
cd backend
npm install
```
#### Frontend:
```sh
cd ../frontend
npm install
```

## Usage
### Run Backend Server:
```sh
cd backend
npm run dev
```

### Run Frontend:
```sh
cd frontend
npm run dev
```

### Access the Application:
- Open [http://localhost:5173](http://localhost:5173) in your browser.

## API Endpoints
| Method | Endpoint           | Description                  |
|--------|-------------------|------------------------------|
| GET    | /api/games        | Fetch all games             |
| POST   | /api/games        | Add a new game              |
| PUT    | /api/games/:id    | Update a game               |
| DELETE | /api/games/:id    | Delete a game               |
| GET    | /api/leaderboard  | Fetch leaderboard data      |

## Deployment
- Deployment is planned on **Vercel**.
- The repository is hosted on **GitHub**.


## Future Improvements
- User Registration & Login for Players
- Live Score Updates
- Game Statistics & Analytics

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss the proposed changes.

## License
This project is licensed under the MIT License.

---
Feel free to contribute and improve the project!
