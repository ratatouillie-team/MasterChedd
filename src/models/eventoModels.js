const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function adicionarEventos(nome, data, local) { 
    console.log ("entrounolog") 
    const eventos = await prisma.evento.create({
        data: {
            nome: nome,
            data: new Date(data).toISOString(),
            local: local,
            criadoEm: new Date()
        }
    })
    // console.log (eventos) 
    return eventos
}

async function listarEventos() {
    const eventos = await prisma.evento.findMany()

    // console.log(eventos)

    return eventos
}

module.exports = {
    adicionarEventos,
    listarEventos
}