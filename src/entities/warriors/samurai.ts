import { inject, injectable } from "inversify";

import SERVICE_IDENTIFIER from "../../constants/identifiers";
import { Weapon, Warrior, Pauldron } from "../../interfaces";

@injectable()
export class Samurai implements Warrior {
    public name: string;
    public weapon: Weapon;
    public pauldron: Pauldron;
    public constructor(
        @inject(SERVICE_IDENTIFIER.WEAPON) weapon: Weapon,
        @inject(SERVICE_IDENTIFIER.PAULDRON) pauldron: Pauldron
    ) {
        this.name = "Samurai";
        this.weapon = weapon;
        this.pauldron = pauldron;
    }
}
