---
title: JSX
tags:
  - flashcards
  - 🌱
  - computer-science
  - library
draft: false
creation: 2024-09-05
updated: 2024-09-05
cssclasses: 
aliases:
  - JSX
---
## What is JSX

**What is JSX**
↓
- A syntax extension
<!--SR:!2024-12-31,15,292-->

**What are the rules of JSX**
↓
1. Elements must be wrapped
2. All tags must be closed
3. Camelcase most things
<!--SR:!2025-01-01,16,292-->

## JSX syntax

**How to call JS in XML**
↓
```tsx
const theme = {
	backgroundColor: 'black',
	color: 'pink'
}
<div style={person.theme}/>
```
<!--SR:!2024-12-30,14,292-->

**Example of JSX Transformation**
↓
```tsx
import React from 'react';

function App() {
  return <h1>Hello World</h1>;
}
// Becomes
function App() {
  return React.createElement('h1', null, 'Hello world');
}
```
<!--SR:!2024-12-30,14,292-->

**What is spread Syntax**
↓
- Forwards props without explicit syntax
```tsx
// without
function Profile({ person, size, isSepia, thickBorder }) {  
return (  
	<div className="card">  
		<Avatar person={person} size={size} isSepia={isSepia} thickBorder={thickBorder}/>  
	</div>  
	);  
}
// with
function Profile(props) {  
return (  
	<div className="card">  
		<Avatar {...props} />  
	</div>  
	);  
}
```
<!--SR:!2024-12-30,14,292-->

## Conditional Rendering

**Conditional Rendering using ternary**
↓
```tsx
// w/ if
if (isPacked) {  
	return <li className="item">{name} ✅</li>;
}
return <li className="item">{name}</li>;
// w/ ternary
return (  
	<li className="item">  
		{isPacked ? name + ' ✅' : name}  
	</li>  
);
```
<!--SR:!2025-01-21,35,270-->

**Using Ternary Operator to render different**
↓
```tsx
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✅'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}
```
<!--SR:!2025-01-01,16,292-->

**Conditional Rendering using `&&`**
↓
```tsx
return (  
	<li className="item">
		{name} {isPacked && '✅'}  
	</li>
);
```
<!--SR:!2025-01-01,16,292-->

## Rendering Lists

**Rendering List using `map()`**
↓
```tsx
const people = [...];
const listItems = people.map(person => 
	<li key={person.id}>{person}</li>
);
return <ul>{listItems}</ul>;
```
<!--SR:!2024-12-30,14,292-->

**Rendering List using `filter()`**
↓
```tsx
const people = [{id: 0, name: 'Creola Katherine Johnson', profession: 'mathematician'}];
const chemists = people.filter(person =>  
	person.profession === 'chemist'
);
// then map()
return <ul>{listItems}</ul>;
```
<!--SR:!2025-01-01,16,290-->

## Purity

**How to handle purity incorrectly**
↓
```tsx
let guest = 0;
function Cup() {
  guest = guest + 1; // Bad: changing a preexisting variable!
  return <h2>Tea cup for guest #{guest}</h2>;
}
```
<!--SR:!2024-12-31,15,292-->

**How to handle purity correctly**
↓
```tsx
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}
export default function TeaGathering() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}
```
<!--SR:!2024-12-31,15,292-->
