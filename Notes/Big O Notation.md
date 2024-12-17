---
title: Big O Notation
tags:
  - flashcards
  - 🌱
  - computer-science
draft: false
creation: 2024-09-05
updated: 2024-09-05
cssclasses: 
---
## What is Big O Notation

**What is the General Function**
↓
- The function your analysing
- Whose growth rate you want to compare
$$g(N)$$
<!--SR:!2024-12-23,7,258-->

**What is the Reference Function**
↓
- Reference or upperbounds for $g(N)$
f(N)$
<!--SR:!2024-12-28,12,278-->

**What is Big O Notation**
↓
- Used in [[Algorithms Analysis]]
- Some constant coefficient times [[Input Size]]
- Such that for all values greater than $N_0$
- The function $g(N)$ is less than or equal to $c_{0} \times f(N)$
$$O(c_{0} \cdot N_{0})$$
<!--SR:!2024-12-28,12,278-->

**Purpose of Big O notation**
- Bound the error we make when we ignore small terms
- Bound the error we make when we ignore parts of a program
- Allows us to classify algorithms based of upper bounds 

**Implication of Big O notation**
↓
- As $N$ grows,
- $g(N)$ does not grow faster than some constant multiple of $f(N)$
- Establishing upper limit of how fast $g(N)$ can increase
- In relation to $f(n)$
<!--SR:!2024-12-18,2,150-->

- [[O(1)]]
- [[O(log N)]]
- [[O(N)]]
- [[O(N log N)]]
- [[O(N^x)]]
- [[O(2^N)]]

**Dividing odd $N$ array into $2$**
↓
$$
\begin{align}
\text{first half of array} &= \text{second half of array} \\
\lfloor N / 2 \rfloor + 1 &= \lceil N / 2 \rceil \\
\text{floor(N/2+1)} &= \text{ceiling(N/2)}\\
\end{align}
$$
<!--SR:!2024-12-23,11,278-->

The smallest integer larger than $\log_{10} N$ is the number of digits required to represent $N$ in decimal

The smallest integer larger than $\lg N$ is the number of bits required to represent $N$ in binary

![[Pasted image 20240922130339.png]]
![[Pasted image 20240922130815.png]]![[Pasted image 20240922182732.png]]