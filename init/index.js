const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listings.js");

main()
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Records");
}

const initDb = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68fdde1d3896529e46429a58",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data initialised");
};

initDb();
