export default function (express, bodyParser, createReadStream, crypto, http) {
    const app = express()

    app.use((req, res, next) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,OPTIONS,DELETE');
        res.set('Access-Control-Allow-Headers', 'x-test,Content-Type,Accept,Access-Control-Allow-Headers');
        res.set('Charset', 'UTF-8');
        res.set('Content-Type', 'text/plain');
        next();
    })

    function login(req, res) {
        res.send("itmo286434");
    }

    function code(req, res) {
        res.set(headers)
        fs.readFile(import.meta.url.substring(7),(err, data) => {
            if (err) throw err;
            res.end(data);
        }); 
    }

    function sha1(request, response) {
        response.send(crypto.createHash('sha1').update(request.params.input).digest('hex'))
    }
 
    function reqData(req, res) {
        const url = req.query.addr || req.body
        let msg = ''
        if (url)
            http.get(url, {headers: {'Content-Type': 'text/plain'}}, response => {
                response.setEncoding('utf8')
                response.on('data', chunk => msg += chunk)
                response.on('end', () => res.send(msg))
            })
        else
            res.send('Не удалось получить данные по URL')
    }

    app.get('/login/', login)
    app.get('/code/', code)
    app.get('/sha1/:input/', sha1)
    app.get('/req/', reqData)
    app.post('/req/', reqData)
    app.all('*', login)
 
    return app
}