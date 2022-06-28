const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//var jwt  = require("express-jwt");
//var jwks = require("jwks-rsa");

// var jwtCheck = jwt({
//       secret: jwks.expressJwtSecret({
//           cache: true,
//           rateLimit: true,
//           jwksRequestsPerMinute: 5,
//           jwksUri: 'https://dev-ahz4kfiq.us.auth0.com/.well-known/jwks.json'
//     }),
//     audience: 'http://192.168.1.225/api-docs',
//     issuer: 'https://dev-ahz4kfiq.us.auth0.com/',
//     algorithms: ['RS256']
// });


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// swagger api documentation
const swaggerUi = require("swagger-ui-express"), 
   swaggerDocument = require("./swagger.json");

// simple route
//app.get("/", (req, res) => {
//  res.json({ message: "Welcome to the AlphaNumeric API." });
//});

//require("./app/routes/letter.routes.js")(app);
//require("./app/routes/number.routes.js")(app);

//app.use(jwtCheck);

// swagger path to api documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.get('/authorized', function (req, res) {
//     res.send('Secured Resource');
// });

app.get("/api/v1/letters", (req, res) => {
    res.json({ letters: "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z" });
});

app.get("/api/v1/numbers", (req, res) => {
    res.json({ numbers: "1,2,3,4,5,6,7,8,9,0" });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
