import { inject, injectable } from "inversify";

import SERVICE_IDENTIFIER from "../../constants/identifiers";
import { Warrior, Weapon, Pauldron } from "../../interfaces";

@injectable()
export class Ninja implements Warrior {
    public name: string;
    public weapon: Weapon;
    public pauldron: Pauldron;
    public constructor(
        @inject(SERVICE_IDENTIFIER.WEAPON) weapon: Weapon,
        @inject(SERVICE_IDENTIFIER.PAULDRON) pauldron: Pauldron
    ) {
        this.name = "Ninja";
        this.weapon = weapon;
        this.pauldron = pauldron;
    }
}
