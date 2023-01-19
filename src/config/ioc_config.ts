import "reflect-metadata";

import { Container } from "inversify";

import {
  Battle,
  Weapon,
  Warrior,
  Pauldron,
  Gauntlet,
  Helmet,
} from "../interfaces";

import {
  EpicBattle,
  Katana,
  Shuriken,
  LeatherPauldron,
  SteelPauldron,
  LeatherGauntlet,
  SteelGauntlet,
  LeatherHelmet,
  SteelHelmet,
  Ninja,
  Samurai,
} from "../entities";

import SERVICE_IDENTIFIER from "../constants/identifiers";
import TAG from "../constants/tags";

let container = new Container();

container.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Ninja).whenTargetNamed(TAG.CHINESE);
container.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Shuriken).whenParentNamed(TAG.CHINESE);
container.bind<Pauldron>(SERVICE_IDENTIFIER.PAULDRON).to(LeatherPauldron).whenParentNamed(TAG.CHINESE);
container.bind<Gauntlet>(SERVICE_IDENTIFIER.GAUNTLET).to(LeatherGauntlet).whenParentNamed(TAG.CHINESE);
container.bind<Helmet>(SERVICE_IDENTIFIER.HELMET).to(LeatherHelmet).whenParentNamed(TAG.CHINESE);
container.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Samurai).whenTargetNamed(TAG.JAPANESE);
container.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Katana).whenParentNamed(TAG.JAPANESE);
container.bind<Pauldron>(SERVICE_IDENTIFIER.PAULDRON).to(SteelPauldron).whenParentNamed(TAG.JAPANESE);
container.bind<Gauntlet>(SERVICE_IDENTIFIER.GAUNTLET).to(SteelGauntlet).whenParentNamed(TAG.JAPANESE);
container.bind<Helmet>(SERVICE_IDENTIFIER.HELMET).to(SteelHelmet).whenParentNamed(TAG.JAPANESE);
container.bind<Battle>(SERVICE_IDENTIFIER.BATTLE).to(EpicBattle);

export default container;
