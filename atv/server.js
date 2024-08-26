const express = require('express');
const axio = require('axios');
const { default: axios } = require('axios');
const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', rotas)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`))

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/novarota', (req, res) => {
    res.send('Nova rota criada');
});

app.get('/consulta-cep/:cep', async (req, res) => {
    const cep = req.params.cep;

    if(!cepRegex.test(cep)){
        res.send('N pd colocar esse cep ai n paizao')
    } else {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            res.json(response.data);
        }catch(error){
            console.error('Erro ao fazer requisição',error);
            res.status(500).send('Erro ao consultar o CEP')
        }
    }
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
