const express = require('express');
const app = express();
const PORT = 8000;


const shelf = {

    'baldursgate': {
        year:'1998',
        dev:'blackisle',
        genre:'RPG'
    },

    'baldursgate2': {
        year:'2000',
        dev:'blackisle',
        genre:'RPG'
    },

    'starcraft': {
        year:'1998',
        dev:'blizzard',
        genre:'RTS'
    },

    'error': {
        year:'',
        dev:'',
        genre:''
    }

}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:gamename', (request, response)=>{
    let req = request.params.gamename.toLowerCase();
    if(shelf[req]) {
        response.json(shelf[req]);
    } else{
        response.json(shelf['error']);
        console.log('not in database, sorry sweatie');
    }
});

app.listen(PORT, ()=>{
    console.log(`the server is running ${PORT} nice ${__filename}`);
});
