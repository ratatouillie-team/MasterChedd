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

    return eventos
}

async function editarEventos(idevento, nome, data, horario, banner) {
    const eventos = await prisma.evento.update({
        where: {
            id: parseInt(idevento)
        },
        data: {
            nome: nome,
            data: new Date(data).toISOString(),
            horario: horario,
            banner: banner,
            criadoEm: new Date()
        }
    })
    return eventos
}

async function deletarEventos(idevento) {
    const eventos = await prisma.evento.delete({
        where: {
            id: parseInt(idevento)
        }
    })
    return eventos
}

module.exports = {
    criarEventos,
    listarEventos,
    editarEventos,
    deletarEventos
}