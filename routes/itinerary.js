const Controller = require("../controllers/controllerItinerary");
const router = require("express").Router();

router.get("/", Controller.allItineraries);

// get one where user login
// router.get("/", Controller.getOne);

router.post("/", Controller.postItinerary);
router.put("/:id", Controller.putItinerary);
router.delete("/:id", Controller.deleteItinerary);

module.exports = router;
