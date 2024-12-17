---
title: React Event Handler
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

## Responding to events

**How to add event handlers**
↓
```tsx
export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
```
<!--SR:!2024-12-31,15,295-->

**How to add event handlers w/ props**
↓
```tsx
function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>
  );
}
```
<!--SR:!2025-01-01,16,295-->

**How to rename event handlers**
↓
```tsx
function Button({ onSmash, children }) {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onSmash={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}
```
<!--SR:!2024-12-31,15,295-->

**Event propagation in react**
↓
```tsx
export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button onClick={() => alert('Playing!')}>
        Play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    </div>
  );
}
```
<!--SR:!2024-12-30,14,295-->

**Which events propagates**
↓
- All events
- Except `onScroll`
<!--SR:!2025-01-01,16,295-->

**How to stop event propagation**
↓
```tsx
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}
```
<!--SR:!2024-12-31,15,290-->

**Passing handlers as alternative to propagation**
↓
```tsx
function Button({ onClick, children }) {  
	return (  
	<button onClick={e => {e.stopPropagation(); onClick(); }}>  
		{children}  
	</button>  
	);  
}
```
<!--SR:!2024-12-31,15,292-->

**Preventing default behaviour**
↓
```tsx
export default function Signup() {
  return (
    <form onSubmit={e => {e.preventDefault(); alert('Submitting!'); }}>
      <input />
      <button>Send</button>
    </form>
  );
}
```
<!--SR:!2025-01-01,16,295-->
