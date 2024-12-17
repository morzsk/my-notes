---
title: Dynamic Memory Allocation
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
## What is Dynamic Memory Allocation

**What is Dynamic Memory Allocation**
↓
- Procedure in which the size of a data structure is changed during the runtime.
![[Pasted image 20241006133008.png]]
<!--SR:!2024-12-27,11,275-->

## What is Malloc

**What is Malloc**
↓
- Memory Allocation
- Dynamically allocate a single large block of memory with the specified size
```c
int* ptr;
ptr = (cast-type*) malloc(byte-size)
```
<!--SR:!2025-01-01,16,290-->

## What is Calloc

**What is Calloc**
↓
- Contiguous Allocation
- Dynamically allocate the specified number of blocks of memory of the specified type
```c
ptr = (cast-type*)calloc(n, element-size);
```
<!--SR:!2024-12-30,14,292-->

## What is Realloc

**What is Realloc**
↓
- Re-allocation
-
```c
int* ptr;
ptr = realloc(ptr, newSize);
```
<!--SR:!2024-12-30,14,295-->

## Memcpy

**What is Memcpy**
↓
- Copy a block of memory from one location to another
- Specifies number of bytes
```c
memcpy(str1, str2, sizeof(str2));
```
<!--SR:!2025-01-01,16,295-->

## What is Free

**What is Free**
↓
- De-allocates dynamically allocated memory
```c
free(ptr);
```
<!--SR:!2025-01-01,16,295-->

**How to check if memory is allocated**
↓
```c
if (ptr == NULL) {
	printf("Memory not allocated.\n");
	exit(0);
}
```
<!--SR:!2024-12-30,14,295-->