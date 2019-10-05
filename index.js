const path = require('path');
const server = require("server");

const { get, post } = server.router;
const { render, redirect, json, header } = server.reply;
const { modern} = server.utils;
// server(ctx => "Hello World2!")

// server( { port: 3002 }, ctx => "Hello World!")


/* server({ port: 3000 }, [
    get('/', ctx => 'Hello World!'),
   // get('/', () => render(path.join(__dirname, 'images/11.jpg'))),
    post('/', ctx => {
        console.log(ctx.data);
        return 'ok';
    })
]); */

server({ port: 3000, public: 'public', favicon: "public/logo.svg"}, [
    ctx => header({ "Set-Cookie": ["name=King", "age=20"] }),
    get('/', ctx => "Hello Docker"),
    post('/', ctx => json(ctx.data)),
    get(ctx => status(404))
],ctx => console.log(ctx.ip, ctx.url, ctx.path, ctx.method, ctx.headers, ctx.cookies)
);

