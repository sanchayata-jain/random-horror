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
}

module.exports = {Player};