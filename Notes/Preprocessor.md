---
title: The C Preprocessor
tags:
  - flashcards
  - 🌱
  - computer-science
  - programming-language
draft: false
creation: 2024-09-05
updated: 2024-09-05
cssclasses: 
---
## What is a Preprocessor

**What is a Preprocessor**
↓
- Processes code before compilation
- Used to perform textual transformation
<!--SR:!2024-12-13,4,274-->

### File Inclusion

**How to include library**
↓
- Using the `#include` you can insert contents of one file into another
```c
#include <stdio.h>
#include "stdio.h"
```
<!--SR:!2024-12-13,4,274-->

### Macro Definition

**How to define Macros**
↓
- Placeholders for code or constants
- Replaced by their value or code when preprocessor runs
```c
#define PI 3.14
#define SQUARE(x) ((x) * (x))
```
<!--SR:!2024-12-13,4,274-->

### Conditional Compilation

**How to conditionally compile code**
↓
```c
#ifdef DEBUG
	printf("Debugging enabled\n");
#else
	printf("Debugging disabled\n");
#endif
```
<!--SR:!2024-12-14,25,290-->

### Macro Expansion

**How to expand macros**
↓
```c
#define MAX 100
int arr[MAX]; // This will be expanded to int arr[100];
```
<!--SR:!2024-12-13,4,274-->

### File Guarding

**How to guard files**
↓
```c
#ifndef MYHEADER_H
#define MYHEADER_H
// header file content
#endif
```
<!--SR:!2024-12-13,4,274-->