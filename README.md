# Blog App

## Overview

This is a blog application built using the MERN stack, with a focus on creating a dynamic and interactive platform for writing and reading blog posts.

## Table of Contents

- [Designing Phase](#designing-phase)
- [Planning Phase](#planning-phase)
- [Coding Phase](#coding-phase)
- [Testing Phase](#testing-phase)

## Designing Phase

During the designing phase, we focused on the overall user experience and interface of the blog app. 

**Design Mockups**

- **Home Page Design**
  ![Home Page](image.png)

- **Post Page Design**
  ![Posts Page](image-1.png)

- **single post page**
![single post](image-2.png)

- **Login Page**
![alt text](image-4.png)

- **Register Page**
![alt text](image-5.png)

- **Profile Page**
![alt text](image-6.png)


**Design Tools Used:**

- Figma for UI/UX design
- Adobe XD for interactive prototypes
- Dark Mode Support
- **dark mode **
![alt text](image-3.png)

- **Light Mode**
![alt text](image-7.png)

- **Responsive Design**
![alt text](image-8.png)


## Planning Phase

In the planning phase, we outlined the architecture and features of the blog app.

**Project Architecture**

- **Front-end:** React, Tailwind CSS
- **Back-end:** Node.js, Express
- **Database:** MongoDB

**Features to Implement:**

- User Authentication (Register, Login, Logout)
- Create, Read, Update, Delete (CRUD) for Blog Posts
- Commenting System
- Search and Filter Posts

**Technical Specifications:**

- REST API for server-client communication
- Responsive design for mobile and desktop views

## Coding Phase

The coding phase involved implementing the design and functionality as planned.

**Front-end Implementation**

- **React Components:**
  - HomePage
  - PostPage
  - Auth components (Login, Register)

- **Styling:**
  - Tailwind CSS for utility-first styling

**Back-end Implementation**

- **Express Routes:**
  - `/api/posts` - For CRUD operations on posts
  - `/api/users` - For user authentication

- **Database Models:**
  - Post Model
  - User Model

**Code Examples:**

- **React Component Example:**
  ```jsx
  import React from 'react';

  const Post = ({ title, content }) => (
    <div className="post">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );

  export default Post;
