"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const houser_builder_1 = require("./houser-builder");
class CastleDirector {
    static construct() {
        return new houser_builder_1.default()
            .setBuildingType('Castle')
            .setWallMaterial('Sandstone')
            .setNumberDoors(100)
            .setNumberWindows(200)
            .getResult();
    }
}
exports.default = CastleDirector;
