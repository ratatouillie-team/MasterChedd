const perfilModels = require('../models/perfilModels');
const fs = require('fs');
const path = require('path');
const md5 = require('md5');

function exibirPaginaPerfil(req, res) {
    const user = req.session.user
    console.log(user)
    res.render('perfil', { user });
}

function deletarArquivo(icone) {
    const uploadDir = path.join(__dirname, '..', 'public', 'uploads', 'user');

    // Verificar se já existe um arquivo de perfil do usuário
    const arquivos = fs.readdirSync(uploadDir);
    const arquivoAntigo = arquivos.find(file => file === icone);

    // Se houver um arquivo antigo, exclua-o
    if (arquivoAntigo) {
        const caminhoArquivoAntigo = path.join(uploadDir, arquivoAntigo);
        fs.unlinkSync(caminhoArquivoAntigo);
    }

};

async function enviarArquivo(req, res) {
    const { nome } = req.body

    const id = req.session.user.id

    deletarArquivo(req.session.user.icone)

    const userUpdate = await perfilModels.atualizarPerfil(id, {
        nome: nome,
        icone: req.file.filename
    });

    req.session.user.icone = userUpdate.icone
    res.redirect('/perfil')
    return userUpdate
}

async function atualizarPerfil(req, res) {
    const { nome, email, senha } = req.body
    console.log('Senha:', senha)
    const id = req.session.user.id
    const senhaAtual = req.session.user.senha

    if (senhaAtual !== md5(senha)) {
        res.send("Senha incorreta, tente novamente...")
        return
    } else {
        const userUpdate = await perfilModels.atualizarPerfil(id, {
            nome: nome,
            email: email,
            senha: md5(senha)
        }, senhaAtual);

        req.session.user.nome = userUpdate.nome
        req.session.user.email = userUpdate.email
        res.redirect('/perfil')
        return userUpdate
    }


}





module.exports = {
    exibirPaginaPerfil,
    enviarArquivo,
    atualizarPerfil
}
