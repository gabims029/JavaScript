//IMPORTA O MÓDULO ROUTER DO EXPRESS 
//ROUTER SERÁ UTILIZADO PARA DEFINIR ROTAS ESPECÍFICAS 
const router = require('express').Router

//Importa a controller onde contém a lógica relacionada a professores
const teacherControllers = require('../controllers/teacherControllers')

//Rota POST para '/teacher'
router.post('/teacher/', teacherControllers.postTeacher) 
router.get('/teacher/', teacherControllers.getTeacher)
router.post('/numbers/', controllerNumbers.checkPar) 