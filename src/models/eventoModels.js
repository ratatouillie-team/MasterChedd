const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function criarEventos(nome, data, horario, banner) { 
    console.log ("entrounolog") 
    const eventos = await prisma.evento.create({
        data: {
            nome: nome,
            data: new Date(data).toISOString(),
            horario: horario,
            banner: banner,
            criadoEm: new Date()
        }
    })
    console.log ("Evento add:",eventos) 
    return eventos
}

async function listarEventos() {
    const eventos = await prisma.evento.findMany()

    // console.log(eventos)

    return eventos
}

module.exports = {
    criarEventos,
    listarEventos
}