var koa = require('koa');
const fs = require("fs");
var koaRouter = require("koa-router");
var koaLogger = require("koa-logger");


const  main = (ctx, next) => {
    let response;
    console.log(ctx.path);
    switch(ctx.path){
        case "/":
            response = fs.readFileSync("./data.json",'utf-8');
            break;
        case '/todos':
            response = fs.readFileSync("./data.json",'utf-8');
            break;
        case '/addTodo':
            let req = ctx.request.query;
            let todoItem = {
                text: req.text,
                id: req.id,
                complete: req.complete
            }
            let data = fs.readFileSync("./data.json",'utf-8');
            // console.log(JSON.parse(data)); 
            data = JSON.parse(data);
            data.push(todoItem);
            console.log(response);
            try{
                fs.writeFileSync("./data.json",JSON.stringify(data));
                response = data;
            }catch(err){
                response = "添加失败"
            }
            break;
        case '/changeTodo':
            break;
        default:
            response = fs.readFileSync("./data.json",'utf-8');
    }

    ctx.body = response;
}

var app =  new koa();

app.use(koaLogger());
app.use(main);


app.listen(3004);