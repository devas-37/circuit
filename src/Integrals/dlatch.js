export const dlatchData = {
    elements: {
        el1: "nand",
        el2: "nand",
        el3: "nand",
        el4: "nand",
        el5: "nand",
    },
    connections: {
        "!:D": [
            {
                name: "el1",
                pins: ["A", "B"],
            },
            {
                name: "el2",
                pins: ["A"],
            },
        ],
        "!:S": [
            {
                name: "el2",
                pins: ["B"],
            },
            {
                name: "el3",
                pins: ["A"],
            },
        ],
        "el1:C": [
            {
                name: "el3",
                pins: ["B"],
            },
        ],
        "el4:C": [
            {
                name: "!",
                pins: ["Q"],
            },
        ],
        "el5:C": [
            {
                name: "!",
                pins: ["Q'"],
            },
        ],
        "el2:C": [
            {
                name: "el4",
                pins: ["A"],
            },
        ],
        "el3:C": [
            {
                name: "el5",
                pins: ["B"],
            },
        ],
        "el4:C": [
            {
                name: "el5",
                pins: ["A"],
            },
        ],
        "el5:C": [
            {
                name: "el4",
                pins: ["B"],
            },
        ],
    },
};


export const notData = {
    elements: {
        el1: "and",
        el2: "not",
        el3: "or",
        el4: 'nand',

    },
    connections: {
        "!:D": [
            {
                name: "el1",
                pins: ["A", "B"],
            },
            {
                name: 'el3',
                pins: ['B']
            }

        ],

        "el1:C": [
            {
                name: "el2",
                pins: ["A"],
            },
        ],
        "el2:B": [
            {
                name: "el3",
                pins: ["A"],
            },
        ],
        'el2:B': [
            {
                name: 'el4',
                pins: ["A"]
            }
        ],
        'el3:B': [
            {
                name: 'el4',
                pins: ["B"]
            }
        ],
    },
}