const Toolbox = require('./toolbox');

const myStore =  new Toolbox('4exoz4mx4l9d5dsnextoch547dxnqr7', 'af11g8yhohwaaqwl4xxasrlny6vg755', 'et6hidb37e');


myStore.getProductIds(ids => {
    ids.forEach(id => {
        myStore.getProductImageUrls(id , urls => {
            console.log(id);
        })
    })
});