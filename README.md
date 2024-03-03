Travel Buddies Hub 🚗✈️
Welcome to the exciting world of Travel Buddies Hub! 🌍 Discover a seamless platform for booking rides, exploring travel information, and connecting with fellow adventurers. 🎉

Getting Started 🚀
Embark on your journey with Travel Buddies Hub by following these simple steps to set up the project on your local machine.

Prerequisites 🛠️
Before you dive in, ensure that you have the following:

Node.js: Make sure you have Node.js installed. If not, you can download it here.

MySQL Database: Install a MySQL database server on your machine.

Installation 🌐
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/Travel-Buddies-Hub.git
Navigate to the Project Directory:

bash
Copy code
cd Travel-Buddies-Hub
Install Dependencies:

bash
Copy code
npm install
Set Up MySQL Database:

Create a new database named Travelcompanionhub.
Import the database schema using database-schema.sql.
Configuration ⚙️
Open config.js in the src directory.

Update MySQL Database Connection:

javascript
Copy code
const connectionConfig = {
    host: 'localhost',
    user: 'your-mysql-username',
    password: 'your-mysql-password',
    database: 'Travelcompanionhub',
};

module.exports = connectionConfig;
Running the Application ▶️
Start the Server:

bash
Copy code
npm start
Open Your Web Browser:

Navigate to http://localhost:3000 and explore the magical world of Travel Buddies Hub!

Experience the Fun:

Explore the app, book a ride, and connect with travel enthusiasts. 🌟

Usage 🧳
Use the navigation buttons to access safety guidelines, company policies, help and support, and ride data.

In the "Request" section, enter the pickup and destination locations, click "Request now," and let the adventure begin!

Contributing 🤝
Join the journey! Feel free to contribute by submitting issues or pull requests. Your ideas and creativity are always welcome.

Required Packages 📦
Express
MySQL2
Path
License 📄
This project is licensed under the MIT License. Happy coding! 🚀
