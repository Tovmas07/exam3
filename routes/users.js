import { Router } from 'express';

import controller from '../controllers/users.controller.js';
import auth from '../middlewares/auth.js';

const router = Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/profile', auth, controller.profile);
router.post('/login', controller.login);
router.post('/register', controller.register);

export default router;
