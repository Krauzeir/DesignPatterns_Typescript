"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const houser_builder_1 = require("./houser-builder");
class HouseBoatDirector {
    static construct() {
        return new houser_builder_1.default()
            .setBuildingType('House Boat')
            .setWallMaterial('Wood')
            .setNumberDoors(6)
            .setNumberWindows(8)
            .getResult();
    }
}
exports.default = HouseBoatDirector;
