# IceTeaBook - The website for book shop 📘
Welcome to our IceTeaBook project ✌️

# 💻 Technology in Use
Our website uses the following technologies:
* Front-end: ReactJS, Bootstrap 5, SASS and many complementary libaries provided by npm.
* Back-end: NodeJS, ExpressJS.
* Database: SQL Server.
* Architecture Pattern: Model-View-Controller (MVC).

# 🎯 Features Built
### User
1. View book list: You can view a list of books on our homepage, search for books, and filter books by various criteria.
2. Cart management: You can add items to your cart, update the number of products, delete items from your cart, and select items to order.
3. Order books: After selecting books from your cart, you can make an order using various payment methods such as Momo, VNPAY, banking, or cash.
4. Address management: You can save your address when you order a book and select, modify, or add new addresses for future purchases.
5. Comment and Rating: You can give comments and ratings for each book, view comments from previous customers, and see the average rating for each book.
6. Manage profile: You can track the status of your orders and change your personal information.

### Admin
1. Book Management: Admin can create, read, update, and delete book information (name, price, description, etc.).
2. Member Management: Admin can view, ban (disallow members from purchasing products in the store), and delete a user.
3. Order management: Admin can view a list of order information, including the customer's name, address, phone number, total price, etc. You can sort by time, filter by status, and search for orders.
4. Update order status: Admin can update the order status based on the progress of the order. There are five type of stattus: Waiting, Confirmed, On Delivering, Success, and Canceled. When you update the status from "confirmed" to "On Delivering", admin need to provide the delivery code link to track the shipping progress.

# ⚙️ Installation

To run the project on your own computer, please make sure that you have already installed NodeJS and MSSQL. Follow these steps to install our website:

### Cloning repository
First, you need to clone this Github Repository:
```bash
  https://github.com/vuong2404/DACNPM-HK221-Bookstore-website
```
### Import init data
You can find the file "bookstore.sql" in the "Document" folder. Open MSSQL, paste all the script, and run it.

### Setup enviroment
In the "server" folder, create a ".env" file with the information needed to connect to the SQL Server:
```
DATABASE=BOOKSTORE
SERVER=<your username>
```
### Install Dependencies
Next, you would need to install all of dependencies for our project. 
 First, go to the "client" folder and install all of the dependencies by running the following command:
```bash
  cd client
  npm i
```
Next, open a new terminal window and go to the "server" folder:
```bash
  cd server
  npm i
```

You have now installed all the necessary dependencies. Let's get started!

## 🛠 Running IceTeaBook

In client folder
```bash
  npm start
```

In server folder:
```bash
  npm start
```

The ReactJS application will run on http://localhost:3000 and the server run on http://localhost:8080


Done! Good luck and have fun <3

