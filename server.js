const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();
app.use(require("cors")());

mongoose
	.connect("mongodb+srv://admin:test123@cluster0.zoihd.mongodb.net/test", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: true,
	})
	.then(() => {
		console.log("db connected");
	})
	.catch((e) => {
		console.log(e);
	});

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	}),
);
app.listen(5000, () => {
	console.log(`Server is up on port 5000`);
});
