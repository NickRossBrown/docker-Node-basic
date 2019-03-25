const express = requre('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Stroodle Boots is dope')
});

app.lsiten(8080, () => {
    console.log('listening on port 8080')
})