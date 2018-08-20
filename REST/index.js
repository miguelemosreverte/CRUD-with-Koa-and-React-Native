
const jwt = require("./jwt");
const Koa = require("koa");
const Router = require("koa-router");
const BodyParser = require("koa-bodyparser");

const app = new Koa();// Create a new securedRouter
const router = new Router();
const securedRouter = new Router();

require("./mongo")(app);
const ObjectID = require("mongodb").ObjectID;



// Use the bodyparser middlware
app.use(BodyParser());



router.get("/", async function (ctx) {
    ctx.body = {message: "Hello World!"}
})
.post("/", async function (ctx) {
    const name = ctx.request.body.name || "World";
    ctx.body = {message: `Hello ${name}!`}
})
.get("/news", async (ctx) => {
    ctx.body = await ctx.app.news.find().toArray();
})
.get("/news/:id", async (ctx) => {
    ctx.body = await ctx.app.news.findOne({"_id": ObjectID(ctx.params.id)});
});





// Create new news
securedRouter.post("/news", async (ctx) => {
    ctx.body = await ctx.app.news.insert(ctx.request.body);
});
// Update one
securedRouter.put("/news/:id", async (ctx) => {
    const documentQuery = {"_id": ObjectID(ctx.params.id)}; // Used to find the document
    const valuesToUpdate = ctx.request.body;
    ctx.body = await ctx.app.news.updateOne(documentQuery, valuesToUpdate);
});
// Delete one
securedRouter.delete("/news/:id", async (ctx) => {
  console.log("DELETE IS COMING")
    const documentQuery = {"_id": ObjectID(ctx.params.id)}; // Used to find the document
    ctx.body = await ctx.app.news.deleteOne(documentQuery);
});


// Login users
router.post("/login", async (ctx) => {
     const givenEmailThisIsTheResult = await ctx.app.auth.findOne({"email": ctx.request.body.email});
     if (givenEmailThisIsTheResult
       && givenEmailThisIsTheResult.password == ctx.request.body.password) {
       console.log("LOGGED")
       ctx.body = {
             token: jwt.issue({
                 user: "user",
                 role: "admin"
             })}
    }
    else  {
    console.log("NOT LOGGED",ctx.request.body, givenEmailThisIsTheResult)
        ctx.status = 401;
        ctx.body = {error: "Invalid login"}
    }
});// Create new users
router.post("/register", async (ctx) => {
    console.log("Inserting ", ctx.request.body)
    ctx.body = await ctx.app.auth.insert(ctx.request.body);
});

// Add the securedRouter to our app as well
app.use(router.routes()).use(router.allowedMethods());

app.use(require("./jwt"));  // Not usued because it says to the user "Authentication Error", while i like JSON more
//const jwt = require("./jwt");
//app.use(jwt.errorHandler()).use(jwt.jwt()); // {"error":"Not authorized"} much better

app.use(securedRouter.routes()).use(securedRouter.allowedMethods());
//app.use(jwt.errorHandler()).use(jwt.jwt());



app.listen(5000);
