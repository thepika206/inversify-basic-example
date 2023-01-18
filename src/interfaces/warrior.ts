import { Weapon } from "./weapon";
import { Pauldron } from "./pauldron";

export interface Warrior {
    name: string;
    weapon: Weapon;
    pauldron: Pauldron;
}
