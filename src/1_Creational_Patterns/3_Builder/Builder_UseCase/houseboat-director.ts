// A Director Class
import House from './house'
import HouseBuilder from './houser-builder'

export default class HouseBoatDirector {
    static construct(): House {
        return new HouseBuilder()
            .setBuildingType('House Boat')
            .setWallMaterial('Wood')
            .setNumberDoors(6)
            .setNumberWindows(8)
            .getResult()
    }
}