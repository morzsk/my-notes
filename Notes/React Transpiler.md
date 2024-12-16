---
title: React Transpiler
tags:
  - flashcards
  - 🌱
  - computer-science
  - library
draft: false
creation: 2024-09-05
updated: 2024-09-05
cssclasses:
---
**What is React Transpiler**
- [[React]]
- converts [[Javascript XML|JSX]] to [[Javascript]]

**Example of JSX Transformation**
↓
```tsx
function App() {
  return <h1>Hello World</h1>;
}
// Becomes
function App() {
  return createElement('h1', null, 'Hello world');
}
```
<!--SR:!2024-12-13,4,270-->