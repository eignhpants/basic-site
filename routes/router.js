
import express from 'express';
import config from '../CONFIG';
// the Router subclass to be exported
var router = express.Router();


router.get('/', (req, res, next)=>{
  //console.log(res.statusCode);
  res.render('index');
});

router.get('/timeline', (req, res, next)=>{
  res.json(config.timeline);
});
// router.get('/test', (req, res)=>{
//   res.send("from routed")
// });

module.exports = router;
