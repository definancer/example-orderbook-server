const log = require("./server/logging.js");
const config = require("./config.json");

const { Sequelize } = require("sequelize");

(async () => {
  // const sequelize = new Sequelize(
  //   config.db_name,
  //   config.db_user,
  //   config.db_pass,
  //   {
  //     host: config.db_host,
  //     dialect: "mysql",
  //     pool: { max: 25, min: 0, acquire: 30000, idle: 10000 },
  //     operatorsAliases: false,
  //     logging: (msg) => log.debug({ origin: "sequelize" }, msg),
  //   }
  // );

  const { Sequelize, sequelize, Op, afterSync, Synced, Asset, Settlement, Order, encodeOrder, decodeOrder, decodeAsset, decodeSettlement } = require('./server/db.js')(config)

  const { startBlockNumber, port, provider, network } = config


  try {
    await sequelize.authenticate();
 
    // 顺序必须一致
    //{ force: true }
    await Synced.sync();
    await Asset.sync(); 
    await Order.sync();
     await Settlement.sync();

     await afterSync()

    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
