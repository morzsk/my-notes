---
title: React Reconciliation
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
## What is React Reconciliation

**What is React Reconciliation**
↓
- [[React]]
<!--SR:!2025-01-01,16,292-->

**Stages of React Reconciliation**
↓
1. [[Diffing]]
2. [[Batching]]
<!--SR:!2024-12-13,4,272-->

## React Render and Commit Cycle

**Render and Commit**
↓
1. **Triggering** a render (delivering the guest’s order to the kitchen)
2. **Rendering** the component (preparing the order in the kitchen)
3. **Commiting** to the DOM (placing the order on the table)
![[Pasted image 20241118181859.png]]
<!--SR:!2024-12-12,4,270-->

**1. What is the triggering phase**
↓
- It is the components initial render (done by `createRoot()`)
```tsx
const root = createRoot(document.getElementById('root'))
root.render(<Image />);
```
- The component or one of it’s ancestors has been updated
![[Pasted image 20241118183432.png]]
<!--SR:!2024-12-13,4,272-->

**2. React renders your components**
↓
- After you trigger a render, React calls your components to figure out what to display on screen.
- “Rendering” is React calling your components
<!--SR:!2024-12-13,4,272-->

**3. React commits changes to the DOM**
↓
- After rendering (calling) your components, React will modify the DOM.
	- **For the initial render,** React will use the `appendChild()` DOM API to put all the DOM nodes it has created on screen.
	- **For re-renders,** React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.
<!--SR:!2024-12-13,4,272-->
