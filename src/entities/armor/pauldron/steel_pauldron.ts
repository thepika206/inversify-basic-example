import { injectable } from "inversify";

import { Pauldron } from "../../../interfaces";

@injectable()
export class SteelPauldron implements Pauldron {
    public name: string;
    public constructor() {
        this.name = "Steel Pauldron";
    }

}
