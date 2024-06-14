

### README.md Template for Your NestJS Dogs Controller Project


# Dogs Service

## Project Overview
This NestJS project provides a simple REST API to manage a list of dogs with basic CRUD (Create, Read, Update, Delete) operations. It is designed to demonstrate the use of controllers, services, and routing in NestJS.

## Technologies Used
- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

## Features
- List all dogs
- Get a single dog by ID
- Add a new dog
- Update an existing dog
- Delete a dog

## Prerequisites
Before you begin, ensure you have the following installed on your system:
- Node.js (v12.x or later)
- npm (typically included with Node.js)

## Installation
Follow these steps to get your development environment running:

1. Clone the repository:
   ```bash
   git clone https://github.com/el-riber/dogs-service.git
   cd dogs-service
   ```

2. Install the necessary packages:
   ```bash
   npm install
   ```

## Running the Application
To run the application locally:

1. Start the server:
   ```bash
   npm run start
   ```

   The application will be available at `http://localhost:3000`.

## API Endpoints
The following endpoints are available:

- `GET /dogs`: Retrieves a list of all dogs.
- `GET /dogs/:id`: Retrieves a dog by its ID.
- `POST /dogs`: Adds a new dog. Requires a JSON body with `name` and `age`.
- `PUT /dogs/:id`: Updates an existing dog by ID. Requires a JSON body with `name` and `age`.
- `DELETE /dogs/:id`: Deletes a dog by ID.

## Testing
You can test the API endpoints using Postman or any other API testing tool by accessing the URLs provided under the "API Endpoints" section.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
```

