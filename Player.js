export class Player {
    constructor() {
        this.inventory = [];
    }

    pickupItem(item) {
        this.inventory.push(item);
    }

    displayInventory() {
        //iterate through inventory array
        for (var item of this.inventory) {
            item.displayName();
        }
    }

    getInventoryItem(itemName) {
        for (var item of this.inventory) {
            if (itemName == item.name) {
                const item1 = item;
                return item1;
            } 
        }
    }
}

