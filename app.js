const express = require('express');
const search = require('./src/utils/Search')

const app = express();
const port = process.env.PORT || 3000;

app.get('/search', (request, response) => {
    if(!request.query.q) {
        return response.send({
            error: 'You must provide a search term'
        });
    }

    search(request.query.q, (error, list) => {
        if(error) {
            return null;
        }

        response.send(list)

    });
    
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});