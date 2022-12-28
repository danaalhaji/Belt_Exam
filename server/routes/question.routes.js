const PlayerController = require('../controller/question.controller');

module.exports = function(app){
        app.get('/api/question', PlayerController.findAllPlayers);
        app.get('/api/top', PlayerController.findTop3);
        app.get('/api/question/:id', PlayerController.findOnePlayer);
        app.post('/api/question', PlayerController.createNewPlayer);
        app.delete('/api/question/:id', PlayerController.deletePlayer);
        app.put('/api/question/:id', PlayerController.updateOnePlayer);
    }
    