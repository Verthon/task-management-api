import Koa from "koa";
import bodyParser from "koa-bodyparser";

import taskRouter from "./tasks/routes/task-routes.js";

export const app = new Koa();

app.use(bodyParser());

app.use(taskRouter.routes()).use(taskRouter.allowedMethods());

app.use(async (ctx) => {
	ctx.body = "Hello World";
});

app.use(async (ctx) => {
	ctx.status = 404;
	ctx.body = "Not found";
});

app.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
});
