# Backend_inventory
## Project Achievements:
Basic CRUD Functionality
- Create inventory items
- Edit Them
- Delete Them
- View a list of them

Additional function
- Create “shipments” and assign inventory to the shipment, and adjust inventory appropriately


## How to use this project
1. Install node.js https://nodejs.org/en/
```
$ node -v

(output)
v16.14.0
```
2. Clone the repository to a local drive
```
$ git clone git@github.com:SSun97/backend_inventory.git
```
3. Go to the repository folder and install dependencies, run the commands below
```
$ cd backend_inventory
$ npm install
```
4. Make sure port 3000 on the local machine is available (the example below shows port 3000 is occupied by node, need to terminate the Process ID (PID) 70695 before moving on)
```
$ lsof -i :3000 -S

(output)
COMMAND   PID USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    70695 ssun   24u  IPv6 0x91300bb1a86b6d7d      0t0  TCP *:hbci (LISTEN)
```
5. Run the server
```
$ npm start

(output)
> inventory_tracking@1.0.0 start
> node server.js
Server is running on port 3000
```
6. In the browser go to the address http://localhost:3000 

## Features added to the project
- The endpoint of the update/view page is using slug of product name instead of product id. It is more user-friendly.
- Names and description strings are trimmed before saving to the file.
- Modal pops up when successfully created or updated the product.
- Modal pops up when successfully created shipment.
- Product name should be unique, if not, a modal is popped up with an error message.

## Things that can be done to improve this project
- Use a database like MongoDB instead of the file system. The author chose a file system to store data because it is easier to deploy on the local machine. It doesn't require the user to install the database or provide credentials for an online database.
- Improve security. [Here](https://www.linkedin.com/pulse/from-zero-trust-model-web-security-best-practices-suggestions-sun/?trackingId=2ehBRZb%2Bl90LJjavXg%2F1fA%3D%3D) is my article about this topic.
- Add a confirmation modal for deleting the item.
- Use front-end framework instead of Pug Template package to create front-end pages since Pug generates the HTML code from the server-side. When the I/O volume is high, the burden on the back-end API server will be high.
- Set tracking number for each shipment to distinguish each shipment
## Author
Simon Sun: sunmingyu.97@gmail.com
