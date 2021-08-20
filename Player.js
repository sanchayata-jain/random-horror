class Player {
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
        for (let item of this.inventory) {
            if (itemName == item.name) {
                return item;
            } 
        }
    }
}

module.exports = {Player};