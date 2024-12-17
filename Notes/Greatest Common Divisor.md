---
title: Greatest Common Divisor
tags:
  - flashcards
  - 🌱
  - mathematics
  - number-theory
draft: false
creation: 2024-09-05
updated: 2024-09-05
cssclasses: 
---
## What is a Greatest Common Divisor

**What is a Greatest Common Divisor**
↓
Greatest positive integer that is a Divisor of both $a$ and $b$
<!--SR:!2025-03-14,88,306-->

**What can we say about the prime factors of $n$’s divisors**
↓
The [[Prime Factorisation]] of $n$ include the [[Prime Factorisation]] of each Divisor of $n$
<!--SR:!2024-12-22,5,170-->

**Finding greatest common divisor**
↓
1. Find the [[Prime Factorisation]] of each number
2. Identify primes that appear in all of the [[Prime Factorisation]]
3. Find the smallest power of each prime from step 2.
4. Multiply the powers of primes found in step 3
<!--SR:!2025-03-20,102,250-->

**What does it mean if no GCD**
↓
 Integers are relatively prime (common divisor is only $1$)
<!--SR:!2025-02-04,77,270-->

Every common divisor of $a$ and $b$ is a divisor of $gcd(a,b)$, and every divisor of $gcd(a,b)$ is a common divisor of $a$ and $b$

**Factorising GCD function**
↓
For any positive integer $a$, $b$ and $n$ we have
$$gcd(na,nb) = ngcd(a,b)$$
<!--SR:!2025-08-18,254,330-->
