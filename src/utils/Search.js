const request = require('request');

const key = 'AIzaSyDSlO1BLY5265tqX0ynA_MW_PVg4YHPXaM'
const cx = '059ee0f3f6958464f'
const faviconUrl = 'https://www.google.com/s2/favicons?domain='

const search = (query, callback) => {
    const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}`;
    request({url: url, json: true}, (error, response) => {
        if(error) {
            console.log('Unable to connect to the service');
        }
        var results = response.body.items;
        var list = [];
        results.forEach(result => {
            newItem = {
                title: result.title,
                link: result.link,
                icon: `${faviconUrl}${result.link}`
            }
            list.push(newItem)
        })
         callback(undefined, list);
    })
};

module.exports = search;
