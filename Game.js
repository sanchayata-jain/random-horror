// const RoomFile = require("./Room");
// const InteractItemFile = require("./InteractItem");
// const PickupItemFile = require("./PickupItem");
// const PlayerFile = require("./Player");

import * as RoomFile from './Room.js';
import * as InteractItemFile from './InteractItem.js';
import * as PickupItemFile from './PickupItem.js';
import * as PlayerFile from './Player.js';



export class Game { 

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
        var availableItems = currentRoom.getDirectionPickupItems(direction); 
        var itemRemoved = false;
        for (let item of availableItems) {
            if (item.name == itemName) {
                this.player.pickupItem(item);
                this.rooms[this.currentRoomIndex].removePickupItem(item, direction);
                itemRemoved = true;
            } 
        }

        if (itemRemoved == false) {
            console.log("Fool! This is not an item! Try again!");
        }
        
    }
}


