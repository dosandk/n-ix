import express from 'express';
import fs from 'fs';
import jwt from 'jsonwebtoken';
import config from '../config';

const users = fs.readFileSync(__dirname + '/../../users.json', 'utf8');
const usersObj = JSON.parse(users);
const router = express.Router();

router.post('/', (req, res) => {
    const { name, pass } = req.body;

    if (usersObj[name] === pass) {
        const token = jwt.sign({ username: name, isAuthenticated: true }, config.jwtSecret);

        res.json({ token });
    }
    else {
        res.status(401).json({ errors: { form: 'Invalid Credentials' } });
    }
});

export default router;