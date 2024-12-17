---
title: Batching
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
## What is Batching

**What is Batching**
↓
- The process of grouping multiple state updates
- Or DOM updates into a single operation to avoid unnecessary re-renders
```tsx
setState1(value1);  
setState2(value2); // becomes all one update
```
<!--SR:!2024-12-31,15,290-->