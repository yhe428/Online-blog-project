Dazzling Duck's Photography Web App
==========
### **Overview**
Dazzling Duck's Photography is a web application designed for amateur photographers to showcase their skills, share articles, and interact with an engaged community of photography enthusiasts. Users can upload photos, write articles, and browse contributions from others, fostering a vibrant platform for learning and inspiration.

### **Key Features**
1. **Account Management**:
   - **Creation of a new account**: On the home page, users can create an account by entering their personal details, including username, name, password, and more.
   - **Username availability check**: Users are informed immediately if a username is already taken.
   - **Password hashing and salting**: Secure password management with `bcrypt`.

2. **Content Creation**:
   - **Article browsing**: View all articles in a visually appealing format.
   - **Article editor**: Write and format articles with the Quill editor.

3. **Interactive Features**:
   - **Commenting system**: Logged-in users can leave comments on articles.
4. **Security**
   - Password hashing and salting using `bcrypt`.
5. **Enhanced UI/UX**
   - Consistent CSS styling across pages.
   - Masonry-style grid layout for article cards, dynamically rendered based on image attributes stored in the database.
  
---

## Technology Stack

### **Frontend**
- HTML, CSS, JavaScript
- Quill.js (for rich text editing)

### **Backend**
- Node.js
- Express.js

### **Database**
- SQLite with FTS5 extension for full-text search

### **Additional Libraries**
- `bcrypt` (password security)
- `jimp` (image processing)

---

## How to Run

### **Prerequisites**
Ensure you have Node.js and npm installed. Verify with:
```bash
node --version
npm --version
```
### **Install dependencies**
```bash
npm install
```
### **Set up the database**
```bash
sqlite3 project-database.db < final-script.sql
```
### **Start the server**
```bash
npm start
```
### **Access the application**
```bash
http://localhost:3000
```
---
### **Team**
This project was developed as part of a coursework assignment. Contributions include:

Frontend and backend development.  
Database design and integration.  
Rich text editing and UI enhancements.



