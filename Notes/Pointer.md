---
title: Pointer
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

**What is a Pointer**
↓
- Pointers point to a value in memory
![[Pasted image 20240929181708.png]]
<!--SR:!2024-12-31,15,292-->

**Call by reference**
↓
- `a` and `b` are variables stored in the callers context
- They are passed by reference to swap
- Stores value at `px`/`py` which are pointers that point to `a`/`b`
```c
void swap(int x, int y) /* Wont change a/b*/
void swap(int* px, int* py) /* Will change a/b*/
swap(a, b)
```
![[Pasted image 20240929181951.png|300]]
<!--SR:!2024-12-27,15,290-->

**Diagram of Array**
↓
```c
int a[10];
```
![[Pasted image 20240929192357.png]]
<!--SR:!2024-12-30,14,292-->

**Relationship between array and pointers**
↓
- Arrays are consecutive items in memory
```c
int *pa;
pa = &a[0];
```
![[Pasted image 20240929192438.png]]
- So `pa+n` would give you the nth item in the list
![[Pasted image 20240929192729.png]]
<!--SR:!2024-12-31,15,292-->

**When can comparison operators be used with Pointers**
↓
- When two pointers `p` and `q` point to members in same array
<!--SR:!2025-01-01,16,292-->

**Creating a string using Pointer**
↓
```c
char amessage[] = "now is the time"; /* an array */
char *pmessage = "now is the time";  /* a pointer */
```
![[Pasted image 20240929212602.png]]
<!--SR:!2024-12-31,15,292-->

```c
*p++ = val;
val = *--p;
```

![[Pasted image 20240929220015.png]]

## Wild Pointers

**What is a Wild Pointer**
↓
- An uninitialised pointer
- Points to some arbitrary memory location
<!--SR:!2025-01-01,16,292-->

**How to get Wild Pointer**
↓
```c
int main() {
	int *p; /* Wild Pointer */
	*p = 12; /* Some unknown memory is corrupted */
}
```
<!--SR:!2024-12-31,15,292-->

**How to avoid Wild Pointer**
↓
```c
int main() {
	int *p; /* Wild Pointer */
	int a = 10;
	p = &a; /* P is not a wild pointer now */
	*p = 12;  
}
```
<!--SR:!2024-12-30,14,292-->

**How to avoid Wild Pointer without assigning a value**
↓
```c
int main() {
	int* p = (int*)malloc(sizeof(int));
}
```
<!--SR:!2025-01-01,16,292-->

```c
/* month_name: return name of n-th month */
char *month_name(int n)
{
	static char *name[] = {
		"Illegal month",
		"January", "February", "March",
		"April", "May", "June",
		"July", "August", "September",
		"October", "November", "December"
	};
	return (n < 1 || n > 12) ? name[0] : name[n];
}
```
