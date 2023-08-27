const helmet = require('helmet');
const express = require('express');

// htmx 서버
const app = express();

app.use(express.static('public'));
app.use(helmet());

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.get('/', (req, res) => {
    res.send('<div>Home Page</div>');
});

app.get('/reg', (req, res) => {
    res.send('<div>hello</div><button>hello</button>');
});