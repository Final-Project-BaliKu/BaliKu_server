const { ObjectId } = require("mongodb");
const Itinerary = require("../models/itinerary");

class Controller {
    static allItineraries(req, res) {
        const id = {
            UserId: req.user.id,
        };

        Itinerary.find(id)
            .then((data) => {
                if (data.length > 0) {
                    res.status(200).json(data);
                } else {
                    res.status(404).json({ message: "Itinerary not found" });
                }
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }

    // static getOne(req, res) {
    //     const id = {
    //         _id: ObjectId(req.params.id),
    //     };

    //     Itinerary.findOne(id)
    //         .then((data) => {
    //             if (data) {
    //                 res.status(200).json(data);
    //             } else {
    //                 res.status(404).json({ message: "Itinerary not found" });
    //             }
    //         })
    //         .catch((err) => {
    //             res.status(500).json(err);
    //         });
    // }

    static postItinerary(req, res) {
        const { id: UserId } = req.user;
        const { checkIn, checkOut, places, price } = req.body;

        const newItinerary = {
            UserId,
            checkIn,
            checkOut,
            places,
            price: +price,
        };

        Itinerary.insertOne(newItinerary)
            .then((data) => {
                // console.log(data);
                res.status(201).json({ data: newItinerary });
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }

    static putItinerary(req, res) {
        const id = {
            _id: ObjectId(req.params.id),
        };
        const { id: UserId } = req.user;
        const { checkIn, checkOut, places, price } = req.body;

        const updated = {
            UserId,
            checkIn,
            checkOut,
            places,
            price: +price,
        };

        Itinerary.updateOne(id, updated)
            .then((data) => {
                if (data.modifiedCount) {
                    res.status(200).json({ message: "Itinerary has been updated" });
                } else {
                    res.status(404).json({ message: "Itinerary not found" });
                }
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }

    static deleteItinerary(req, res) {
        const id = {
            _id: ObjectId(req.params.id),
        };
        console.log(id);

        Itinerary.deleteOne(id)
            .then((data) => {
                if (data.deletedCount) {
                    res.status(200).json({ message: `Itinerary with id ${id} has been deleted` });
                } else {
                    res.status(404).json({ message: "Itinerary not found" });
                }
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }
}

module.exports = Controller;
