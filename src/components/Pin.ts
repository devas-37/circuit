import { Komponent } from './Komponent'
import { PINTYPE, QUTB, KUCHLANISH, WIRESTATE, TOOLTYPE } from './Enums'
import { CPIN } from './Interfaces'
import { Wire } from './Wire'
import { XOR } from '../Tools/Xor'
import { AND } from '../Tools/And'
import { OR } from '../Tools/Or'
import { SEGMENT7 } from '../Tools/Segment7'
export class Pin {
    private name: string = null
    private activePin: string = null
    /**
     * Har bir elementga ulanuvchi Pin
     * @param name Pinni identifikatsiya qilish uchun
     * @param pinType Pinning kirish yoki chiqish ekanligini belgilash uchun
     */
    constructor(name: string, pinType: PINTYPE) {
        this.PinType = pinType
        this.name = name
    }

    public Pins: Array<Object> = []// Shu pinga ulangan komponenta
    public PinType: PINTYPE = PINTYPE.NEYTRAL
    public Wires: Array<Wire> = []
    public state: KUCHLANISH = KUCHLANISH.PAST
    public Qutb: QUTB = QUTB.MANFIY //Hozircha zarur emas

    Write(kuchlanish: KUCHLANISH) {
        if (kuchlanish) {
            this.Wires.forEach(wire => {
                wire.setState(WIRESTATE.ON)
            })
        } else {
            this.Wires.forEach(wire => {
                wire.setState(WIRESTATE.OFF)
            })
        }
        console.log('This tool name:' + this.name)
        this.state = kuchlanish
        this.Pins.forEach((el:CPIN) => {
            switch (el.parent.type) {
                case TOOLTYPE.XOR:{
                    let m: XOR = el.parent
                    m.pins[el.pinName].Write(kuchlanish)
                    m.Fire()
                    break
                }
                case TOOLTYPE.AND:{
                    let m:AND=el.parent
                    m.pins[el.pinName].Write(kuchlanish)
                    m.Fire()
                    break
                }
                case TOOLTYPE.OR:{
                    let m:OR=el.parent
                    m.pins[el.pinName].Write(kuchlanish)
                    m.Fire()
                    break
                }
                case TOOLTYPE.SEG7:{
                    let m:SEGMENT7=el.parent
                    m.Pins[el.pinName].Write(kuchlanish)
                    m.Fire()
                    break
                }
                case TOOLTYPE.NOT:{
                    let m:SEGMENT7=el.parent
                    m.Pins[el.pinName].Write(kuchlanish)
                    m.Fire()
                    break
                }
                    
            }
        })
        
    }
    addPin(komponent: any = null, pinName: Pin = null) {
        let komp:CPIN
        if (komponent) {
            komp = {
                parent: komponent,
                pinName: pinName.getName()
            }
            this.Pins.push(komp)
        }
    }
    addWire(wire: Wire = null) {
        this.Wires.push(wire)
    }
    removeWire(name: string) {
        this.Wires = this.Wires.filter(wire => wire.name !== name)
    }

    getName() {
        return this.name
    }

}