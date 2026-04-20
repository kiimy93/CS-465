# CS-465
# Travlr Getaways Full Stack Application

## Overview
This project is a full stack web application that includes both a customer-facing website and an administrative single-page application (SPA). The application allows users to view travel packages, while administrators can securely log in to manage trips by adding, editing, and deleting entries.

## Architecture
The frontend development includes two approaches: a traditional Express HTML website and an Angular SPA. The Express site uses server-side rendering for customer views, while the Angular SPA provides a more dynamic experience for administrators, allowing updates without reloading the page.

The backend uses a NoSQL MongoDB database because it is flexible and works well with JavaScript-based applications. MongoDB stores data in JSON-like documents, making it easy to integrate with the Node.js and Angular frontend.

## Functionality
JSON is a data format used to transfer data between the frontend and backend, while JavaScript is a programming language used to manipulate that data. JSON ties the full stack together by allowing the Angular frontend to send and receive structured data from the API.

Throughout development, code was refactored to improve efficiency and organization. For example, Angular components such as trip cards were reused to display multiple trips consistently. This improved maintainability and reduced duplicate code.

## Testing
API endpoints were tested using Postman to verify GET, POST, PUT, and DELETE requests. Testing included checking successful responses, handling invalid inputs, and verifying authentication using tokens. Security added complexity because endpoints required authorization, meaning requests had to include valid tokens to access protected routes.

## Security
Authentication was implemented using JSON Web Tokens (JWT). Users must log in to receive a token, which is then used to authorize access to administrative features. This ensures that only authenticated users can modify trip data.

## Conclusion
This project demonstrates full stack development using the MEAN stack (MongoDB, Express, Angular, Node.js). It highlights how frontend and backend systems communicate, how APIs are used, and how security is applied in a modern web application.
