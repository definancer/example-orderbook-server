const { WyvernProtocol } = require("wyvern-js");
let orderData = require("./data/orders.json"); 

(async () => { 
    let order = orderData.makerOrder;
    const orderHash = WyvernProtocol.getOrderHashHex(order);
    console.log("orderHash",orderHash)
})();