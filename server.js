const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: 1,
        name: '홍길동',
        image: 'https://placeimg.com/64/64/1',
        birthday: '021011',
        gender: 'M',
        job: '고등학생'
        },
        {
            id: 2,
        name: '홍승범',
        image: 'https://placeimg.com/64/64/256',
        birthday: '021111',
        gender: 'M',
        job: '고등학생'
        },
        {
            id: 3,
            name: '홍철기',
            image: 'https://placeimg.com/64/64/100',
            birthday: '0000000',
            gender: 'M',
            job: '선생님'
        }
    ]);
});

app.listen(port, ()=>console.log(`Listening on port ${port}`));
