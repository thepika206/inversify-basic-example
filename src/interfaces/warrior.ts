import { Weapon } from "./weapon";
import { Pauldron } from "./pauldron";
import { Gauntlet } from "./gauntlet";

export interface Warrior {
    name: string;
    weapon: Weapon;
    pauldron: Pauldron;
    gauntlet: Gauntlet;
}
