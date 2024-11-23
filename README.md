# Bicycle Store Management System

## Project Overview

The **Bicycle Store Management System** is a backend application built using **Express.js** and **TypeScript**, with **MongoDB** as the database and **Mongoose** for schema definition and data operations. This application allows users to manage bicycles and orders efficiently while ensuring data integrity through robust schema validation.

---

## Features

### Products (Bicycles)

-  **Create a Bicycle**: Add new bicycles with details such as name, brand, price, type, description, quantity, and stock status.
-  **View All Bicycles**: Retrieve all bicycles, with optional search functionality based on name, brand, or type.
-  **View a Specific Bicycle**: Retrieve details of a specific bicycle by its ID.
-  **Update a Bicycle**: Update bicycle details like price, quantity, and other attributes.
-  **Delete a Bicycle**: Remove a bicycle from the inventory.

### Orders

-  **Place an Order**: Customers can order bicycles, reducing inventory accordingly. Ensures inventory management and handles cases of insufficient stock.
-  **Calculate Revenue**: View total revenue from all orders using MongoDB's aggregation pipeline.

### Error Handling

-  Comprehensive validation for inputs and schema constraints.
-  Clear error messages for scenarios such as invalid input, resource not found, and insufficient stock.

---

## Technologies Used

-  **Node.js**: Backend runtime.
-  **Express.js**: Web framework for building the API.
-  **TypeScript**: Type-safe development.
-  **MongoDB**: NoSQL database for storing products and orders.
-  **Mongoose**: ODM for MongoDB schema validation and data operations.

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

-  **Node.js** (v18 or later)
-  **npm** or **yarn** or **pnpm**
-  **MongoDB** (local instance or cloud service like MongoDB Atlas)

### Steps to Set Up the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/shahriarhacks/L2-ASG-2.git
   cd L2-ASG-2
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Configure Environment Variables**  
   Create a `.env` file in the root directory and set the following environment variables:
   -  `DB_URI_MONGO`: MongoDB connection string (e.g., `mongodb://localhost:27017/bicycle-store`).
   -  `DB_NAME`: Name of the database (e.g., `bicycle-store`).
   -  `PORT`: Port number for the server (e.g., `3000`).
4. **Start the Server**
   ```bash
   npm run dev
   ```
   The server will start, and you can access it at `http://localhost:3000`.

---

### **API Endpoints**

---

\***\*Product Endpoints\*\***

1. **Create a Bicycle**:

-  **Endpoint:** `POST /api/products`
-  **Request Body:**
   -  `name`: string (required)
   -  `brand`: string (required)
   -  `price`: number (required)
   -  `type`: string (required)
   -  `description`: string (required)
   -  `quantity`: number (required)
-  **Response:**

   -  `status`: boolean
   -  `message`: string
   -  `data`: created bicycle object

-  **_Example: Body_**
   ```json
   {
      "name": "Roadster 5000",
      "brand": "SpeedX",
      "price": 300,
      "type": "Road",
      "description": "A premium road bike designed for speed and performance.",
      "quantity": 20,
      "inStock": true
   }
   ```
-  **_Example: Response_**
   ```json
   {
      "status": true,
      "message": "Bicycle created successfully",
      "data": {
         "_id": "650e8e5b0b4b4c4b4b4b4b4b",
         "name": "Roadster 5000",
         "brand": "SpeedX",
         "price": 300,
         "type": "Road",
         "description": "A premium road bike designed for speed and performance.",
         "quantity": 20,
         "inStock": true,
         "createdAt": "2023-09-01T12:00:00.000Z",
         "updatedAt": "2023-09-01T12:00:00.000Z"
      }
   }
   ```

2. **View All Bicycles**:

-  **Endpoint:** `GET /api/products`
-  **Query:** `/api/products?searchTerm=type` (`searchTerm` can be `name`, `brand`, `type`)
-  **Response:**

   -  `status`: boolean
   -  `message`: string
   -  `data`: array of bicycle objects

-  **_Example: Response_**
   ```json
   {
      "status": true,
      "message": "Bicycles retrieved successfully",
      "data": [
         {
            "_id": "650e8e5b0b4b4c4b4b4b4b4b",
            "name": "Roadster 5000",
            "brand": "SpeedX",
            "price": 300,
            "type": "Road",
            "description": "A premium road bike designed for speed and performance.",
            "quantity": 20,
            "inStock": true,
            "createdAt": "2023-09-01T12:00:00.000Z",
            "updatedAt": "2023-09-01T12:00:00.000Z"
         }
      ]
   }
   ```

3. **View a Specific Bicycle**:

-  **Endpoint:** `GET /api/products/:productId`
-  **Response:**

   -  `status`: boolean
   -  `message`: string or error message
   -  `data`: bicycle object

-  **_Example: Response_**
   ```json
   {
      "status": true,
      "message": "Bicycle retrieved successfully",
      "data": {
         "_id": "650e8e5b0b4b4c4b4b4b4b4b",
         "name": "Roadster 5000",
         "brand": "SpeedX",
         "price": 300,
         "type": "Road",
         "description": "A premium road bike designed for speed and performance.",
         "quantity": 20,
         "inStock": true,
         "createdAt": "2023-09-01T12:00:00.000Z",
         "updatedAt": "2023-09-01T12:00:00.000Z"
      }
   }
   ```

4. **Update a Bicycle**:

-  **Endpoint:** `PUT /api/products/:productId`
-  **Request Body:**
   -  authority can give any field to update
   -  `name`: string
   -  `brand`: string
   -  `price`: number
   -  `type`: string
   -  `description`: string
   -  `quantity`: number
-  **Response:**

   -  `status`: boolean
   -  `message`: string
   -  `data`: updated bicycle object

