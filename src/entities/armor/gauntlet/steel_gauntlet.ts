import { injectable } from "inversify";

import { Gauntlet } from "../../../interfaces";

@injectable()
export class SteelGauntlet implements Gauntlet {
    public name: string;
    public constructor() {
        this.name = "Steel Gauntlets";
    }
}
