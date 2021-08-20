const { getDatabase } = require("../config");

const collection = "Itineraries";
class Itinerary {
    static find(query) {
        return getDatabase().collection(collection).find(query).toArray();
    }
    static findOne(query) {
        return getDatabase().collection(collection).findOne(query);
    }
    static insertOne(data) {
        return getDatabase().collection(collection).insertOne(data);
    }
    static updateOne(query, newValue) {
        return getDatabase().collection(collection).updateOne(query, newValue);
    }
    static deleteOne(query) {
        return getDatabase().collection(collection).deleteOne(query);
    }
    static insertMany(query) {
        return getDatabase().collection(collection).insertMany(query);
    }
    static deleteMany() {
        return getDatabase().collection(collection).deleteMany({});
    }
}

module.exports = Itinerary;
