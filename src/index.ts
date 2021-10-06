
import { TOOLTYPE, PINTYPE, KUCHLANISH } from './components/Enums'
import { Battery } from './Tools/Battery';
import { SEGMENT7 } from './Tools/Segment7';
import { NOT } from './Tools/Not';
let batt = new Battery('elementBattery', TOOLTYPE.BATTERY)
let segment = new SEGMENT7('sifr', TOOLTYPE.SEG7, 'root')
let emas = new NOT('EMAS', TOOLTYPE.NOT)
batt.Pins.OUT.addPin(segment, segment.Pins.A)
batt.Pins.OUT.addPin(segment, segment.Pins.D)
batt.Pins.OUT.addPin(segment, segment.Pins.C)

batt.Pins.OUT.addPin(emas, emas.Pins.A)
batt.setState(KUCHLANISH.YUQORI)
