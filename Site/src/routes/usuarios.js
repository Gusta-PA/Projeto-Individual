var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post('/novaMeta', function (req, res) {
    usuarioController.definirNovaMeta(req, res)
})

router.post("/atualizarTotalGuardado", function (req, res) {
    usuarioController.atualizarTotalGuardado(req, res)
})

router.post('/armazenarPerfilInvestidor', function (req, res) {
    usuarioController.inserirPerfilInvestidor(req, res)
})

router.get('/perfis', function (req,res) {
    usuarioController.buscarPerfis(req,res)
})

module.exports = router;