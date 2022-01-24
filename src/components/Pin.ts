import { Komponent } from './Komponent'
import { PINTYPE, QUTB, KUCHLANISH, WIRESTATE, TOOLTYPE } from './Enums'

import { Wire } from './Wire'
import { XOR } from '../Tools/Xor'
import { AND } from '../Tools/And'
import { OR } from '../Tools/Or'
import { SEGMENT7 } from '../Tools/Segment7'
interface CHILD {
    komponent: Komponent,
    pins: Array<Pin>
}
interface CHILDS {
    [name: string]: CHILD
}
export class Pin {
    private name: string = null
    private activePin: string = null
    public Pins: CHILDS = {}// Shu pinga ulangan komponenta
    public PinType: PINTYPE = PINTYPE.NEYTRAL
    public Wires: Array<Wire> = []
    public state: KUCHLANISH = KUCHLANISH.PAST
    public Qutb: QUTB = QUTB.MANFIY //Hozircha zarur emas
    /**
     * Har bir elementga ulanuvchi Pin
     * @param name Pinni identifikatsiya qilish uchun
     * @param pinType Pinning kirish yoki chiqish ekanligini belgilash uchun
     */
    constructor(name: string, pinType: PINTYPE) {
        this.PinType = pinType
        this.name = name
    }


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
        this.state = kuchlanish
        for (const key in this.Pins) {
            this.Pins[key].pins.forEach((e: Pin) => {
                e.Write(kuchlanish)
            })
            this.Pins[key].komponent.Fire()
        }
    }
    addPin(komponent: Komponent = null, pinName: Pin = null) {
        let a = komponent.element
        if (this.Pins[a]) {
            this.Pins[a].pins.push(pinName)
        } else {
            this.Pins[a] = {
                komponent: komponent,
                pins: [pinName]
            }
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
    getComponents() {
        let buf = []
        for (const key in this.Pins) {
            buf.push(this.Pins[key].komponent)
        }
        return buf
    }

}