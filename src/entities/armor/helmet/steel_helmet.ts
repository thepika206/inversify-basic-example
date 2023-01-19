import { injectable } from "inversify";

import { Helmet } from "../../../interfaces";

@injectable()
export class SteelHelmet implements Helmet {
    public name: string;
    public constructor() {
        this.name = "Steel Helmet";
    }
}
