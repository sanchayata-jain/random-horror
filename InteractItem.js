export class InteractItem {

    constructor() {
        this.name = "";
    }

    displayName() {
        console.log(this.name);
    }

    displayMessage() {
        throw new Error(["An abstract method has been invoked"]);
    }

    interact(item) {
        throw new Error(["An abstract method has been invoked"]);
    }

}

export class Door extends InteractItem {
    constructor() {
        super();
        this.name = "door";
    }

    displayMessage() {
        console.log(`           _________________
                    |                 |      
                    |                 |
                    |                 |
                    |                 |
                    |               o |
                    |                 |
                    |                 |
                    |                 |
                    |_________________| 
                     
                    `);
    
    console.log("\nI think this is a door, maybe it's the way out of here?.... but I can't see it's handle...");
    }

    interact(item) {
        if(item.name == "flashlight") {
            console.log("\n Using the flashlight, you have managed to find the door handle!");
            console.log("Luckily the door is unlocked...\n");
            return true;

        }
        console.log();
        console.log(`\nYou can't use this ${item.name}, choose better!\n`);
        return false;  
    }
}

export class BedsheetGhost extends InteractItem {
    constructor() {
        super();
        this.name = "bedsheet ghost";
    }

    displayMessage() {
        console.log(`%c 
        .-.
        .'   '.
        : g g   :
        :  o    '.
        :         '''
        :             '.
        :  :         .   ''.
        :   :          ' . '.
        '.. :            '. '';
         ':;             ':'
            :              '.
            ''.              '.     .
               '''''''---..,___';.-'
        
          `);
        console.log("\nWhy is there a bedsheet floating... Oh wait... it's a GHOST!");
        console.log("It looks like to exit this room you need to find a weapon and fight the ghost...\n");
    }

    interact(item) {
        if(item.name == "slingshot") {
            console.log();
            console.log("Well Done, you have fought the bedsheet ghost...");
            return true;
        } 
        console.log(`You can't use this ${item.name}, choose better!`);
        return false;  
    }
}

export class Stairs extends InteractItem {
    constructor() {
        super();
        this.name = "stairs";
    }

    displayMessage() {
        console.log(`   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa,
                        8                           8"b,    "Ya
                        8                           8  "b,    "Ya
                        8                    aaaaaaa8,   "b,    "Ya
                        8                    8"b,    "Ya   "8""""""8
                        8                    8  "b,    "Ya  8      8
                        8                     ,   "b,    "Ya8        8
                        8             8"b,    "Ya   "8"""""""         8
                        8             8  "b,    "Ya  8              8
                        8             8,   "b,    "Ya8             8
                        8      8"b,    "Ya                           8
                        8      8  "b,    "Ya  8                      8
                        8aaaaaa8,   "b,    "Ya8                      8
                        8"b,    "Ya   "8                           8
                        8  "b,    "Ya  8                           8
                        8,   "b,    "Ya8                           8
                        "Ya   "8"""""""                           8
                        "Ya  8                                  8
                            "Ya8                                  8
                            """""""""""""""""""""""""""""""""""""`);

        console.log("\nHere are the stairs! This could be your way out... but the stairs are crooked, one step and they could collapse!");
    }

    interact(item) {
        if(item.name == "surfboard") {
            console.log("Have fun surfing down the stairs...");
            return true;
        }
            console.log(`You can't use this ${item.name}, choose better!`);
            return false;
    }
}

export class TV extends InteractItem {
    constructor() {
        super();
        this.name = "television";
    }

    displayMessage() {
        console.log("\nA television... ");
    }

    interact(item) {
        if(item.name == "remote") {
            console.log("The TV is now turned on...");
            return true;
        }
            console.log(`You can't use this ${item.name}, choose better!`);
            return false;
    }
}

export class DogBowl extends InteractItem {
    constructor() {
        super();
        this.name = "dog bowl";
    }

    displayMessage() {
        console.log("\nHmm a Dog Bowl, I don't see any dogs here though... \n");
    }

    interact(item) {
        if(item.name == "steak") {
            console.log("Well Done, you can now feed the dog...");
            return true;
        }
            console.log(`You can't use this ${item.name}, choose better!`);
            return false;
    }
}

