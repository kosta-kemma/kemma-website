# 🧪 Testing Standards

---
name: testing-standards
description: Standards für Unit, Integration und E2E Tests
category: development
used_by:
  - qa-engineer
  - backend-developer
  - frontend-developer
version: 1.0
---

## 📚 Übersicht

Standards für verschiedene Test-Typen und wann welche zu verwenden.

---

## 📋 Test Pyramide

```
        /\
       /  \     E2E Tests (wenige, langsam, teuer)
      /----\    
     /      \   Integration Tests (mittel)
    /--------\  
   /          \ Unit Tests (viele, schnell, günstig)
  /____________\
```

---

## 📋 Unit Tests

```javascript
// Was testen: Einzelne Funktionen, isoliert
// Tools: Jest, Vitest

describe('calculateTotal', () => {
  it('should calculate total with VAT', () => {
    const result = calculateTotal(100, 0.05);
    expect(result).toBe(105);
  });

  it('should use default VAT if not provided', () => {
    const result = calculateTotal(100);
    expect(result).toBe(105);
  });

  it('should handle zero amount', () => {
    const result = calculateTotal(0);
    expect(result).toBe(0);
  });

  it('should throw for negative amount', () => {
    expect(() => calculateTotal(-100)).toThrow('Amount must be positive');
  });
});
```

---

## 📋 Integration Tests

```javascript
// Was testen: API Endpoints, Database Operations
// Tools: Jest + Supertest

describe('POST /api/orders', () => {
  it('should create order for authenticated user', async () => {
    const response = await request(app)
      .post('/api/orders')
      .set('Authorization', `Bearer ${validToken}`)
      .send({
        items: [{ productId: '123', quantity: 2 }]
      });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data.orderId).toBeDefined();
  });

  it('should return 401 without auth', async () => {
    const response = await request(app)
      .post('/api/orders')
      .send({ items: [] });

    expect(response.status).toBe(401);
  });

  it('should return 400 for empty items', async () => {
    const response = await request(app)
      .post('/api/orders')
      .set('Authorization', `Bearer ${validToken}`)
      .send({ items: [] });

    expect(response.status).toBe(400);
  });
});
```

---

## 📋 E2E Tests

```javascript
// Was testen: Komplette User Flows
// Tools: Playwright, Cypress

test('user can complete checkout', async ({ page }) => {
  // Login
  await page.goto('/login');
  await page.fill('[name="email"]', 'test@example.com');
  await page.fill('[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  
  // Add to cart
  await page.goto('/products');
  await page.click('[data-testid="add-to-cart-123"]');
  
  // Checkout
  await page.click('[data-testid="cart-button"]');
  await page.click('[data-testid="checkout-button"]');
  
  // Verify
  await expect(page.locator('[data-testid="order-confirmation"]'))
    .toBeVisible();
});
```

---

## 📋 Test Naming

```javascript
// Pattern: should [expected behavior] when [condition]

// ✅ Good
it('should return 404 when user not found')
it('should calculate total including VAT')
it('should throw error when password is too short')

// ❌ Bad
it('test user')
it('works')
it('calculateTotal')
```

---

## 📋 Test Coverage Goals

```
Target Coverage:
- Statements: 80%
- Branches: 75%
- Functions: 80%
- Lines: 80%

Priority:
1. Business Logic (100%)
2. API Endpoints (90%)
3. Utilities (80%)
4. UI Components (70%)
```

---

## ✅ Checkliste

```
□ Unit Tests für Business Logic
□ Integration Tests für APIs
□ E2E Tests für Critical Paths
□ Edge Cases getestet
□ Error Cases getestet
□ Tests sind unabhängig
□ Tests sind schnell
□ CI/CD Integration
```

---

*Tests sind keine Kosten, sie sind Investment.*
