# PApiTestTheam

REST API to manage customer data.
Works as the backend side for a CRM 
Here are the functions of the API:

• The API be only accessible by a registered user by providing an authentication mechanism.
• A user can only:

  • List all customers in the database.
  • Get full customer information, including a photo URL.
  • Create a new customer:
  • A customer should have at least name, surname, id and a photo field.
  • Name, surname and id are required fields.
  • Image uploads be able to be managed.
  • The customer have a reference to the user who created it.
  • Update an existing customer.
  • The customer hold a reference to the last user who modified it.
  • Delete an existing customer.

• And admin can also:

  • Manage users:
  • Create users.
  • Delete users.
  • Update users.
  • List users.
  • Change admin status. 

## Getting Started

You can clone the repository to your workspace 
```
git clone https://github.com/EnriqueSegovia/ApiTestTheam.git
```
Install the packages

```
npm i
```

And Run it

```
npm run dev
```

## Use the API

First, to authenticate yourself you have to do a POST /auth/login with username and password that will generate a Json Web Token with the necessary information for the api to work(an administrator had to have added that user to the database previously), this token has to be introduced by the header. By default users do not have administrator permissions, only the administrator can create other administrators or change the permission from a user to an administrator.

In the apiUsers file of the repo, you will find an administrator and a user, with their respective passwords to do your tests or start ups.

• Admin Endpoints:

-Create User: 

  check the user.model file to see the schema

```
POST /users
```

-Get Users: 
```
GET /users
```

Get UserByID: 
```
GET /users/id
```

Delete UserByID: 
```
DELETE /users/id
```

Update UserByID: 
```
PATCH /users/id
```
--------------------------------------------

• User Endpoints:

  check the customer.model file to see the schema

-Create customer: 
```
POST /customers
```

-Get Customers: 
```
GET /customers
```

Get CustomerByID: 
```
GET /customers/id
```

Delete CustomerByID: 
```
DELETE /customers/id
```

Update CustomerByID: 
```
PATCH /customers/id
```