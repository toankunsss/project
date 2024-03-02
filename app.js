const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            text-align: center;
            background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_ajUXciq3GKGO3EJh3Qn9HU-0uimS819jf4zz69_zj5A-hSc9xaaYRPmp_KlJvCKpSw&usqp=CAU");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
        }
        .button1{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;height: 50px;
            width: 300px;
            background-color: brown; 
            border-radius: 5px;
        }
        .button1:hover{
            transition: o.3s;
            background-color: rgb(192, 113, 113);
        }
    </style>
</head>
<body>

    <h1 style="color: aliceblue;"> Don't miss this special offer</h1>
    <p style="color: aliceblue;">Get it now for just $10! The price will be increased after 50 downloads</p>
    <br>
    <button class="button1">
        <p style="color: aliceblue;">Get the latest version of Bootslander</p>
    </button >
</body>
</html>
`
