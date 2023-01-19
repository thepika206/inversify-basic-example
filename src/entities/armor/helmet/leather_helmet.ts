import { injectable } from "inversify";

import { Helmet } from "../../../interfaces";

@injectable()
export class LeatherHelmet implements Helmet {
    public name: string;
    public constructor() {
        this.name = "Leather Helmet";
    }
}
