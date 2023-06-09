const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><h1>Dummy Text</h1></head>')
        res.write('<body><form action="/create-user" method="POST"><input name="username"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    };

    if (url === '/users') {
        res.write('<html>');
        res.write(
            '<body><ul><li>User 1</li><li>User 2</li></ul></body>'
        )
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            console.log(user);
        });
    };

    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
};

module.exports = requestHandler;