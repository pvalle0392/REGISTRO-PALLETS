var app = require('./app');
// var port = 3700;
const port = process.env.PORT || 3700;

app.listen(port,()=>{
    console.log('servidor conectado al puerto', port);
})