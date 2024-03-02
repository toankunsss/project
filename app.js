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
</head>
<body>

    <div class="container">
        <div class="box"></div>
        <div class="text">
            <h1>
                Don't miss this special offer!
            </h1>
            <h2 >
                Get it now for just 10$! the price will be increased after 50 dowloads
            </h2>
            <button>
                Get the latest version of Bootslander
            </button> 
        </div>
    </div>
    
    
</body>
</html>
`
