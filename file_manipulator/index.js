const app = require('./app');
const port = 3000;

// start server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});