import { Router } from 'express';

import users from './users.js';
import path from "path";

const router = Router();

router.get(['/', '/home'], (req, res) => {
  res.render('home', { title: 'Auth test project' });
});

router.get(['/asd'], (req, res) => {
  res.send('Hello World!');
});

router.get('/file/:name', function(req, res, next) {
  const options = {
    root: path.resolve('./auth-project/../public/css'),
    dotfiles: 'deny',
    headers:{
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
  let filename = req.params.name;

  res.download(filename, options, function(err) {
    if (err) {
      next(err);
    }else{
      console.log('Sent:', filename);
    }
  });
})


router.get('/z', function(req, res) {
  const file = path.resolve('./routes/users.js')
  console.log(file)
  res.setHeader('Content-Disposition', 'attachment; filename=kuku');
  res.sendFile(file);
})








router.use('/users', users)

export default router;