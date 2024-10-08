const Endereco = require('../models/Endereco')

exports.createEndereco = async (req, res)=>{
    try{
        const {Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, MunicipioIBGE} = req.body;
        const novoEndereco = await Endereco.create({
            Cep,
            Logradouro,
            Numero,
            Complemento,
            Bairro,
            Cidade,
            Estado,
            MunicipioIBGE
        });
        res.status(201).json(novoEndereco)
    }catch(error){
        res.status(500).json({error: 'Erro ao criar endereco', details: error.message});
    }
}

exports.getAllEnderecos = async (req, res)=>{
    try{
        const enderecos = await Endereco.findAll();
        res.status(200).json(enderecos);
    }catch(error){
        res.status(500).json({error: 'Erro ao buscar enderecos', details: error.message});
    }
}

exports.getEnderecoById = async(req, res)=>{
    try{
        const {Id} = req.params;
        const endereco = await Endereco.findByPk(Id);
        if(!endereco){
            return res.status(400).json({error:'Endereco não encontrado'})
        }
        res.status(200).json(endereco);
    }catch(error){
        res.status(500).json({error: 'Errp ao buscar endereco', details:error.message})
    }
}

exports.updateEndereco = async (req, res) => {
    try {
        const { Id } = req.params;
        const { Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, MunicipioIBGE } = req.body;
        const endereco = await Endereco.findByPk(Id);

        if (!endereco) {
            return res.status(404).json({ error: 'Endereço não encontrado' });
        }

        endereco.Cep = Cep;
        endereco.Logradouro = Logradouro;
        endereco.Numero = Numero;
        endereco.Complemento = Complemento;
        endereco.Bairro = Bairro;
        endereco.Cidade = Cidade;
        endereco.Estado = Estado;
        endereco.MunicipioIBGE = MunicipioIBGE;

        await endereco.save();

        res.status(200).json(endereco);
        } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar endereço', details: error.message });
        }
};

exports.deleteEndereco = async (req, res) => {
    try {
        const { Id } = req.params;
    
        const endereco = await Endereco.findByPk(Id);
    
        if (!endereco) {
        return res.status(404).json({ error: 'Endereço não encontrado' });
        }
    
        await endereco.destroy();
    
        res.status(204).send(); // Sem conteúdo, pois foi deletado com sucesso
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar endereço', details: error.message });
    }
};

app.get('/salvar-cep/:cep', async (req, res) => {
    const cep = req.params.cep;

    if(!cepRegex.test(cep)){
        res.send('Erro ao colocar o cep')
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