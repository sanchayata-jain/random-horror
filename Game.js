const RoomFile = require("./Room");
const InteractItemFile = require("./InteractItem");
const PickupItemFile = require("./PickupItem");
const PlayerFile = require("./Player");


class Game { 

    constructor() {
        const frontItemsAttic = [new PickupItemFile.PickupItem("knife"), new PickupItemFile.PickupItem("key")];
        const backItemsAttic = [new PickupItemFile.PickupItem("rabbit")];
        const rightItemsAttic = [new PickupItemFile.PickupItem("Bat")];
        const leftItemsAttic = [new PickupItemFile.PickupItem("fan"), new PickupItemFile.PickupItem("taco")];  //list of objects
        const interactItemAttic = new InteractItemFile.Door();
        const interactItemDirectionAttic = "forward";

        const attic = new RoomFile.Room("attic", frontItemsAttic, backItemsAttic, rightItemsAttic,
                         leftItemsAttic, interactItemAttic, interactItemDirectionAttic);
        this.rooms = [attic];
        this.currentRoomIndex = 0;
        this.player = new PlayerFile.Player();
    }

    playerPickUpItem(direction, itemName) {
        const currentRoom = this.rooms[this.currentRoomIndex]; //got the current room and assigned it to currentRoom
        const availableItems = currentRoom.getDirectionPickupItems(direction); 
        var itemRemoved = false;
        for (let item of availableItems) {
            if (item.name == itemName) {
                this.player.pickupItem(item);
                this.rooms[this.currentRoomIndex].removePickupItem();
                itemRemoved = true;
            }
        }
        if (itemRemoved == false) {
            console.log("Fool! This is not an item! Try again!");
        }
    }
}

module.exports = {Game};
