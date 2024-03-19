const mongoose = require("mongoose");
require("dotenv").config()


const dbCon = async () => {
  await mongoose.connect(
    process.env.url_mongo
  );
};

module.exports = dbCon;
