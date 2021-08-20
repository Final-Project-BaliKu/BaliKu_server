const Controller = require('../controllers/controllerUser');
const router = require('express').Router()
const {authentication} = require('../middlewares/auth')

router.get("/", Controller.allTransaction);
router.post("/", Controller.postTransaction);
router.delete("/:id", Controller.deleteTransaction);

module.exports = router;