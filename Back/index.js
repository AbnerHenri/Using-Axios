const express = require('express')
const app = express()

app.get('/', express.json(), (req, res)=>{
    res.json({
        status : 'Sucess',
        title : 'Requisição Finalizada',
        message : 'Requisição com Axios feita com sucesso'
    })
})

app.listen(3000, ()=>{ console.log('Server Running') })