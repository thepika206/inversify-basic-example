import { injectable } from "inversify";

import { Boots } from "../../../interfaces";

@injectable()
export class SteelBoots implements Boots {
    public name: string;
    public constructor() {
        this.name = "Steel Boots";
    }
}
