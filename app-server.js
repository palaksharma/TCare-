/**
 * NG_DIR_PATH = /app
 * NG_PORT = 3000
 */
const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const hsts = require('hsts');
const helmet = require('helmet');
const localStorage = require('localStorage');
const jwt = require('jsonwebtoken');
const config = require('./config');
const jwtMiddleware = require('./jwt-middleware');
// Api of Every Module
const configurationRoutes = require('./api/routes/configuration');
const jobsRoutes = require('./api/routes/jobs');
const statusRoutes = require('./api/routes/status');
const performanceRoutes = require('./api/routes/performance');
const jobMetaDataRoutes = require('./api/routes/typography');
const talendRoutes = require('./api/routes/talend');
const incidentRoutes = require('./api/routes/incident');


app.use(helmet({
    frameguard: {
        action: 'deny'
    }
}));
app.use(hsts({
    maxAge: 31536000, // 12 months
    includeSubDomains: true,
    preload: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
const NG_DIR_PATH = "/dist" || '/app';
app.use(express.static(path.join(__dirname, NG_DIR_PATH)));
// Mask Server version disclosure via HTTP response headers
app.use(function(req, res, next) {
    res.setHeader('Server', 'Next Gen');
    next();
});
//Configuration End Point
app.use('/configuration', configurationRoutes)
    //Status End Point
app.use('/status', statusRoutes);
//Performance End Point
app.use('/performance', performanceRoutes);
app.use('/jobList', jobMetaDataRoutes);
//Jobs End Point 
app.use('/jobs', jobsRoutes);
app.use('/talend', talendRoutes);
app.use('/incident', incidentRoutes);
/* To validate login */
app.post('/validateLogin', bodyParser.json(), (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
        if (username === 'admin' && password === 'adminadmin') {
            const token = jwt.sign({ username: username },
                config.secret, { expiresIn: '2h' } // expires in 2 hours
            );
            // return the JWT token for the future API calls
            res.json({
                success: true,
                message: 'Authentication successful',
                token: token
            });
        } else {
            res.send(403).json({
                success: false,
                message: 'Incorrect username or password'
            });
        }
    } else {
        res.send(400).json({
            success: false,
            message: 'Authentication failed. Please check the request'
        });
    }
});

// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'pentaho',
//     password: 'pentaho',
//     database: 'tmaster',
//     port: '3999'
// });
// connection.connect(function(err) {
//     if (err) { return console.error('error: ' + err.message); }
//     console.log('Connected to the MySQL server.');
// });


/* Handle all application URL(s) */
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});
/* Create the server for application */
const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => console.log('NextGen server is running on port ' + port + '...'));