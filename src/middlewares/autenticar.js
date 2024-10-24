function protegerRotausuario(req, res, next) {
    if (req.session.usuario) {
        next();
    } else {
        res.redirect('/login');
    }
}

function protegerRotaAdmin(req, res, next) {
    if (req.session.admin) {
        next();
    } else {
        res.redirect('/criar-eventos');
    }
}

module.exports = {
    protegerRotausuario,
    protegerRotaAdmin
}