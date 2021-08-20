import * as GameFile from './Game.js';
import PromptSync from "prompt-sync"
const prompt = PromptSync({sigint: true});


var randomHorror = new GameFile.Game();
console.log("Welcome to Random Horror");

var gameEnd = false;
while (!gameEnd) {
    console.log(`You are currently stuck in the ${randomHorror.rooms[randomHorror.currentRoomIndex].name}...`);
    console.log("What direction do you want to search?");
    const directionInput = prompt('You can choose from: right, left, forward, behind: ');

    var validInput = false;
    var pickUpInput = "";
    while (validInput == false) {
        randomHorror.rooms[randomHorror.currentRoomIndex].displayAllItemsDirection(directionInput);
        var pickUpInput = prompt("Do you want to pick up any of these items? Press y for yes and n for no.");

        if (pickUpInput == "y" || pickUpInput == "n") {
            validInput = true;
        } else {
            validInput = false;
            console.log("You need to press y for yes or n for no, try again: ");
        }
    }

    if (pickUpInput == "y") {
        while (true) {
            console.log("while loop start");
            randomHorror.rooms[randomHorror.currentRoomIndex].displayPickupItemDirection(directionInput);
            var itemChoice = prompt("Enter which item here?");
            randomHorror.playerPickUpItem(directionInput, itemChoice);
            pickUpInput = prompt("Would you like to select another item (y/n)?  ");
    
            if (pickUpInput == "n") {
                break;
            }
        }
    } else if (pickUpInput == "n" && directionInput != randomHorror.rooms[randomHorror.currentRoomIndex].interactItemObjDirection) {
        continue;
    } else if (pickUpInput == "n" && directionInput == randomHorror.rooms[randomHorror.currentRoomIndex].interactItemObjDirection &&
                randomHorror.player.inventory.length == 0) {
        continue;
    }

    if (directionInput == randomHorror.rooms[randomHorror.currentRoomIndex].interactItemObjDirection &&
        randomHorror.player.inventory.length > 0) {

        var useItemInput = prompt(`Do you want to use an item on the ${randomHorror.rooms[randomHorror.currentRoomIndex].interactItemObj.name}?  `);

        if (useItemInput == "n") {
            continue;
        }

        while (true) {
            randomHorror.player.displayInventory();
            var itemChoiceInput = prompt(`which item do you want to use on the ${randomHorror.rooms[randomHorror.currentRoomIndex].interactItemObj.name}?  `);
            var itemChoice = randomHorror.player.getInventoryItem(itemChoiceInput);

            randomHorror.rooms[randomHorror.currentRoomIndex].interactWithItem(itemChoice);
            if (randomHorror.rooms[randomHorror.currentRoomIndex].roomComplete == true) {
                if (randomHorror.currentRoomIndex == (randomHorror.rooms.length - 1)) {
                    console.log("Congrats!! You won the game!");
                    gameEnd = true;
                    break;
                } else {
                    randomHorror.currentRoomIndex++;
                    randomHorror.player.inventory = [];
                    break;
                }
            } else {
                console.log("That did nothing...");
                var tryAgainInput = prompt("Try again?");

                if (tryAgainInput == "n") {
                    break;
                }
            }
        }
    }
}

console.log("Exited the main game loop");
