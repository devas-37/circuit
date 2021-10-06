import { KUCHLANISH, PINTYPE, TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class AND extends Komponent {

    public pins = {
        A: new Pin('A', PINTYPE.KIRISH),
        B: new Pin('B', PINTYPE.KIRISH),
        C: new Pin('C', PINTYPE.CHIQISH)
    }



    constructor(element: string, type: TOOLTYPE = null) {
        super(element, type)
    }

    Fire() {
        if (this.pins.A.state & this.pins.B.state) {
            this.pins.C.Write(KUCHLANISH.YUQORI)
        } else {
            this.pins.C.Write(KUCHLANISH.PAST)
        }
    }

}
