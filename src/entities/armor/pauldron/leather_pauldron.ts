import { injectable } from "inversify";

import { Pauldron } from "../../../interfaces";

@injectable()
export class LeatherPauldron implements Pauldron {
    public name: string;
    public constructor() {
        this.name = "Leather Pauldron";
    }

}
