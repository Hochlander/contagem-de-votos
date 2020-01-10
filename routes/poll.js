const express = require('express');
const router = express.Router();

const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '929886',
    key: 'df9e73c06d8903bcebd0',
    secret: '11b7a85bea7b3ecd498e',
    cluster: 'us2',
    encrypted: true
  });

router.get('/', (req, res)=>{
    res.send('Eleição');
});

router.post('/', (req, res)=>{
    pusher.trigger('os-poll', 'os-vote', {
        points:1,
        os: req.body.os        
      });

      return res.json({success:true, message:'Voto computado! Obrigado por votar'});
});

module.exports = router;