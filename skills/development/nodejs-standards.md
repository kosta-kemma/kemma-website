# 🟢 Node.js Standards

---
name: nodejs-standards
description: Best Practices für Node.js Development
category: development
used_by:
  - backend-developer
  - senior-developer
version: 1.0
---

## 📚 Übersicht

Standards und Best Practices für Node.js Backend Development.

---

## 📋 Projekt-Struktur

```
src/
├── config/           # Configuration files
│   ├── database.js
│   └── env.js
├── controllers/      # Route handlers
├── middleware/       # Express middleware
├── models/           # Database models
├── routes/           # Route definitions
├── services/         # Business logic
├── utils/            # Helper functions
├── validators/       # Input validation
└── app.js            # App entry point
```

---

## 📋 Code Standards

### Async/Await
```javascript
// ✅ DO
async function getUser(id) {
  try {
    const user = await db.users.findById(id);
    return user;
  } catch (error) {
    logger.error('Failed to get user:', error);
    throw error;
  }
}

// ❌ DON'T
function getUser(id) {
  return db.users.findById(id)
    .then(user => user)
    .catch(err => { throw err; });
}
```

### Error Handling
```javascript
// Custom Error Classes
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

class NotFoundError extends AppError {
  constructor(message = 'Resource not found') {
    super(message, 404);
  }
}

// Usage
if (!user) {
  throw new NotFoundError('User not found');
}
```

### Environment Variables
```javascript
// config/env.js
const config = {
  port: process.env.PORT || 3000,
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '15m',
  },
};

// Validate required vars
const required = ['DATABASE_URL', 'JWT_SECRET'];
for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`Missing required env var: ${key}`);
  }
}

module.exports = config;
```

---

## 📋 API Response Format

```javascript
// Success Response
const success = (res, data, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    data,
  });
};

// Error Response
const error = (res, message, statusCode = 500, code = 'ERROR') => {
  return res.status(statusCode).json({
    success: false,
    error: { code, message },
  });
};

// Usage
router.get('/users/:id', async (req, res) => {
  try {
    const user = await userService.getById(req.params.id);
    return success(res, user);
  } catch (err) {
    return error(res, err.message, err.statusCode);
  }
});
```

---

## 📋 Middleware Pattern

```javascript
// Auth Middleware
const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new AppError('No token provided', 401);
    }
    
    const decoded = jwt.verify(token, config.jwt.secret);
    req.user = await userService.getById(decoded.userId);
    next();
  } catch (error) {
    next(error);
  }
};

// Error Handler (last middleware)
const errorHandler = (err, req, res, next) => {
  logger.error(err);
  
  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : 'Internal server error';
  
  return res.status(statusCode).json({
    success: false,
    error: { message },
  });
};
```

---

## ✅ Checkliste

```
□ Async/Await statt Callbacks
□ Try/Catch für Error Handling
□ Environment Variables für Config
□ Input Validation
□ Consistent Response Format
□ Logging (nicht console.log)
□ No hardcoded values
```

---

*Sauberer Code ist wartbarer Code.*
