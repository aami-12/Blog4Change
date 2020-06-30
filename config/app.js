var dbHost = process.env.dbHost || "localhost";
module.exports = {
  name: "blog4change",
  title: "blog4change",
  
  http: {
    host: "localhost",
    port: 5000
  },
  author: "teamblog4change",
  version: "2.0.0",
  db: {
    connectionUri: "mongodb://" + dbHost + ":27017/blog4change",
    params: {},
    collections: ["moment", "user", "feeling", "ask"]
  }
};
