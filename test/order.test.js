const server = require("../server/index.js");
const config = require("../config.json");
let orderData = require("./data/orders.json");
let supertest = require("supertest");

(async () => {
  // await server.go(config);
  // let superServer = supertest(server.app);

  let superServer = supertest("http://127.0.0.1:8088");
  // http://127.0.0.1:8088/v0/check
  // http://127.0.0.1:8088/v0/assets
  superServer
    .post("/v0/orders/post")
    .send(orderData.makerOrder)
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) { 
      console.log(res.body);
    });
})();
