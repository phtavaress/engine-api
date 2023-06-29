const express = require('express');
const search = require('./src/utils/Search')

const app = express();

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