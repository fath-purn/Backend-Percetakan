import express from "express";
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mysql from "mysql2";

import User from "../models/UserModels.js";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "percetakan",
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL database:", err);
    } else {
        console.log("Connected to MySQL database");
    }
});

const router = express.Router();


// Middleware to validate user registration input
const validateRegistrationInput = [
    body("username").notEmpty().withMessage("Username is required"),
    body("password").notEmpty().withMessage("Password is required"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

// Route for user registration
router.post("/register", validateRegistrationInput, (req, res) => {
    const { username, password } = req.body;
    // Check if the username is already taken
    const checkUsernameQuery = "SELECT * FROM users WHERE username = ?";
    connection.query(checkUsernameQuery, [username], (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error checking username" });
        }
        if (results.length > 0) {
            return res.status(400).json({ message: "Username already taken" });
        }
        // Hash the password
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
            if (err) {
                return res.status(500).json({ message: "Error hashing password" });
            }
            // Store the new user in the user database
            const addUserQuery = "INSERT INTO users (username, password) VALUES (?, ?)";
            connection.query(addUserQuery, [username, hashedPassword], (err) => {
            if (err) {
                return res.status(500).json({ message: "Error registering user" });
            }
            res.status(201).json({ message: "User registered successfully" });
            });
        });
    });
});

 // Middleware to validate user login input
const validateLoginInput = [
    body("username").notEmpty().withMessage("Username is required"),
    body("password").notEmpty().withMessage("Password is required"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

// Route for user login
router.post("/login", validateLoginInput, (req, res) => {
    const { username, password } = req.body;
    // Find the user with the provided username
    const getUserQuery = "SELECT * FROM users WHERE username = ?";
    connection.query(getUserQuery, [username], (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error retrieving user" });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: "Invalid username or password" });
        }
        const user = results[0];
        // Compare the provided password with the stored hashed password
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Error comparing passwords" });
            }
            if (!result) {
                return res.status(401).json({ message: "Invalid username or password" });
            }
            // Generate and sign a JWT token
            const token = jwt.sign({ username }, "secretKey");
            res.json({ token });
        });
    });
});
export default router;