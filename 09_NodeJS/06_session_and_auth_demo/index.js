import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import authMiddleware from 'middlewares/authMiddleware.js';

const app = express();
const port = 3000;

const saltRounds = 10;
const usersData = {};
const jwtSecret = 'jwtSecret';


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(authMiddleware());

app.set('view engine', 'hbs');
app.engine('hbs', engine({
    extname: 'hbs'
}));

app.get('/', (req, res) => {


    const user = res.user;
    console.log(user);

    res.render('home', { user });

});

app.get('/login', (req, res) => {
    return res.render('login');
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (usersData[email]) {
        const dbPassword = usersData[email].password;
        const correctPassword = await bcrypt.compare(password, dbPassword);
        const token = jwt.sign({ email }, jwtSecret, { expiresIn: '1h' });

        res.cookie('session', token);
        res.redirect('/');
    } else {
        res.send('No such user!')
    }
})

app.get('/register', (req, res) => {
    return res.render('register');
})

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (usersData[email]) {
        res.send('User already exists!')
    } else {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        usersData[email] = {
            'email': email,
            'password': hashedPassword
        }
    }

})



app.listen(port, () => console.log(`App listening to port ${port}...`));