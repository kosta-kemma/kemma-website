# 🔒 Security Checklist

---
name: security-checklist
description: Security Best Practices und Checkliste
category: development
used_by:
  - security-engineer
  - backend-developer
  - senior-developer
version: 1.0
---

## 📚 Übersicht

Security Best Practices und Checkliste für alle Entwicklung.

---

## 📋 Authentication

```
□ Passwords mit bcrypt/Argon2 gehasht (min 12 rounds)
□ JWT Token Expiry kurz (15-30 Min)
□ Refresh Token Rotation implementiert
□ Secure Cookie Flags (httpOnly, secure, sameSite)
□ Rate Limiting auf Auth Endpoints
□ Account Lockout nach 5 failed attempts
□ Password Requirements (min 8 chars, complexity)
```

---

## 📋 Authorization

```
□ Role-Based Access Control (RBAC)
□ Resource-Level Permissions geprüft
□ Alle API Endpoints geschützt
□ Admin Routes separiert
□ Principle of Least Privilege
□ No Privilege Escalation möglich
```

---

## 📋 Input Validation

```
□ ALLE User Inputs validiert
□ Whitelist statt Blacklist
□ Type Checking
□ Length Limits
□ Format Validation (Email, URL, etc.)
□ Sanitization für Output
```

---

## 📋 SQL Injection Prevention

```javascript
// ✅ ALWAYS: Parameterized Queries
db.query('SELECT * FROM users WHERE id = $1', [userId]);

// ❌ NEVER: String Concatenation
db.query(`SELECT * FROM users WHERE id = ${userId}`);
```

---

## 📋 XSS Prevention

```javascript
// ✅ DO: Escape Output
const safeHtml = escapeHtml(userInput);

// ✅ DO: Content Security Policy
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
  }
}));

// React: Automatisch escaped, ABER:
// ❌ NEVER: dangerouslySetInnerHTML mit User Input
```

---

## 📋 CSRF Prevention

```javascript
// ✅ DO: CSRF Token für State-Changing Requests
app.use(csrf());

// ✅ DO: SameSite Cookie Attribute
res.cookie('session', token, { sameSite: 'strict' });
```

---

## 📋 Sensitive Data

```
□ Keine Secrets in Code/Repo
□ Environment Variables für Secrets
□ Secrets in Secret Manager (nicht .env in Production)
□ Keine sensitive Data in URLs
□ Keine sensitive Data in Logs
□ Encryption at Rest für sensitive Data
□ HTTPS only
```

---

## 📋 API Security

```
□ HTTPS everywhere
□ CORS korrekt konfiguriert
□ Rate Limiting
□ Request Size Limits
□ Helmet.js für Security Headers
□ No sensitive Data in Error Messages
```

---

## 🚨 Red Flags

```
SOFORT FIXEN:
• Passwords im Klartext
• SQL Injection möglich
• Secrets in Code
• Missing Auth auf Endpoints
• eval() oder ähnliches
• Unrestricted File Upload
• No HTTPS
```

---

*Security ist nicht optional.*
