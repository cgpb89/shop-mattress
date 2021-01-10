import MattressType from "../model/MattressType";
import MattressesJSON from "../api/matress.json";
import { deserialize } from "serializr";
import Mattress from "../model/Mattress";


export class ParseJson {
    public ParseJsonData = (): MattressType[] => {
        return this.serialize();
    }

    private serialize = () => {
        const data: MattressType[] = [];

        Object.entries(MattressesJSON.mattresses).forEach(([key, value]) => {
            let mattressValue = new MattressType();
                    mattressValue.set_Mattress(deserialize(Mattress, value));
                    mattressValue.set_Type(key);
                    data.push(mattressValue);
        });
        return data;
    }
}