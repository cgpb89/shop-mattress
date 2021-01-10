import Mattress from "./Mattress";

export const typeOfMattresses = {
    "classic": "classic",
    "loom": "loom",
    "zen": "zen",
}

export const typeOfMattressesArray = 
[
    typeOfMattresses.classic, 
    typeOfMattresses.loom, 
    typeOfMattresses.zen];

class MattressType {
    private mattress: Mattress;
    private type: string;

    public constructor() {
        this.mattress = new Mattress();
        this.type = "type";
    }

    public get_Mattress(): Mattress {
        return this.mattress;
    }

    public set_Mattress(mattress: Mattress): void {
        this.mattress = mattress;
    }

    public get_Type(): string {
        return this.type;
    }

    public set_Type(type: string): void {
        this.type = type;
    }
}

export default MattressType;