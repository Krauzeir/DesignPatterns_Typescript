"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const houser_builder_1 = require("./houser-builder");
class IglooDirector {
    static construct() {
        return new houser_builder_1.default()
            .setBuildingType('Igloo')
            .setWallMaterial('Ice')
            .setNumberDoors(1)
            .getResult();
    }
}
exports.default = IglooDirector;
