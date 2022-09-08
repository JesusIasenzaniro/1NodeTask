const fs = require('fs');

// route 1 = "/"
// route 1 = "/users"

const requestHandler = (req, res) => {
    const url = req.url;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Task 1</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome user</h1>');
        res.write('</body>');
        // res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
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
