const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const auth = require('./src/auth')

const morgan = require('morgan');
app.use(morgan ('tiny'));

let config = require('./.env');
const environment = process.env.NODE_ENV;
config = config[environment];
if (!config)
    return console.error(`Invalid ${environment} environment`);

// Conected mongoose with db
const mongoose = require('mongoose');
mongoose.connect(config.mongoDBURI + config.mongoDBDataBaseName);

// Middlewares
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

// Auth
const authRouter = require('./src/auth');
app.use('/auth', authRouter);

const usersRouter = require('./src/users');
app.use('/users', auth.middlewareauth, auth.middlewareblock, usersRouter);

const customersRouter = require('./src/customers');
app.use('/customers', auth.middlewareauth, customersRouter);

app.listen(config.port, (err) => { console.log(`
    Successful server startup
    Running at ${config.port}
    Have a Nice Day! 😁
  `);
})