// const db = require('../config/db');

// async function adicionarMenu(nome, preco) {
     
//     // Adicionando o novo menu
//     await db.query(`
//         INSERT INTO menu (nome, preco, criadoEm) 
//         VALUES ('${nome}', '${preco}', now())
//     `)
//     .then(() => {
//         console.log('Menu criado com sucesso!')
//     })
//     .catch((erro) => {
//         console.error('Erro ao inserir dados, ', erro)
//     })
// }

// async function listarMenu() {

//     const menu = await db.query(`
//         SELECT * FROM menu
//     `)

//     return menu
// }

// module.exports = {
//     adicionarMenu,
//     listarMenu
// }
