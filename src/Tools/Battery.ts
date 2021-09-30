import { KUCHLANISH, PINTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class Battery extends Komponent {

    public Pins = {
        OUT: new Pin('OUT', PINTYPE.CHIQISH)
    }
    
    setState(kuchlanish: KUCHLANISH) {
        this.Pins.OUT.Write(kuchlanish)
    }
   
}
