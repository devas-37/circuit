import { KUCHLANISH, PINTYPE, TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";
class SEGMENT {
    private element: SVGElement;
    private q: string = 'http://www.w3.org/2000/svg';
    constructor(type: string) {
        this.element = document.createElementNS('http://www.w3.org/2000/svg', type);
        this.off()
    }
    attr(attr: string, d: string) {
        this.element.setAttributeNS(null, attr, d)
    }
    on() {
        this.element.setAttributeNS(null, 'fill', 'lime')
    }
    off() {
        this.element.setAttributeNS(null, 'fill', '#3c3c3b')
    }
    instance(): SVGElement {
        return this.element as SVGElement
    }
}

export interface SEGMENTVAR {
    LB?: SEGMENT,
    LT?: SEGMENT,
    T?: SEGMENT,
    B?: SEGMENT,
    RT?: SEGMENT,
    RB?: SEGMENT,
    M?: SEGMENT
}
export class SEGMENT7 extends Komponent {
    private nameSpace = 'http://www.w3.org/2000/svg'
    public NUMBER = 0
    private parent: SVGElement;
    private numbers = {
        0: ['T', 'RT', 'RB', 'B', 'LB', 'LT'],
        1: ['RT', 'RB'],
        2: ['T', 'RT', 'M', 'LB', 'B'],
        3: ['T', 'RT', 'RB', 'M', 'B'],
        4: ['LT', 'M', 'RT', 'RB'],
        5: ['T', 'LT', 'M', 'RB', 'B'],
        6: ['T', 'LT', 'LB', 'M', 'RB', 'B'],
        7: ['RT', 'RB', 'T'],
        8: ['T', 'LT', 'LB', 'M', 'RB', 'B', 'RT'],
        9: ['T', 'LT', 'M', 'RB', 'B', 'RT'],
        10: ['T', 'LT', 'LB', 'M', 'RB', 'RT'],
        11: ['LT', 'LB', 'RB', 'RT'],
        12: ['T', 'LT', 'LB', 'M', 'B'],
        13: ['T', 'LT', 'LB', 'RB', 'B', 'RT'],
        14: ['T', 'LT', 'LB', 'B', 'M'],
        15: ['T', 'LT', 'LB', 'M'],
    }
    constructor(element: string, type: TOOLTYPE = null, canvasEl: string) {
        super(element, type, canvasEl)
        this.parent = document.createElementNS(this.nameSpace, 'svg') as SVGElement
        this.setAttr(this.parent, {
            'x': 0,
            'y': 0,
            viewBox: '0 0 18.24 25.48',
            'width': 54.72,
            'height': 76.44,
            'style': 'background:#1e1e1e;'
        })
        this.canvas.appendChild(this.parent)
        this.paint()
    }

    public Pins = {
        A: new Pin('A', PINTYPE.KIRISH),
        B: new Pin('B', PINTYPE.KIRISH),
        C: new Pin('C', PINTYPE.KIRISH),
        D: new Pin('D', PINTYPE.KIRISH)
    }
    setAttr(el: SVGElement, val: object) {
        for (const m in val) {
            el.setAttributeNS(null, m, val[m])
        }
    }
    public Seg: SEGMENTVAR = {
        LB: new SEGMENT('path'),
        LT: new SEGMENT('path'),
        B: new SEGMENT('path'),
        T: new SEGMENT('path'),
        RT: new SEGMENT('path'),
        RB: new SEGMENT('path'),
        M: new SEGMENT('polygon')
    }
    private paint() {
        this.Seg.LB.attr('d', 'M4.8,14.12,4.65,15.3l-.8,6.16h0L2,23a2.22,2.22,0,0,1-.34-1l1.08-7.86,1.18-1Z')
        this.Seg.B.attr('d', 'M13.08,23.72a2.53,2.53,0,0,1-.81.33l-8.71-.11a2.27,2.27,0,0,1-1.19-.52l1.89-1.64h0l7.2.07Z')
        this.Seg.RB.attr('d', 'M15.13,14.21,14,22.26a2.12,2.12,0,0,1-.55,1.13l-1.57-1.82,1-7.29,1.29-1.12Z')
        this.Seg.M.attr('points', '13.88 12.77 12.69 13.8 5.2 13.8 4.36 12.82 5.68 11.68 12.94 11.68 13.88 12.77')
        this.Seg.RT.attr('d', 'M16.59,3.48l-1.07,7.87h0l-1.24,1.07-.89-1,1-7.29,1.86-1.6A2,2,0,0,1,16.59,3.48Z')
        this.Seg.T.attr('d', 'M15.94,2.11,14.18,3.63H6.68L5.23,2A1.81,1.81,0,0,1,6,1.65h9A2,2,0,0,1,15.94,2.11Z')
        this.Seg.LT.attr('d', 'M6.35,4,5.24,11.37,4,12.43l-.86-1L4.28,3.3a2.64,2.64,0,0,1,.56-1Z')
        for (const m in this.Seg)
            this.parent.appendChild(this.Seg[m].instance())

        this.canvas.appendChild(this.parent)

    }
    p(name: string) {
        return this.Pins[name].state == KUCHLANISH.YUQORI ? 1 : 0
    }
    Fire() {
        let bin = `${this.p('D')}${this.p('C')}${this.p('B')}${this.p('A')}`
        let son = parseInt(bin, 2)
        console.log(this.numbers[son].join(' '))
        this.numbers[son].forEach((e: string) => {
            this.Seg[e].on()
        })
    }

}