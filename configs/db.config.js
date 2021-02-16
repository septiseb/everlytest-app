const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect("mongodb+srv://septiseb:HolaMundo10.@cluster0.wi3mk.mongodb.net/everlytest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`Successfully connected to the database Everlytest`);
  })
  .catch((error) => {
    console.error(
      `An error ocurred trying to connect to the database Everlytest: `,
      error
    );
    process.exit(1);
  });
