const Koa = require("koa");
const Router = require("koa-router");
const BodyParser = require("koa-bodyparser");

const app = new Koa();
const router = new Router();

require("./mongo")(app);
const ObjectID = require("mongodb").ObjectID;


// Use the bodyparser middlware
app.use(BodyParser());

router.get("/", async function (ctx) {
    ctx.body = {message: "Hello World!"}
})
.post("/", async function (ctx) {
    let name = ctx.request.body.name || "World";
    ctx.body = {message: `Hello ${name}!`}
});
// List all news
router.get("/news", async (ctx) => {
    ctx.body = await ctx.app.news.find().toArray();
});
// Create new news
router.post("/news", async (ctx) => {
    ctx.body = await ctx.app.news.insert(ctx.request.body);
});
// Get one
router.get("/news/:id", async (ctx) => {
    ctx.body = await ctx.app.news.findOne({"_id": ObjectID(ctx.params.id)});
});
// Update one
router.put("/news/:id", async (ctx) => {
    let documentQuery = {"_id": ObjectID(ctx.params.id)}; // Used to find the document
    let valuesToUpdate = ctx.request.body;
    ctx.body = await ctx.app.news.updateOne(documentQuery, valuesToUpdate);
});
// Delete one
router.delete("/news/:id", async (ctx) => {
    let documentQuery = {"_id": ObjectID(ctx.params.id)}; // Used to find the document
    ctx.body = await ctx.app.news.deleteOne(documentQuery);
});
app.use(router.routes()).use(router.allowedMethods());

app.listen(5000);
