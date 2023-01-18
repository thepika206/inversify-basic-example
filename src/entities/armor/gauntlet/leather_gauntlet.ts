import { injectable } from "inversify";

import { Gauntlet } from "../../../interfaces";

@injectable()
export class LeatherGauntlet implements Gauntlet {
    public name: string;
    public constructor() {
        this.name = "Leather Gauntlets";
    }
}
