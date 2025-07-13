# Mock E-commerce API

This is a fake REST API for an e-commerce, built with Node.js and json-server.  
It simulates CRUD operations on users and products with sample data.

## Features

- REST API simulated with json-server
- User and product data stored in `data/db.json`
- Easy to run locally for development and testing
- Default port set to 3001 (json-server uses 3000 if not specified)

## How to use

1. Clone this repository  
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the API:
    ```bash
    npm start
    ```

The API will be available at:
```bash
http://localhost:3001
```

## Main endpoints

/users - Users

/products - Products