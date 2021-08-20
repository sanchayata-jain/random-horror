class InteractItem {

    constructor() {
        this.name = "";
    }

    displayName() {
        console.log(this.name);
    }

    interact(item) {
        throw new Error(["An abstract method has been invoked"]);
    }

}

class Door extends InteractItem {
    constructor() {
        super();
        this.name = "door";
    }

    interact(item) {
        if(item.name == "key") {
            console.log("Well Done on opening the door...")
            return true;

        }
        console.log("You can't use this ${item.name}, choose better!");
        return false;  
    }

}

class BedsheetGhost extends InteractItem {
    constructor() {
        super();
        this.name = "bedsheet ghost";
    }

    interact(item) {
        if(item.name == "slingshot") {
            console.log("Well Done, you have fought the bedsheet ghost...");
            return true;
        } 
        console.log("You can't use this ${item.name}, choose better!");
        return false;  
    }
}

class Stairs extends InteractItem {
    constructor() {
        super();
        this.name = "stairs";
    }

    interact(item) {
        if(item.name == "surfboard") {
            console.log("Have fun surfing down the stairs...");
            return true;
        }
            console.log("You can't use this ${item.name}, choose better!");
            return false;
    }

}

class Television extends InteractItem {
    constructor() {
        super();
        this.name = television;
    }

    interact(item) {
        if(item.name == "remote") {
            console.log("The TV is now turned on...");
            return true;
        }
            console.log("You can't use this ${item.name}, choose better!");
            return false;
    }
}

class DogBowl extends InteractItem {
    constructor() {
        super();
        this.name = "dog bowl";
    }

    interact(item) {
        if(item.name == "steak") {
            console.log("Well Done, you can now feed the dog...");
            return true;
        }
            console.log("You can't use this ${item.name}, choose better!");
            return false;
    }
}

module.exports = {InteractItem, Door};