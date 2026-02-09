# 🔌 API Design

---
name: api-design
description: REST API Design Standards
category: development
used_by:
  - backend-developer
  - senior-developer
  - cto
version: 1.0
---

## 📚 Übersicht

Standards für das Design von REST APIs.

---

## 📋 URL Structure

```
# Resources (Nouns, Plural)
GET    /api/users          # List all
GET    /api/users/:id      # Get one
POST   /api/users          # Create
PUT    /api/users/:id      # Update (full)
PATCH  /api/users/:id      # Update (partial)
DELETE /api/users/:id      # Delete

# Nested Resources
GET    /api/users/:id/orders        # User's orders
POST   /api/users/:id/orders        # Create order for user

# Actions (wenn nötig)
POST   /api/orders/:id/cancel       # Custom action
POST   /api/auth/login              # Auth endpoints
```

---

## 📋 Response Format

```json
// Success (200, 201)
{
  "success": true,
  "data": {
    "id": "123",
    "name": "Example"
  }
}

// Success with Pagination
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "perPage": 20,
    "total": 100,
    "totalPages": 5
  }
}

// Error (4xx, 5xx)
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [
      { "field": "email", "message": "Required" }
    ]
  }
}
```

---

## 📋 HTTP Status Codes

```
SUCCESS:
200 OK           - GET, PUT, PATCH success
201 Created      - POST success
204 No Content   - DELETE success

CLIENT ERRORS:
400 Bad Request  - Invalid input
401 Unauthorized - No/invalid auth
403 Forbidden    - No permission
404 Not Found    - Resource not found
409 Conflict     - Duplicate/conflict
422 Unprocessable - Validation failed

SERVER ERRORS:
500 Internal     - Server error
503 Unavailable  - Service down
```

---

## 📋 Query Parameters

```
# Pagination
GET /api/users?page=1&perPage=20

# Filtering
GET /api/orders?status=pending&userId=123

# Sorting
GET /api/products?sort=price&order=asc

# Search
GET /api/products?search=cookie

# Field Selection
GET /api/users?fields=id,name,email
```

---

## 📋 Versioning

```
# URL Versioning (empfohlen)
/api/v1/users
/api/v2/users

# Header Versioning
Accept: application/vnd.api+json; version=1
```

---

## ✅ Checkliste

```
□ RESTful URL Structure
□ Consistent Response Format
□ Correct HTTP Status Codes
□ Input Validation
□ Pagination für Listen
□ Error Messages sind hilfreich
□ API Dokumentation vorhanden
```

---

*Gute APIs sind selbsterklärend.*
