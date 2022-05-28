const express = require('express')
const cors = require('cors')
const app = express()

const options = {
    origin : 'http://localhost:3001'
}

app.use(cors(options))

app.get('/', express.json(), (req, res)=>{
    res.json({
        status : 'Sucess',
        numberStatus : 200,
        title : 'Requisição Finalizada',
        message : 'Requisição com Axios feita com sucesso'
    })
})

app.listen(3000, ()=>{ console.log('Server Running') })