import { inject, injectable } from "inversify";

import SERVICE_IDENTIFIER from "../../constants/identifiers";
import { Warrior, Weapon, Pauldron, Gauntlet, Helmet, Boots } from "../../interfaces";

@injectable()
export class Ninja implements Warrior {
    public name: string;
    public weapon: Weapon;
    public pauldron: Pauldron;
    public gauntlet: Gauntlet;
    public helmet: Helmet;
    public boots: Boots;
    public constructor(
        @inject(SERVICE_IDENTIFIER.WEAPON) weapon: Weapon,
        @inject(SERVICE_IDENTIFIER.PAULDRON) pauldron: Pauldron,
        @inject(SERVICE_IDENTIFIER.GAUNTLET) gauntlet: Gauntlet,
        @inject(SERVICE_IDENTIFIER.HELMET) helmet: Helmet,
        @inject(SERVICE_IDENTIFIER.BOOTS) boots: Boots,
    ) {
        this.name = "Ninja";
        this.weapon = weapon;
        this.pauldron = pauldron;
        this.gauntlet = gauntlet;
        this.helmet = helmet;
        this.boots = boots;
    }
}
