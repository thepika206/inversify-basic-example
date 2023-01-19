import { Weapon } from "./weapon";
import { Pauldron } from "./pauldron";
import { Gauntlet } from "./gauntlet";
import { Helmet } from "./helmet";

export interface Warrior {
    name: string;
    weapon: Weapon;
    pauldron: Pauldron;
    gauntlet: Gauntlet;
    helmet: Helmet;
}
