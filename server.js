const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const  tools = [
  { name: 'Angular'},
  { name: 'Backbone'},
  { name: 'Ember'},
  { name: 'Grunt'},
  { name: 'Gulp'},
  { name: 'Mocha'},
  { name: 'ReactJS'},
  { name: 'Vue'},
  { name: 'Webpack'},
  { name: 'Yarn'},
];
app.get("/api/tools", (req, res) => {
  let offset = parseInt(req.query.offset, 10);
  if (isNaN(offset)) {
    offset = 0;
  } 
  let limit = parseInt(req.query.limit, 10);
  let end = (isNaN(limit)) ? tools.length : offset+limit;

  res.json({ tools: tools.slice(offset, end) }); 
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});

module.exports = app;