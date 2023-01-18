import { inject, injectable } from "inversify";

import SERVICE_IDENTIFIER from "../../constants/identifiers";
import { Weapon, Warrior, Pauldron, Gauntlet } from "../../interfaces";

@injectable()
export class Samurai implements Warrior {
    public name: string;
    public weapon: Weapon;
    public pauldron: Pauldron;
    public gauntlet: Gauntlet;
    public constructor(
        @inject(SERVICE_IDENTIFIER.WEAPON) weapon: Weapon,
        @inject(SERVICE_IDENTIFIER.PAULDRON) pauldron: Pauldron,
        @inject(SERVICE_IDENTIFIER.GAUNTLET) gauntlet: Gauntlet,
    ) {
        this.name = "Samurai";
        this.weapon = weapon;
        this.pauldron = pauldron;
        this.gauntlet = gauntlet;
    }
}
