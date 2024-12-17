---
title: Complex Numbers
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
## What is a Complex Number

**What is a Complex Number**
↓
- Where $a$ and $b$ are [[Real Number]] and $i^2=-1$
- Where $a$ is the **real part** and $b$ is the **imaginary part**
$$a+bi$$
<!--SR:!2025-01-01,16,296-->

**When is a Complex Number an [[Imaginary Number]]**
↓
- When $a=0$
<!--SR:!2025-01-01,16,298-->

## Complex Arithmetic

**How do we add Complex Numbers**
↓
- Add real and imaginary parts separately
$$
\begin{align}
a+bi + c+di &=(a+bi) + (c+di) \\
&=(a+c) + (bi+di)
\end{align}
$$
<!--SR:!2024-12-23,16,290-->

**How do we multiply Complex Numbers**
↓
- Use distributive property to multiply
$$
\begin{align}
(a+bi)(c+di) &= a(c+di) + bi(c+di) \\
&= ac+adi + bci+bdi^{2} \\
&= ac+adi+bci-bd \\
&= (ac-bd)+(ad+bc)i
\end{align}
$$
<!--SR:!2024-12-30,14,298-->

**What is the pattern in powers of $i$**
↓
- Powers of $i$ repeat in blocks of $4$
$$
\begin{align}
i^{1} &= i \\
i^{2} &= -1 \\
i^{3} &= -i \\
i^{4} &= 1 \\
&\text{pattern repeats} \dots
\end{align}
$$
<!--SR:!2024-12-19,24,270-->

**How to evaluate $i^{n}$**
↓
$$
\begin{align}
i^{x} \\
x \div 4 &= x \text{ remainder }n \\
n &= 1 \text{ then } i = i \\
n &= 2 \text{ then } i = -1 \\
n &= 3 \text{ then } i = -i \\
n &= 4 \text{ then } i = 1
\end{align}
$$
<!--SR:!2024-12-31,15,298-->

**How do we divide Complex Numbers**
↓
- We can use the fact that $z\bar{z}$ is real for all complex numbers
$$
\begin{align}
\frac{\omega}{z}=\frac{w}{z} \cdot \frac{\bar{z}}{\bar{z}} = \frac{w\bar{z}}{z\bar{z}}
\end{align}
$$
<!--SR:!2025-01-13,28,294-->

3.3
