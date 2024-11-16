const multer = require('multer');
const path = require('path');


// Configuração de armazenamento do Multer
const perfilStorage = multer.diskStorage({

  // Definindo o caminho para salvar os arquivos
  destination: (request, file, callback) => {
    // Setando o caminho onde os arquivos serão salvos
    callback(null, `src/public/uploads/user/`);
  },

  // Definindo o nome do arquivo
  filename: (request, file, callback) => {

    // Definindo um nome unico para o arquivo
    const idUnico = Date.now();

    // Definindo o nome do usuário
    const nomeDoUser = request.session.user.nome;

    // Setando o nome do arquivo
    callback(null, `${nomeDoUser}_${idUnico}_PERFIL${path.extname(file.originalname)}`);
  }

});

const bannerStorage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, `src/public/uploads/banner/`);
  },
  filename: (request, file, callback) => {
    const idUnico = Date.now();
    const { nome } = request.body

    callback(null, `${nome}_${idUnico}_BANNER${path.extname(file.originalname)}`);
  }

});

const pratoStorage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, `src/public/uploads/pratos/`);
  },
  filename: (request, file, callback) => {
    const idUnico = Date.now();
    const { nome } = request.body

    callback(null, `${nome}_${idUnico}_PRATO${path.extname(file.originalname)}`);
  }
});


// Filtrando a extensão do arquivo
const filtrarExtensao = (request, file, callback) => {

  // Verificando a extensão do arquivo
  if (file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/gif') {

    // Aceitando a extensão do arquivo
    callback(null, true);

  } else {

    // Negando a extensão do arquivo
    callback(null, false);
  }
};


// Configurando o upload de arquivos
const uploadPerfil = multer({

  // Definindo o armazenamento
  storage: perfilStorage,

  // Definindo o limite de tamanho do arquivo
  limits: { fileSize: 1024 * 1024 * 10 },

  // Filtrando a extensão do arquivo
  fileFilter: filtrarExtensao
});

const uploadBanner = multer({

  storage: bannerStorage,

  limits: { fileSize: 1024 * 1024 * 10 },

  fileFilter: filtrarExtensao
});

const uploadPrato = multer({

  storage: pratoStorage,

  limits: { fileSize: 1024 * 1024 * 10 },

  fileFilter: filtrarExtensao
});


module.exports = {
  uploadPerfil,
  uploadBanner,
  uploadPrato
}