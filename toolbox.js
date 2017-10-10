const request = require('request-promise');

class Toolbox{
    constructor(key,id,hash){
        this.hash = hash;
        this.options = {
            url: `https://api.bigcommerce.com/stores/${hash}/v3/`,
            headers: {
                'X-Auth-Client': id,
                'X-Auth-Token': key,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
    }

    getTotalNumber(callback){
        this.options.url = `https://api.bigcommerce.com/stores/${this.hash}/v3/catalog/products`;
        request.get(this.options, (err,res,body) => {
            const data = body;
            callback(JSON.parse(data).meta.pagination.total);
        })
    };

    getProductIds(callback){
        this.getTotalNumber(number => {
            let ids = [];
            for(let x=0;x<=number/50;x++){
                this.options.url = `https://api.bigcommerce.com/stores/${this.hash}/v3/catalog/products?page=${x+1}&limit=50`;
                request.get(this.options, (err,res,body) => {
                    const data = JSON.parse(body).data;
                    data.forEach(item  => {
                        ids.push(item.id);
                    });
                    if(ids.length === number){
                        callback(ids);
                    }
                })
            }
        })
    }

    getAllProducts(callback){
        this.getTotalNumber(number => {
            let products = [];
            for(let x=0;x<=number/50;x++){
                this.options.url = `https://api.bigcommerce.com/stores/${this.hash}/v3/catalog/products?page=${x+1}&limit=50`;
                request.get(this.options, (err,res,body) => {
                    const data = JSON.parse(body).data;
                    data.forEach(item  => {
                        products.push(item);
                    });
                    if(products.length === number){
                        callback(products);
                    }
                })
            }
        })
    }

    getTotalOrders(callback){
        this.options.url = `https://api.bigcommerce.com/stores/${this.hash}/v2/orders`;
        request.get(this.options, (err,res,body) => {
            const data = body;
            callback(JSON.parse(data).length);
        })
    }

    getAllOrders(callback){
        this.options.url = `https://api.bigcommerce.com/stores/${this.hash}/v2/orders`;
        request.get(this.options, (err,res,body) => {
            const data = body;
            callback(JSON.parse(data));
        })
    }

    getTotalCustomers(callback){
        this.options.url = `https://api.bigcommerce.com/stores/${this.hash}/v2/customers`;
        request.get(this.options, (err,res,body) => {
            const data = body;
            callback(JSON.parse(data).length);
        })
    }

    getAllCustomers(callback){
        this.options.url = `https://api.bigcommerce.com/stores/${this.hash}/v2/customers`;
        request.get(this.options, (err,res,body) => {
            const data = body;
            callback(JSON.parse(data));
        })
    }
}



module.exports = Toolbox;