-  **\_Example: Body**
   ```json
   {
      "price": 350,
      "quantity": 15
   }
   ```
-  **_Example: Response_**
   ```json
   {
      "status": true,
      "message": "Bicycle updated successfully",
      "data": {
         "_id": "650e8e5b0b4b4c4b4b4b4b4b",
         "name": "Roadster 5000",
         "brand": "SpeedX",
         "price": 350,
         "type": "Road",
         "description": "A premium road bike designed for speed and performance.",
         "quantity": 15,
         "inStock": true,
         "createdAt": "2023-09-01T12:00:00.000Z",
         "updatedAt": "2023-09-02T07:00:00.000Z"
      }
   }
   ```

5. **Delete a Bicycle**:

-  **Endpoint:** `DELETE /api/products/:productId`
-  **Response:**

   -  `status`: boolean
   -  `message`: string
   -  `data`: deleted response

-  **_Example: Response_**
   ```json
   {
      "status": true,
      "message": "Bicycle deleted successfully",
      "data": {
         "acknowledged": true,
         "deletedCount": 1
      }
   }
   ```

\***\*Orders Endpoints\*\***

1. **Place an Order**:

-  **Endpoint:** `POST /api/orders`
-  **Request Body:**
   -  `email`: string (required)
   -  `address`: string (required)
   -  `product`: string (required)
   -  `quantity`: number (required)
-  **Response:**

   -  `status`: boolean
   -  `message`: string
   -  `data`: created order object

-  **\_Example: Body\_**
   ```json
   {
      "email": "zg9lO@example.com",
      "address": "123 Main St, City",
      "product": "bicycleId",
      "quantity": 2
   }
   ```
-  **_Example: Response_**
   ```json
   {
      "status": true,
      "message": "Order created successfully",
      "data": {
         "_id": "648b45f5e1234b56789a6789",
         "email": "customer@example.com",
         "product": "648a45e5f0123c45678d9012",
         "quantity": 2,
         "totalPrice": 600,
         "createdAt": "2024-11-19T12:00:00.000Z",
         "updatedAt": "2024-11-19T12:00:00.000Z"
      }
   }
   ```

2. **Calculate Revenue**:

-  **Endpoint:** `GET /api/orders/revenue`
-  **Response:**

   -  `status`: boolean
   -  `message`: string
   -  `data`: total revenue

-  **_Example: Response_**
   ```json
   {
      "status": true,
      "message": "Total revenue calculated successfully",
      "data": {
         "totalRevenue": 1200 // Total revenue calculated from all orders
      }
   }
   ```

### **Validation and Error Handling**

-  **Validation** Errors: Clear messages for invalid inputs like negative prices or insufficient stock.
-  **404 Errors:** Proper handling for non-existent products or orders.
-  **Generic Error Response:** Follows a standardized format for consistency:
   json

-  **Error Response:**

   -  `status`: boolean
   -  `message`: string or error message
   -  `error`: string or error message
   -  `stack`: string or error message

-  **_Example: Response_**
   ```json
   {
       {
   "message": "Validation failed",
   "success": false,
   "error": {
    "name": "ValidationError",
    "errors": {
      "price": {
        "message": "Price must be a positive number",
        "name": "ValidatorError",
        "properties": {
          "message": "Price must be a positive number",
          "type": "min",
          "min": 0
        },
        "kind": "min",
        "path": "price",
        "value": -5
      }
    }
   },
   "stack": "Error: Something went wrong\n    at app.js:23:13\n    at..."
   }
   }
   ```

---

## **Folder Structure**

```graphql
L2-ASG-2/
│
├── node_modules
│
├── src/
│   ├── app/
│   │   ├── middleware/
│   │   │   ├── globalErrorHandler.ts     # Handles application-wide errors
│   │   │   └── notFoundRoute.ts          # Handles undefined routes
│   ├── modules/
│   │   ├── bicycle/
│   │   │   ├── bicycle.controller.ts     # Bicycle-specific business logic
│   │   │   ├── bicycle.interface.ts      # Bicycle TypeScript interfaces
│   │   │   ├── bicycle.model.ts          # Bicycle Mongoose schema and model
│   │   │   ├── bicycle.routes.ts         # API routes for bicycles
│   │   │   └── bicycle.service.ts        # Bicycle service logic
│   │   ├── orders/
│   │   │   ├── orders.controller.ts      # Order-specific business logic
│   │   │   ├── orders.interface.ts       # Order TypeScript interfaces
│   │   │   ├── orders.model.ts           # Order Mongoose schema and model
│   │   │   ├── orders.routes.ts          # API routes for orders
│   │   │   └── orders.service.ts         # Order service logic
│   ├── config/
│   │   └── environment.ts                # Environment variables configuration
│   ├── connection/
│   │   ├── mongodb.ts                    # MongoDB connection setup
│   ├── app.ts                            # Express app configuration
│   ├── server.ts                         # Application entry point
|
├── .env                                  # Environment variables
├── .gitignore                            # Ignored files and folders for Git
├── .prettierrc                           # Prettier configuration
├── .prettierignore                       # Files ignored by Prettier
├── eslint.config.mjs                     # ESLint configuration
├── package.json                          # Project dependencies and scripts
├── package-lock.json                     # Dependency lock file
├── tsconfig.json                         # TypeScript configuration
└── README.md                             # Project documentation
└── vercel.json                            # Vercle Deployment configuration
```

---

### **Example Server**

---

-  **Deployed:** `Vercel`
-  **URL:** [https://l2-asg-2.vercel.app/](https://l2-asg-2.vercel.app/)
-  **Health Checkup Route:** [https://l2-asg-2.vercel.app/health](https://l2-asg-2.vercel.app/health)
