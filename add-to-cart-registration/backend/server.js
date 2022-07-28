const dotenv = require('dotenv');
const express = require('express');
const app = express();
require('./db/config')
const user = require('./model/user')
const router = require('./routers/routes')
const cors = require('cors')
const morgan = require('morgan')

dotenv.config({path:"./config.env"})
const PORT = process.env.PORT

app.use(cors());
app.use(morgan('tiny'));

app.use(express.json());
app.use(router);


// app.get("/",(req,res)=>{
//     console.log("Hello this is home");
//     res.send("Hello this is home");
// })

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
});
