# ⚛️ React Patterns

---
name: react-patterns
description: Best Practices für React Development
category: development
used_by:
  - frontend-developer
  - senior-developer
version: 1.0
---

## 📚 Übersicht

Standards und Best Practices für React Frontend Development.

---

## 📋 Component Structure

```jsx
// ✅ Good Component Structure
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

// Types (if TypeScript)
interface Props {
  userId: string;
  onSelect?: (user: User) => void;
}

// Component
export function UserCard({ userId, onSelect }: Props) {
  // 1. Hooks first
  const [isExpanded, setIsExpanded] = useState(false);
  const { data: user, isLoading } = useQuery(['user', userId], fetchUser);

  // 2. Derived state
  const displayName = user ? `${user.firstName} ${user.lastName}` : '';

  // 3. Effects
  useEffect(() => {
    // Effect logic
  }, [dependency]);

  // 4. Handlers
  const handleClick = () => {
    setIsExpanded(!isExpanded);
    onSelect?.(user);
  };

  // 5. Early returns
  if (isLoading) return <Skeleton />;
  if (!user) return null;

  // 6. Main render
  return (
    <div className="p-4 border rounded-lg" onClick={handleClick}>
      <h3>{displayName}</h3>
      {isExpanded && <UserDetails user={user} />}
    </div>
  );
}
```

---

## 📋 Hooks Patterns

### Custom Hook
```jsx
// hooks/useUser.js
export function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const data = await api.getUser(userId);
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [userId]);

  return { user, loading, error };
}

// Usage
const { user, loading, error } = useUser(userId);
```

### React Query (Preferred)
```jsx
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Fetch
const { data, isLoading, error } = useQuery({
  queryKey: ['user', userId],
  queryFn: () => api.getUser(userId),
});

// Mutate
const queryClient = useQueryClient();
const mutation = useMutation({
  mutationFn: api.updateUser,
  onSuccess: () => {
    queryClient.invalidateQueries(['user']);
  },
});
```

---

## 📋 State Management

```jsx
// Local State: useState
const [count, setCount] = useState(0);

// Complex Local State: useReducer
const [state, dispatch] = useReducer(reducer, initialState);

// Global State: Context + useReducer oder Zustand
import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
```

---

## 📋 Styling (Tailwind)

```jsx
// ✅ DO: Utility Classes
<button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
  Click me
</button>

// ✅ DO: Conditional Classes
<div className={`p-4 rounded ${isActive ? 'bg-blue-100' : 'bg-gray-100'}`}>

// ✅ DO: clsx for complex conditions
import clsx from 'clsx';
<div className={clsx(
  'p-4 rounded',
  isActive && 'bg-blue-100',
  isDisabled && 'opacity-50 cursor-not-allowed'
)}>
```

---

## ⚠️ Anti-Patterns

```jsx
// ❌ DON'T: Inline object/array creation in render
<Component style={{ color: 'red' }} /> // Creates new object every render

// ✅ DO: Define outside or useMemo
const style = useMemo(() => ({ color: 'red' }), []);

// ❌ DON'T: Missing keys in lists
items.map(item => <Item {...item} />)

// ✅ DO: Always use unique keys
items.map(item => <Item key={item.id} {...item} />)

// ❌ DON'T: useEffect for derived state
useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);

// ✅ DO: Calculate during render
const fullName = `${firstName} ${lastName}`;
```

---

## ✅ Checkliste

```
□ Functional Components (keine Class Components)
□ Hooks für State/Effects
□ Keys für Listen
□ Memoization wo sinnvoll (useMemo, useCallback)
□ Error Boundaries für Fehler
□ Loading States
□ Tailwind für Styling
```

---

*Components klein, fokussiert und wiederverwendbar.*
