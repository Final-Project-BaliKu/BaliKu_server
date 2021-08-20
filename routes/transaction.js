
const router = require('express').Router()
const Controller = require('../controllers/controllerTransaction');
const {authentication} = require('../middlewares/auth')

router.use(authentication);
router.get("/", Controller.allTransaction);
router.post("/", Controller.postTransaction);
router.delete("/:id", Controller.deleteTransaction);

module.exports = router;