const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'Travelcompanionhub',
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to the database');
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/book-now', (req, res) => {
    const { pickupLocation, destinationLocation } = req.body;

    const sql = 'INSERT INTO customer_request (pickup_location, destination_location, request_date) VALUES (?, ?, NOW())';

    connection.query(sql, [pickupLocation, destinationLocation], (error, results) => {
        if (error) {
            console.error('Error inserting data into the database: ' + error.message);
            res.status(500).send('Internal Server Error');
            return;
        }

        res.status(200).send('Booking successful! Data saved to the database');
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index1.html'));
    app.use(express.static(path.join(__dirname)));
});
// ...

app.get('/api/get-rides', (req, res) => {
    const sql = 'SELECT id, name, pickup_location, destination_location, car_type, fare_per_kilometer FROM ridedetails'; // Adjust table columns as needed

    connection.query(sql, (error, results) => {
        if (error) {
            console.error('Error fetching ride details from the database: ' + error.message);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        res.status(200).json(results);
    });
});

// ...


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
