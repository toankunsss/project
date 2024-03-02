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
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .container {
            display: block;
            justify-content: space-between; /* Các phần tử con sẽ được căn giữa và giữa chúng sẽ có khoảng trống */
            margin: auto;
        }
        .backgroudbai1 {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            width: 190px;
            margin: auto;
            background-color: rgb(79, 128, 178);
        }
        .backgroudbai{
            height: 50px;
            width: 190px;
            margin:auto;
            background-color: black;
            color: white;
            border-radius: 10px
        }
        .backgroudbai:hover{
            transition: 0.3s;
            background-color: antiquewhite;
        }
        .backgroudbai1 h3 {
            margin: 0;
            color: white; 
        }
        .colorword {
            color: blue; 
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="backgroudbai1">
        <h3>190 x 50</h3>
    </div>
    <h1>Best <span class="colorword">Share Hosting</span> Company</h1>
    <p>With this responsive landing page template, you can promote your all hosting, domain and email services</p>
    <button class="backgroudbai" style="margin-right: 10px;">VIEW</button>
    <button class="backgroudbai" style="margin-left: 10px;">ALL</button>
    
</body>
</html>
`
