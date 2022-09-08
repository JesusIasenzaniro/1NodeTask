const fs = require('fs');
const { text } = require('stream/consumers');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Task 1</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome user</h1>');
        res.write('<form action ="/create-user" method="POST">');
        res.write('<label>name</label>');
        res.write('<input type= text name= username />');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>User1</li>');
        res.write('<li>User2</li>');
        res.write('<li>User3</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
};

module.exports = requestHandler;
