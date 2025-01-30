# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: improper handling of promise rejections in asynchronous operations within an HTTP server.  The `bug.js` file showcases the flawed code, while `bugSolution.js` provides a corrected version.

**Problem:**
The original server simulates an asynchronous operation that may fail.  However, error handling is insufficient.  If the asynchronous operation rejects, the error is merely logged to the console, leaving the client unaware of the failure and potentially leading to unexpected behavior or resource leaks.

**Solution:**
The corrected version (`bugSolution.js`) demonstrates proper error handling. It sends an appropriate error response to the client (e.g., a 500 Internal Server Error) and provides informative error messages to aid in debugging.