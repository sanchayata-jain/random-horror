class Room {
    constructor(name, frontItems, backItems, rightItems, leftItems){
        this.name = name;
        this.frontRoomItems = frontItems;
        this.backRoomItems = backItems;
        this.leftRoomItems = rightItems;
        this.rightRoomItems = leftItems;
        this.interactionItem;
        this.interactionItemPosition;
        this.roomComplete = false; 
    }

    displayAllItemsDirection(direction) {
        // displays all the items in whichever direction user inputs
        
    }

    displayPickupItemDirection(direction) {
        // displays all the pickup items in whichever direction user input

    }

    interactWithItem(item) {
        this.roomComplete = interactionItem.interact(item);
    }

}

var frontItemsAttic = [new PickupItem("knife"), new PickupItem("remote")];
var backItemsAttic = [];
var rightItemsAttic = [];
var leftItemsAttic = [new PickupItem("fan"), new PickupItem("taco")];  //list of objects

var frontItemsBedroom = [];

attic = new Room("attic", frontItemsAttic, backItemsAttic, rightItemsAttic, leftItemsAttic);




