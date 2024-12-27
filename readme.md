# SOLID Principles

## Why use SOLID principles in programming
SOLID principles seek to reduce dependencies so that engineers can change one area of the software without impacting others.

**SOLID is a mnemonic acronym that stands for the five design principles of Object-Oriented class design**

- **S**-  Single-responsibility Principle
- **O**-  Open-closed Principle

### 1. Single-responsibility Principle
Each class should have one responsibility or reason to change.

**why?**

This principle helps reduce **coupling**. If a class has multiple responsibilities, a change in one responsibility can lead to changes in others, making the code harder to maintain.

### 2. Open-Closed Principle
open-closed principle (OCP) states that software entities **(classes, modules, functions, etc.) should be open for extension**, but **closed for modification**.

There are two primary attributes in the OCP:
- It is **open** for extension — This means you can extend what the module can do.
- It is **closed** for modification — This means you cannot change the source code, even though you can extend the behavior of a module or entity.

You should be able to extend a class’s behavior without altering its source code. This avoids breaking existing functionality when adding new features.

