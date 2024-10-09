const db = require('../database/db');

async function adicionarEventos(nome, data, local) {

    // Adicionando o novo evento    
    await db.query(`
        INSERT INTO evento (nome, data, local, criadoEm) 
        VALUES ('${nome}', '${data}', '${local}', now())
    `)
    .then(() => {
        console.log('Evento criado com sucesso!')
    })
    .catch((erro) => {
        console.error('Erro ao inserir dados, ', erro)
    })
}

async function listarEventos() {

    const eventos = await db.query(`
        SELECT * FROM evento
    `)

    return eventos
}