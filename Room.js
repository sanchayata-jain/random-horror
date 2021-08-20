export class Room {
    constructor(name, frontItems, backItems, rightItems, leftItems, interactItemObj, direction){
        this.name = name;
        this.frontRoomItems = frontItems;
        this.backRoomItems = backItems;
        this.rightRoomItems = rightItems;
        this.leftRoomItems = leftItems;
        this.interactItemObj = interactItemObj;
        this.interactItemObjDirection = direction;
        this.roomComplete = false; 
    }

    displayAllItemsDirection(direction) {
        // displays all the items in whichever direction user inputs
        this.displayPickupItemDirection(direction);
        if (this.interactItemObjDirection == direction) {
            this.interactItemObj.displayName();
        }
    }

    getDirectionPickupItems(direction) {
        // returns array of PickupItems for direction entered by user
        if (direction == "forward") {
            return this.frontRoomItems;
        }
        if (direction == "behind") {
            return this.backRoomItems;
        }
        if (direction == "right") {
            return this.rightRoomItems;
        }
        if (direction == "left") {
            return this.leftRoomItems;
        }
        
    } 

    displayPickupItemDirection(direction) {
        // displays all the pickup items in whichever direction user input
        const items = this.getDirectionPickupItems(direction);
        for (let item of items) {
            item.displayName();
        }
    }

    removePickupItem(item, direction) {
        if (direction == "forward") {
            const index = this.frontRoomItems.findIndex(x => x.name === item.name);
            console.log(index);
            this.frontRoomItems.splice(index, 1);
        } else if (direction == "behind") {
            const index = this.backRoomItems.findIndex(x => x.name === item.name);
            this.backRoomItems.splice(index, 1);
        } else if (direction == "right") {
            const index = this.rightRoomItems.findIndex(x => x.name === item.name);
            this.rightRoomItems.splice(index, 1);
        } else if (direction == "left") {
            const index = this.leftRoomItems.findIndex(x => x.name === item.name);
            this.leftRoomItems.splice(index, 1);
        }
    }

    interactWithItem(item) {
        this.roomComplete = this.interactItemObj.interact(item); //going to pass InteractItem object as item
    }
}

