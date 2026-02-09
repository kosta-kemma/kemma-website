# 🐘 PostgreSQL Best Practices

---
name: postgresql-best-practices
description: Best Practices für PostgreSQL Database Design und Queries
category: development
used_by:
  - backend-developer
  - senior-developer
version: 1.0
---

## 📚 Übersicht

Standards für Database Design, Queries und Performance mit PostgreSQL.

---

## 📋 Naming Conventions

```sql
-- Tables: plural, snake_case
users, orders, order_items

-- Columns: snake_case
first_name, created_at, is_active

-- Primary Keys: id
id SERIAL PRIMARY KEY

-- Foreign Keys: singular_table_id
user_id, order_id

-- Indexes: idx_table_column
idx_users_email

-- Constraints: table_column_type
users_email_unique, orders_user_id_fk
```

---

## 📋 Table Design

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  role VARCHAR(50) DEFAULT 'user',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index für häufige Queries
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role) WHERE is_active = true;
```

---

## 📋 Query Patterns

### Parameterized Queries (IMMER!)
```javascript
// ✅ DO: Parameterized
const result = await db.query(
  'SELECT * FROM users WHERE email = $1',
  [email]
);

// ❌ NEVER: String Concatenation (SQL Injection!)
const result = await db.query(
  `SELECT * FROM users WHERE email = '${email}'`
);
```

### Pagination
```sql
-- Offset-based (einfach, aber langsam bei großen Offsets)
SELECT * FROM orders
ORDER BY created_at DESC
LIMIT 20 OFFSET 40;

-- Cursor-based (performanter)
SELECT * FROM orders
WHERE created_at < $1
ORDER BY created_at DESC
LIMIT 20;
```

### Joins
```sql
-- Explicit JOIN (immer bevorzugen)
SELECT o.id, o.total, u.email
FROM orders o
INNER JOIN users u ON o.user_id = u.id
WHERE o.status = 'completed';
```

---

## 📋 Indexing Strategy

```sql
-- Index für WHERE Clauses
CREATE INDEX idx_orders_status ON orders(status);

-- Composite Index für mehrere Columns
CREATE INDEX idx_orders_user_status ON orders(user_id, status);

-- Partial Index für spezifische Queries
CREATE INDEX idx_orders_pending ON orders(created_at)
WHERE status = 'pending';

-- EXPLAIN ANALYZE für Performance Check
EXPLAIN ANALYZE SELECT * FROM orders WHERE status = 'pending';
```

---

## 📋 Transactions

```javascript
const client = await pool.connect();
try {
  await client.query('BEGIN');
  
  const order = await client.query(
    'INSERT INTO orders (user_id, total) VALUES ($1, $2) RETURNING id',
    [userId, total]
  );
  
  await client.query(
    'INSERT INTO order_items (order_id, product_id, quantity) VALUES ($1, $2, $3)',
    [order.rows[0].id, productId, quantity]
  );
  
  await client.query('COMMIT');
} catch (error) {
  await client.query('ROLLBACK');
  throw error;
} finally {
  client.release();
}
```

---

## ✅ Checkliste

```
□ Parameterized Queries (keine String Concatenation)
□ Indexes für häufige WHERE/JOIN Columns
□ Foreign Keys definiert
□ created_at/updated_at Timestamps
□ Transactions für multiple Operations
□ EXPLAIN ANALYZE für slow Queries
```

---

*Gutes Schema Design spart später viel Ärger.*
