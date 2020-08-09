let express = require('express');
let fs = require("fs")
let app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs')

app.get('/', (req, res)=>{
    res.render('index');
})

app.post('/contact', (req, res)=>{
    res.sendStatus(200);
    console.log("Message recu : " + JSON.stringify(req.body))
    let message = { message: req.body.message, contact: req.body.contact}
    if (!fs.existsSync("./messages")){
        fs.mkdir("./messages", ()=>{});
    }
    let fileName = new Date();
    fileName = fileName.toUTCString().replace(/[:]/g,"-").replace(/[^a-z0-9 ]/gi, "");
    fs.writeFile(`./messages/${fileName}`,`By: ${message.contact},\nMsg: ${message.message}`, ()=>{});
})

app.get('*',(req,res)=>{
    res.render('404')
})

app.listen(80);