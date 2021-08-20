import PickupItem from '.PickupItem';
//player needs to be able to pick up items

export default class Player {
    //constructor to give player a name, the ability to create an inventory and the ability to assign a current room
    constructor(name = '', inventory = new Inventory(), currentRoom = '', startRoom) {
        //allows player to be given name and assigns the name as the player
        this.name = name;
            if (this.name === '') {
                this.name = 'player';
            }
        //creates a new inventory for the player
        this.inventory = [];
    }

    pickupItem(item) {
        this.inventory.push(item);
    }

    displayInventory() {
        //iterate through inventory list
        for (var item of this.inventory) {
            item.displayName();
        }
    }
}

player1 = new Player();
player1.pickupItem(new PickupItem("knife"));
player1.displayInventory();