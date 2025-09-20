# Contact Book Backend API

A RESTful API for managing contacts with features like duplicate prevention, pagination, and comprehensive CRUD operations. Built with Node.js, Express, and SQLite.

## Features

- ✅ **Contact Management**: Create, read, update, and delete contacts
- ✅ **Duplicate Prevention**: Prevents duplicate contacts based on email or phone number
- ✅ **Pagination**: Efficient pagination for large contact lists
- ✅ **Data Validation**: Comprehensive input validation and error handling
- ✅ **SQLite Database**: Lightweight, file-based database
- ✅ **CORS Support**: Cross-origin resource sharing enabled
- ✅ **Environment Configuration**: Configurable via environment variables

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: SQLite with sqlite3 driver
- **Package Manager**: npm
- **Development**: nodemon for auto-restart

## Installation

1. **Clone the repository** (if applicable)
2. **Navigate to backend directory**:
   ```bash
   cd backend
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the backend directory with the following variables:

```env
DB_PATH=contacts.db
PORT=3000
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DB_PATH` | Path to SQLite database file | `contacts.db` |
| `PORT` | Server port | `3000` |

## Usage

### Starting the Server

**Development mode** (with auto-restart):
```bash
npm run server
```

**Production mode**:
```bash
node server.js
```

The server will start on `http://localhost:3000`

### Testing the API

You can test the API using curl, Postman, or any HTTP client:

```bash
# Health check
curl http://localhost:3000/

# Get all contacts (paginated)
curl "http://localhost:3000/api/contacts?page=1&limit=10"
```

## API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Contacts Endpoints

#### 1. Create Contact
```http
POST /api/contacts
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123-456-7890"
}
```

**Response (201):**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123-456-7890"
}
```

**Validation Errors:**
- `400 Bad Request`: Missing required fields (name, email, phone)
- `409 Conflict`: Contact already exists with same email or phone

#### 2. Get All Contacts (Paginated)
```http
GET /api/contacts?page=1&limit=10
```

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)

**Response (200):**
```json
{
  "contacts": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "123-456-7890"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalContacts": 50,
    "hasNext": true,
    "hasPrev": false
  }
}
```

#### 3. Delete Specific Contact
```http
DELETE /api/contacts/:id
```

**Response (204):** No Content

**Error Response (404):**
```json
{
  "error": "Contact not found"
}
```

#### 4. Delete All Contacts
```http
DELETE /api/contacts/:id?all=true
```

**Note:** The `:id` parameter is ignored when `all=true` query parameter is provided.

**Response (204):** No Content

## Database Schema

### Contacts Table
```sql
CREATE TABLE contacts (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT UNIQUE NOT NULL
);
```

**Fields:**
- `id`: Auto-incrementing primary key
- `name`: Contact name (required)
- `email`: Contact email (required, unique)
- `phone`: Contact phone number (required, unique)

## Error Handling

The API returns appropriate HTTP status codes and error messages:

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request (validation errors) |
| 404 | Not Found |
| 409 | Conflict (duplicate data) |
| 500 | Internal Server Error |

**Error Response Format:**
```json
{
  "error": "Description of the error"
}
```

## Development

### Available Scripts

- `npm run server`: Start development server with nodemon
- `npm test`: Run tests (placeholder - no tests configured yet)

### Project Structure

```
backend/
├── database.js          # Database configuration and initialization
├── server.js            # Main server file
├── package.json         # Dependencies and scripts
├── .env                 # Environment variables (create this)
├── contacts.db          # SQLite database file (created automatically)
└── routes/
    └── contactsRouter.js # Contact-related routes
```

## Testing Examples

### 1. Create Multiple Contacts
```bash
curl -X POST http://localhost:3000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","phone":"111-222-3333"}'

curl -X POST http://localhost:3000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"Bob","email":"bob@example.com","phone":"444-555-6666"}'
```

### 2. Test Pagination
```bash
# Get first page with 2 contacts per page
curl "http://localhost:3000/api/contacts?page=1&limit=2"

# Get second page
curl "http://localhost:3000/api/contacts?page=2&limit=2"
```

### 3. Test Duplicate Prevention
```bash
# This will fail with 409 error
curl -X POST http://localhost:3000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"Duplicate","email":"alice@example.com","phone":"999-888-7777"}'
```

### 4. Test Delete Operations
```bash
# Delete specific contact
curl -X DELETE http://localhost:3000/api/contacts/1

# Delete all contacts
curl -X DELETE "http://localhost:3000/api/contacts/1?all=true"
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

ISC

## Support

For issues and questions, please create an issue in the repository.
