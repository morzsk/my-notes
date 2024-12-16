---
title: Insertion Sort
tags:
  - flashcards
  - 🌱
  - computer-science
draft: false
creation: 2024-09-05
updated: 2024-09-05
cssclasses: 
---
## What is Insertion Sort

**What is Insertion Sort**
↓
- Effective [[Algorithm]] for sorting small number of elements
<!--SR:!2025-04-29,161,310-->

**GIF of Insertion Sort**
↓
![[Insertion-Sort.gif|300]]
<!--SR:!2028-02-10,1160,350-->

**Analogy for Insertion Sort**
↓
- Start with an empty left hand and the cards in a pile on the table
- With your left hand pick up the first card on the pile
- With your right hand, remove one card at a time from the pile
- Then insert it into the correct position in your left hand.
<!--SR:!2025-08-22,258,332-->

**What is input for Insertion Sort**
↓
- A sequence of $n$ numbers $(a_{1} \text{, } a_{2} \text{, } \dots \text{, } a_{n})$
<!--SR:!2025-08-14,249,330-->

**What is output for Insertion Sort**
↓
- A reordering of input $(a_{1}^{'} \text{, } a_{2}^{'} \text{, } \dots \text{, } a_{n}^{'})$
- Such that $(a_{1}^{'} \geq a_{2}^{'} \geq \dots \geq a_{n}^{'})$
<!--SR:!2025-01-13,70,315-->

**Implementation of Insertion Sort**
↓
```c
int* isort(int arr[], int size) {
	for (int i = 1; i < size; i++) {
		int key = arr[i];
		int j = i - 1;
		
		while(j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j = j - 1;
		};
		arr[j + 1] = key;
		printArr(arr, size);
	};
	return arr;
}
```
<!--SR:!2025-08-26,262,332-->

## [[Loop Invariant]]in Insertion Sort

**Initialisation for Insertion Sort**
↓
- The sub-array $A[1:i-1]$ is just a single element $A[1]$ 
- Since it’s just one element it’s sorted by default
<!--SR:!2024-12-16,61,317-->

**Initialisation for Maintenance Sort**
↓
- The `for` loop shifts elements $A[A-n]$ to the right
- Until it finds proper position for $A[i]$
- Thus sub-array $A[1:i]$ consists of elements originally in $A[A:i]$
- But in sorted order
<!--SR:!2024-12-16,9,218-->

**Termination**
↓
- The loop terminates when $i<n$
- This means sub-array $A[1:n]$ consists of elements in $A[1:n]$ but sorted
<!--SR:!2025-02-07,92,317-->