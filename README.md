# uix-bangazon-lite-musty-magnets
uix-bangazon-lite-musty-magnets created by GitHub Classroom

## Bangazon Lite

Bangazon Lite is your one stop shop for buying and selling homemade products! Musty-Magnets offers a web based platform for both buyers and sellers to conduct their business with a streamlined user interface provided by React JS.

## Getting started

Want to contribute to the amazing experience that is Bangazon Lite? Great! 

Just follow these steps to get started!
    1. Open your terminal and create, then `cd` into a new local repository that will hold the files of your Bangazon Lite project.
    
    2. Run `git clone https://github.com/nss-day-cohort-24/uix-bangazon-lite-musty-magnets.git`
    
    3. Once complete you need to navigate into the correct folder to begin development.  This should do the trick:
    `cd uix-bangazon-lite-musty-magnets/bangazon` 
    
    4. Now we need to verify that all files were cloned into your repository by running `ls -a`.

#### Cloned Project Files
This is a list of files that clone with the current version of Bangazon Lite:

`DONOTREADME.md`
`package.json`
`db.json`
`styleguide.config.js`

You should also see folders for `src` and `public`.  We'll dive into file structure later. For now, lets move on to installing the core dependencies for Bangazon.

## Installing

Bangazon is built upon the React JS framework to offer users an intuitive interface and experience. This means we need to install React, along with some of its dependencies before development can start. Learn more about [React](reactjs.org). 

On the command line, ensure you are in your project's `bangazon` folder, then run `npm install`.  This will reference the `package.json` file in your repo and install all dependencies listed within the file.

## How to use? 

To learn more about the project's dependencies click on the appropriate link below!

* [Bootstrap](https://getbootstrap.com)
* [Faker](https://github.com/marak/Faker.js/)
* [React Router](https://reacttraining.com/react-router/core/guides/philosophy)
* [Reactstrap](https://reactstrap.github.io/)
* [JSON-Server](https://github.com/typicode/json-server)

#### JSON Server

Bangazon uses [JSON-Server](https://github.com/typicode/json-server) to maintain user data, including orders, sales and profile data.  JSON Server provides an easy to use platform for building scalable & maintainable data structures. Below you will find an image of our data table for reference.  To get started using JSON Server on your local machine, follow the steps below!

![Bangazon's ERD Structure](src/img/bangazon-data-structure.png)

1. Open a new terminal tab.
2. Install JSON Server by running `npm install -g json-server` from the command line.
3. Next, run `json-server --watch db.json` from the command line.  This command will start the database server.  If successful, the resulting dialog should return this:
 
```
json-server --watch db.json
\{^_^}/ hi!
Loading db.json
Done
Resources
http://localhost:3000/order
http://localhost:3000/user
http://localhost:3000/product
http://localhost:3000/orders_Products
Home
http://localhost:3000
Type s + enter at any time to create a snapshot of the database
Watching...
```


## Team Members
* Taylor Bailey
* Arthur Smith
* Ben Atkins
* Dan Watson
* Jesie Oldenburg
* Phonetip Liu Hobson
* Ryan Bristentine
* Sam Kimball
* Amber Sharpe

