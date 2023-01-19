import { inject, injectable, named } from "inversify";

import { Battle, Warrior } from "../../interfaces";
import SERVICE_IDENTIFIER from "../../constants/identifiers";
import TAG from "../../constants/tags";

@injectable()
export class EpicBattle implements Battle {

    @inject(SERVICE_IDENTIFIER.WARRIOR) @named(TAG.CHINESE) public warrior1: Warrior;
    @inject(SERVICE_IDENTIFIER.WARRIOR) @named(TAG.JAPANESE) public warrior2: Warrior;

    public fight() {
        let desc = `FIGHT!
                ${this.warrior1.name} (wielding: ${this.warrior1.weapon.name}, wearing: ${this.warrior1.helmet.name}, ${this.warrior1.pauldron.name}, ${this.warrior1.gauntlet.name})
                vs
                ${this.warrior2.name} (wielding: ${this.warrior2.weapon.name}, wearing: ${this.warrior1.helmet.name}, ${this.warrior2.pauldron.name}, ${this.warrior2.gauntlet.name})`;
        return desc;
    }

}
