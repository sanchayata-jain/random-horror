import * as RoomFile from './Room.js';
import * as InteractItemFile from './InteractItem.js';
import * as PickupItemFile from './PickupItem.js';
import * as PlayerFile from './Player.js';

import PromptSync from "prompt-sync"
const prompt = PromptSync({sigint: true});


export class Game { 

    constructor() {
        const frontItemsAttic = [new PickupItemFile.PickupItem("flashlight"), new PickupItemFile.PickupItem("hoover")];
        const backItemsAttic = [new PickupItemFile.PickupItem("rabbit")];
        const rightItemsAttic = [new PickupItemFile.PickupItem("photoframe"), new PickupItemFile.PickupItem("broomstick")];
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

    sleep(sleepTime) {
        const start = new Date().getTime();
        const maxSleepTime = 10000;
        while (true) {
            if ((new Date().getTime() - start) > maxSleepTime) {
                throw [sleepTime, maxSleepTime];
            }
            if ((new Date().getTime() - start) > sleepTime) {
                break;
            }
        }
    }

    displayGameWelcomeMessage() {
        try {
        console.log("\nWelcome to Random Horror\n");
        this.sleep(5000);
        console.log("You've just woken up, there is a vague smell of tacos in the air....\nThis house reminds you of a house from your childhood...");
        this.sleep(5000);
        console.log("You find a letter...");
        this.sleep(1500);
        console.log("It reads...\n THEY'RE COMING! GET OUT!");
        this.sleep(500);
        //Put cool transition here!
        } catch (err) {
            console.log(`Pause time of ${err[0]} ms exceeded maximum amount of ${err[1]} ms`);
        }
    }

    displayRoomWelcomeMessage() {
        this.sleep (2000);
        console.log(`You are currently stuck in the ${this.rooms[this.currentRoomIndex].name}...\n`);
        this.sleep (600);
        console.log("You need to get out of this house!\nThere must be a way out....");
        this.sleep(2000);
    }

    chooseDirection() {
        var directionInput = "";
        while (directionInput != "forward" && directionInput != "behind" && directionInput != "right" && directionInput != "left") {
            console.log("\nChoose a direction where you want to go and search for items?");
            this.sleep(1500);
            directionInput = prompt('You can choose from: right, left, forward, behind:  ');
            this.sleep(1000);

            if (directionInput != "forward" && directionInput != "behind" && directionInput != "right" && directionInput != "left") {
                console.log("Did I stutter? Try again with a CORRECT direction...");
            }

        }
        return directionInput;
    }

    areTherePickUpItemsAvailable(direction) {
        const pickUpItemsNum = this.rooms[this.currentRoomIndex].getNumberOfPickupItems(direction);
        if (pickUpItemsNum == 0) {
            console.log("There are no items here to pick up!");
            this.sleep(500);
            return false;
        }
        return true;
    }

    getTryAgainInput() {
        var tryAgainInput = "";
        while (tryAgainInput != "y" && tryAgainInput != "n") {
            console.log();
            tryAgainInput = prompt("Do you want to try again? (y/n):   ");
            this.sleep(500);
    
            if (tryAgainInput != "y" && tryAgainInput != "n") {
                console.log("You need to press y for yes or n for no, try again");
                this.sleep(500);
            }
        }

        return tryAgainInput;
    }

    getPlayerPickUpInput(direction) {
        var pickUpInput = "";
        while (pickUpInput != "y" && pickUpInput != "n") {
            this.rooms[this.currentRoomIndex].displayAllItemsDirection(direction);
            console.log();
            pickUpInput = prompt("Do you want to pick up any of these items? (y/n):   ");
            this.sleep(500);
    
            if (pickUpInput != "y" && pickUpInput != "n") {
                console.log("You need to press y for yes or n for no, try again");
                this.sleep(500);
            }
        }

        return pickUpInput;
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

    getPlayerItemToInteractChoice() {
        var itemInInventory = false;
        var itemChoiceInput = "";
        while (itemInInventory == false) {
            itemChoiceInput = prompt(`Which item do you want to use on the ${this.rooms[this.currentRoomIndex].interactItemObj.name}?  `);
            this.sleep(500);
            itemInInventory = this.player.isItemInInventory(itemChoiceInput);

            if(itemInInventory == false) {
                console.log("This item is not in the inventory. Please try again");
                this.sleep(800);
            }
        }

        return itemChoiceInput;
    }
   
}


