const GameFile = require("./Game");
//var prompt = require('prompt');
//var prompt = require('prompt-sync')();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

randomHorror =  new GameFile.Game();
console.log("Welcome to Random Horror");

var gameEnd = false;
while (!gameEnd) {
    console.log(`You are currently stuck in the ${randomHorror.rooms[randomHorror.currentRoomIndex].name}...`);
    console.log("What direction do you want to search?");
    console.log("You can choose from: right, left, forward, behind");

    // const directionInput = prompt('You can choose from: right, left, forward, behind');
    // console.log(directionInput);
    // process.stdin.once('data', (chunk) => {
    //     console.log(chunk.toString())
    // })

    // readline.question('Who are you?', name => {
    //     console.log(`Hey there ${name}!`);
    //     readline.close();
    // });
    // break;

    var directionInput = "forward"; //temporary! once userinput figured out, get rid!!!

    var validInput = false;
    var pickUpInput = "";
    while (validInput == false) {
        randomHorror.rooms[randomHorror.currentRoomIndex].displayAllItemsDirection(directionInput);
        console.log("Do you want to pick up any of these items?");
        //user inputs y/n and stores it in var pickUpInput

        pickUpInput = "y";   // temporary, once userinput figured out, get rid!!!

        if (pickUpInput == "y" || pickUpInput == "n") {
            validInput = true;
        } else {
            validInput = false;
            console.log("You need to press y for yes or n for no, try again");
        }
    }

    if (pickUpInput == "n") {
        continue;
    }

    while (true) {
        var itemChoice = "";
        
        randomHorror.rooms[randomHorror.currentRoomIndex].displayPickupItemDirection(directionInput);
        console.log("Which item?");
        // get user input for item and store it in itemChoice

        itemChoice = "key";   // temporary, once userinput figured out, get rid!!!


        randomHorror.playerPickUpItem(directionInput, itemChoice);
        console.log("Would you like to select another item?");
        // user input y/n stored in pickUpInput

        pickUpInput = "n";   // temporary, once userinput figured out, get rid!!!

        if (pickUpInput == "n") {
            break;
        }
    }

    // console.log("broken");

    if (directionInput == randomHorror.rooms[randomHorror.currentRoomIndex].interactItemObjDirection &&
        randomHorror.player.inventory.length > 0) {

        console.log(`Do you want to use an item on the ${randomHorror.rooms[randomHorror.currentRoomIndex].interactItemObj.name}?`);
        // user input y/n and stores it in useItemInput

        var useItemInput = "y"; //temp, delete once user input figured out

        if (useItemInput == "n") {
            continue;
        }

        while (true) {
            randomHorror.player.displayInventory();
            console.log(`which item do you want to use on the ${randomHorror.rooms[randomHorror.currentRoomIndex].interactItemObj.name}?`);
            // user input chooses which pickup item

            var itemChoiceInput = "key"; //TEMP, remove once input figured out!!!!!!!!!

            var itemChoice = randomHorror.player.getInventoryItem(itemChoiceInput);

            randomHorror.rooms[randomHorror.currentRoomIndex].interactWithItem(itemChoice);
            if (randomHorror.rooms[randomHorror.currentRoomIndex].roomComplete == true) {
                if (randomHorror.currentRoomIndex == (randomHorror.rooms.length - 1)) {
                    console.log("Congrats!! You won the game!");
                    gameEnd = true;
                    break;
                } else {
                    randomHorror.currentRoomIndex++;
                }
            } else {
                console.log("That did nothing...");
                console.log("Try again?");
                //get y/n input store in tryAgainInput

                var tryAgainInput = "n";

                if (tryAgainInput == "n") {
                    break;
                }
            }
        }
    }
}

console.log("Exited the main game loop");
