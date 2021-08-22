import * as GameFile from './Game.js';
import PromptSync from "prompt-sync"
const prompt = PromptSync({sigint: true});


var randomHorror = new GameFile.Game();
randomHorror.displayGameWelcomeMessage();
randomHorror.displayRoomWelcomeMessage();
var gameEnd = false;

while (!gameEnd) {
    const directionInput = randomHorror.chooseDirection();
    var itemsAvailable = randomHorror.areTherePickUpItemsAvailable(directionInput);

    if (itemsAvailable == false) {
        continue;
    }

    var pickUpInput = randomHorror.getPlayerPickUpInput(directionInput);

    if (pickUpInput == "y") {
        var itemHasBeenPickedUp = false;
        while (pickUpInput == "y") {
            if (itemHasBeenPickedUp) {
                // re-show possible items left after an item has been picked up from a certain area of the room
                randomHorror.rooms[randomHorror.currentRoomIndex].displayPickupItemDirection(directionInput);
                var pickUpItemsAvailable = randomHorror.areTherePickUpItemsAvailable(directionInput);
                if (pickUpItemsAvailable == false) {
                    break;
                }
            }

            console.log();
            var itemChoice = prompt("Enter the name of the item you would like to select here:  ");
            console.log();
            randomHorror.sleep(500);

            randomHorror.playerPickUpItem(directionInput, itemChoice);
            pickUpInput = prompt("Would you like to select another item (y/n)?  ");
            randomHorror.sleep(500);

            itemHasBeenPickedUp = true;
        }

    } 

    if (directionInput == randomHorror.rooms[randomHorror.currentRoomIndex].interactItemObjDirection &&
        randomHorror.player.inventory.length > 0) {

        console.log();
        var useItemInput = prompt(`Do you want to use an item on the ${randomHorror.rooms[randomHorror.currentRoomIndex].interactItemObj.name}? (y/n)  `);
        console.log();

        randomHorror.sleep(500);
        if (useItemInput == "n") {
            continue;
        }

        var usingItems = true;
        while (usingItems) {
            randomHorror.player.displayInventory();

            const itemChoiceInput = randomHorror.getPlayerItemToInteractChoice();
            const itemChoice = randomHorror.player.getInventoryItem(itemChoiceInput);
            randomHorror.rooms[randomHorror.currentRoomIndex].interactWithItem(itemChoice);

            if (randomHorror.rooms[randomHorror.currentRoomIndex].roomComplete == true) {
                if (randomHorror.currentRoomIndex == (randomHorror.rooms.length - 1)) {
                    //console.log("\nCongrats!! You won the game!\n");
                    randomHorror.displayGameCompletedMessage();
                    gameEnd = true;
                    usingItems = false;
                } else {
                    randomHorror.currentRoomIndex++;
                    randomHorror.player.inventory = [];
                    randomHorror.displayRoomWelcomeMessage();
                    usingItems = false;
                }
            } else {
                console.log("That did nothing...");
                randomHorror.sleep(500);
                var tryAgainInput = randomHorror.getTryAgainInput()
                if (tryAgainInput == "n") {
                    usingItems = false;
                }
            }
        }
    }
}