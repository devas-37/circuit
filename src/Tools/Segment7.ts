import { KUCHLANISH, PINTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class SEGMENT7 extends Komponent{
    public NUMBER=0
    public Pins={
        A:new Pin('A',PINTYPE.KIRISH),
        B:new Pin('B',PINTYPE.KIRISH),
        C:new Pin('C',PINTYPE.KIRISH),
        D:new Pin('D',PINTYPE.KIRISH)
    }
    p(name:string){
        return this.Pins[name].state==KUCHLANISH.YUQORI?1:0
    }
    Fire(){
        let bin=`${this.p('D')}${this.p('C')}${this.p('B')}${this.p('A')}`
        this.NUMBER=parseInt(bin,2)
    }
}