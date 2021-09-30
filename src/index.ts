
import { Komponent } from './components/Komponent';
import { TOOLTYPE, PINTYPE, KUCHLANISH } from './components/Enums'
import { XOR } from './Tools/Xor';
import { Battery } from './Tools/Battery';
import { OR } from './Tools/Or';
import { AND } from './Tools/And';
import { SEGMENT7 } from './Tools/Segment7';
import { NOT } from './Tools/Not';
let batt = new Battery('elementBattery', TOOLTYPE.BATTERY)
let segment=new SEGMENT7('sifr',TOOLTYPE.SEG7)
let emas=new NOT('EMAS',TOOLTYPE.NOT)

batt.Pins.OUT.addPin(segment,segment.Pins.A)
batt.Pins.OUT.addPin(segment,segment.Pins.B)
batt.Pins.OUT.addPin(segment,segment.Pins.C)
batt.Pins.OUT.addPin(emas,emas.Pins.A)
emas.Pins.B.addPin(segment,segment.Pins.D)
batt.setState(KUCHLANISH.PAST)
console.log(segment.NUMBER)

let root=document.getElementById('root')
root.innerText=segment.NUMBER.toString()
