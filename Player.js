export class Player {
    constructor() {
        this.inventory = [];
        this.name = "";
        this.lives = 3;
    }

    reset() {
        this.lives = 3;
        this.inventory = [];
    }

    pickupItem(item) {
        //player needs to be able to pick up items
        this.inventory.push(item);
    }

    displayInventory() {
        //iterate through inventory array
        console.log("Here are the items in your inventory:\n");
        for (var item of this.inventory) {
            item.displayName();
        }
        console.log();
    }

    getInventoryItem(itemName) {
        for (var item of this.inventory) {
            if (itemName == item.name) {
                const item1 = item;
                return item1;
            } 
        }
        return false;
    }

    isItemInInventory(itemName) {
        if (this.getInventoryItem(itemName) != false) {
            return true;
        } else {
            return false;
        }
    }
}

