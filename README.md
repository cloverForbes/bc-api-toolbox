# BC-API-Toolbox
This is a toolbox to make dealing with the BigCommerce
API a bit easier.

##How To Start

###Install
Download From NPM

`npm install --save bc-api-toolbox`

###Using It

Import it

`const Store = require('bc-api-toolbox');`

Create a JavaScript Object with your Stores Hash, Client ID
and Token.

`const myStore = new Store(key,id,hash);`

Make Requests

````
myStore.getAllProducts(products => {
    products.forEach(product => {
        console.log(product);
    });
});
````

##Why?
While working with the BigCommerce API I started to notice
a lot of the functions I had been declaring were repeating
in every app. Thus the BC-API-Toolbox was born.

##What Does it Do?
Essentially this is a wrapper for requests and reduces
redundancy when dealing with the options object and 
responding to 429 Responses.


##API Reference

####`.getTotalNumber(callback)`
####`.getProductIds(callback)`
####`.getAllProducts(callback)`
####`.getTotalOrders(callback)`
####`.getAllOrders(callback)`
####`.getTotalCustomers(callback)`
####`.getAllCustomers(callback)`
####`.getProductImageUrls(id, callback)`
####`.getAdminEmail(callback)`