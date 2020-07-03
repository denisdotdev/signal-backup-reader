const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const app = express();
const port = 3000

const models = require('./models');

moment.locale('fr');
//moment.locale('en');

app.use(bodyParser.json());
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.send('Hello world!'))

app.get('/recipients', function(req, res) {
    models.Recipient.findAll({}).then(function(recipients) {
        res.render('recipients', {recipients: recipients});
    });
});

app.get('/recipients/:recipientId', function(req, res) {
    models.Recipient.findAll({where: { _id: req.params.recipientId} }).then(function(recipients) {

        // Find thread associated with this user..
        models.Thread.findAll({where: { recipient_ids: req.params.recipientId} }).then(function(threads) {
            // Find the latest messages in this thread...
            if (threads.length == 0) {
                res.render('recipient', {recipient: recipients, messages: []});
            } else {
                models.Sms.findAll({
                    where: { thread_id: threads[0]._id},
                    order: [
                        ['date', 'ASC']
                    ]
                }).then(function(smss) {
                    res.render('recipient', {recipient: recipients, messages: smss, moment: moment});
                });
            }
        });
    });
});

models.sequelize.sync().then(function() {
    app.listen(port)
});