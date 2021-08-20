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
        const frontItemsAttic = [new PickupItemFile.PickupItem("flashlight"), new PickupItemFile.PickupItem("hoover")];
        const backItemsAttic = [new PickupItemFile.PickupItem("rabbit")];
        const rightItemsAttic = [new PickupItemFile.PickupItem("photoframe")];
        const leftItemsAttic = [new PickupItemFile.PickupItem("suitcase"), new PickupItemFile.PickupItem("taco")];  //list of objects
        const interactItemAttic = new InteractItemFile.Door();
        const interactItemDirectionAttic = "forward";

        const attic = new RoomFile.Room("attic", frontItemsAttic, backItemsAttic, rightItemsAttic,
                                        leftItemsAttic, interactItemAttic, interactItemDirectionAttic);
        
        const frontItemsBedroom = [new PickupItemFile.PickupItem("Clock"), new PickupItemFile.PickupItem("Pizza box")];
        const backItemsBedroom = [new PickupItemFile.PickupItem("Dead flowers"), new PickupItemFile.PickupItem("slingshot")];
        const rightItemsBedroom = [new PickupItemFile.PickupItem("Cracked Mirror")];
        const leftItemsBedroom = [new PickupItemFile.PickupItem("A Boppit"), new PickupItemFile.PickupItem("Hacksaw")];
        const interactItemBedroom = new InteractItemFile.BedsheetGhost();
        const interactItemDirectionBedroom = "right";

        const bedroom = new RoomFile.Room("bedroom", frontItemsBedroom, backItemsBedroom, rightItemsBedroom, 
                                            leftItemsBedroom, interactItemBedroom, interactItemDirectionBedroom);
        
        
        const frontItemsHallway = [new PickupItemFile.PickupItem("magnifying glass"), new PickupItemFile.PickupItem("surfboard")];
        const backItemsHallway = [new PickupItemFile.PickupItem("Mattress"), new PickupItemFile.PickupItem("Towel")];
        const rightItemsHallway = [new PickupItemFile.PickupItem("Cockroach")];
        const leftItemsHallway= [new PickupItemFile.PickupItem("Chewing Gum"), new PickupItemFile.PickupItem("Hammer")];
        const interactItemHallway = new InteractItemFile.Stairs();
        const interactItemDirectionHallway = "forward";
        
        const hallway = new RoomFile.Room("hallway", frontItemsHallway, backItemsHallway, rightItemsHallway,
                                         leftItemsHallway, interactItemHallway, interactItemDirectionHallway);
        
        
        const frontItemsLivingroom = [new PickupItemFile.PickupItem("Skull"), new PickupItemFile.PickupItem("remote")];
        const backItemsLivingroom = [new PickupItemFile.PickupItem("Glass"), new PickupItemFile.PickupItem("Heater")];
        const rightItemsLivingroom = [new PickupItemFile.PickupItem("Rat")];
        const leftItemsLivingroom = [new PickupItemFile.PickupItem("Screwdriver"), new PickupItemFile.PickupItem("Jack-in-the-box")];
        const interactItemLivingroom = new InteractItemFile.TV();
        const interactItemDirectionLivingroom = "behind";
                                         
        const livingroom = new RoomFile.Room ("livingroom", frontItemsLivingroom, backItemsLivingroom, rightItemsLivingroom, 
                                            leftItemsLivingroom, interactItemLivingroom, interactItemDirectionLivingroom);

        const frontItemsKitchen = [new PickupItemFile.PickupItem("Cauldron"), new PickupItemFile.PickupItem("steak")];
        const backItemsKitchen = [new PickupItemFile.PickupItem("Knife"), new PickupItemFile.PickupItem("Rat Poison")];
        const rightItemsKitchen = [new PickupItemFile.PickupItem("Incense")];
        const leftItemsKitchen = [new PickupItemFile.PickupItem("Drill"), new PickupItemFile.PickupItem("Crisps")];
        const interactItemKitchen = new InteractItemFile.DogBowl();
        const interactItemDirectionKitchen = "behind";
        
        const kitchen = new RoomFile.Room ("kitchen", frontItemsKitchen, backItemsKitchen, rightItemsKitchen, 
                                          leftItemsKitchen, interactItemKitchen, interactItemDirectionKitchen);

        
        this.rooms = [attic, bedroom, hallway, livingroom, kitchen];
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


