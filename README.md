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

####.getTotalNumber(callback)
#####Arguments[function(number)]
```
myStore.getTotalNumber(numProducts => {
  console.log(numProducts);
});
```
####`.getProductIds(callback)`
#####Arguments[function(array)]
```
myStore.getProductIds(ids => {
  ids.forEach(id => {
    console.log(id);
  });
});
```
####`.getAllProducts(callback)`
#####Arguments[function(array)]
```
myStore.getAllProducts(products => {
  products.forEach(product => {
    console.log(product);
  });
});
```
####`.getTotalOrders(callback)`
#####Arguments[function(number)]
```
myStore.getTotalOrders(numOrders => {
  console.log(numOrders);
});
```
####`.getAllOrders(callback)`
#####Arguments[function(array)]
```
myStore.getAllOrders(orders => {
  orders.forEach(order => {
    console.log(order);
  });
});
```
####`.getTotalCustomers(callback)`
#####Arguments[function(number)]
```
myStore.getTotalCustomers(numCustomers => {
  console.log(numCustomers);
});
```
####`.getAllCustomers(callback)`
#####Arguments[function(array)]
```
myStore.getAllCustomers(customers => {
  customers.forEach(customer => {
    console.log(customer);
  });
});
```
####`.getProductImageUrls(id, callback)`
#####Arguments[productID, function(array)]
```
myStore.getProductImageUrls(24151, urls => {
  urls.forEach(url => {
    console.log(url);
  });
});
```
####`.getAdminEmail(callback)`
#####Arguments[function(string)]
```
myStore.getAdminEmail(email => {
  console.log(email);
});
```