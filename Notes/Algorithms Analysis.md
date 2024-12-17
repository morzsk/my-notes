---
title: Algorithms Analysis
tags:
  - flashcards
  - 🌱
  - computer-science
draft: false
creation: 2024-09-05
updated: 2024-09-05
cssclasses: 
---
**What is Algorithm Analysis**
↓
- Compare different [[Algorithm]] for the same task
- Predict performance in a new environment
- Set values of algorithm parameters
<!--SR:!2024-12-26,10,288-->

- [[Loop Invariant]]

## Types of Analysis

**Empirical Analysis**
↓
<!--SR:!2024-12-27,11,288-->

**Mathematical Analysis**
↓
<!--SR:!2024-12-25,9,250-->

**Problems in precise Algorithmic Analysis**
↓
1. e.g. C program translated into machine code
	- That C statement can take diff time to execute
	- Resources may be shared, machine code is machine dependent
2. Performance can vary based on input
3. Many algorithms haven’t been studied in depth
4. Two programs might not be comparable
<!--SR:!2024-12-27,11,288-->

**Steps of Algorithmic Analysis**
↓
1. Identify the abstract operation an algorithm is based on
	- Separating analysis and implementation
2. Use profile mechanisms (instruction-frequency counts)
	- To determine most frequency executed part of codes
<!--SR:!2024-12-28,12,288-->

**Actual Data**
↓
- What would actually happen
<!--SR:!2024-12-27,11,288-->

**Random Data**
↓
- For average-case performance
<!--SR:!2024-12-26,10,288-->

**Perverse Data**
↓
- For worst-case performance
<!--SR:!2024-12-27,11,288-->

