function protegerRotaUsuario(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

function protegerRotaAdmin(req, res, next) {
    if (req.session.user && req.session.user.cargo === 'admin') {
        next();
    } else {
        res.redirect('/');
    }
}

module.exports = {
    protegerRotaUsuario,
    protegerRotaAdmin
    
}