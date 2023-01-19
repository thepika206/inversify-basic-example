import { injectable } from "inversify";

import { Boots } from "../../../interfaces";

@injectable()
export class LeatherBoots implements Boots {
    public name: string;
    public constructor() {
        this.name = "Leather Boots";
    }
}
