# SOLID Principles

## Why use SOLID principles in programming
SOLID principles seek to reduce dependencies so that engineers can change one area of the software without impacting others.

**SOLID is a mnemonic acronym that stands for the five design principles of Object-Oriented class design**

- **S**-  Single-responsibility Principle
- **O**-  Open-closed Principle
- **L**-  Liskov Substitution Principle
- **I**-  Interface Segregation Principle
- **D**-  Dependency Inversion Principle

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

### 3. Liskov Substitution Principle (LSP)
Subclasses should be substitutable for their base classes without breaking functionality.

if class A is a subtype of class B, we should be able to replace B with A without disrupting the behavior of our program.

In Simple words, 
- **Objects of a superclass should be able to be replaced with objects of a subclass without affecting the program.**
- **Object of subclass should be able to access the all the methods and properties of the superclass.**

### 4. [Interface Segregation Principle (ISP)](https://medium.com/@ramdhas/4-interface-segregation-principle-isp-solid-principle-39e477bae2e3)
The Interface Segregation Principle (ISP) suggests that a **(class should not be forced to implement methods it doesn’t need)**. In other words, a class should have small, focused interfaces rather than large, monolithic ones. This helps to avoid unnecessary dependencies and ensures that classes only implement the methods they actually need.

### 5. [Dependency Inversion Principle (DIP)](https://medium.com/@inzuael/solid-dependency-inversion-principle-part-5-f5bec43ab22e)
The Dependency Inversion Principle (DIP) emphasizes **decoupling** and **abstraction**. The principle consists of two core concepts: ***high-level modules should not depend on low-level modules***, and ***both should depend on abstractions***.

In Simple words,
- **High level module should not depend on Low level module, But Both should depend on Abstraction** 
- **Abstraction should not depend on Implementation, Implementation should depend on Abstraction**

**High level module**

A high-level module contains the **business logic** or core functionality of the application. It focuses on the "what" of the application rather than the "how."

**Low level module**

A low-level module deals with the **implementation details** or the "how" of performing tasks. It provides the concrete mechanisms needed to fulfill the high-level module's requirements.