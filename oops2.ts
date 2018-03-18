export class Top {
    /*frx: number
    fry: number
    constructor(frx : number, fry : number) {
        this.frx = frx
        this.fry = fry
    }*/

    constructor(
        private frx: number = 98, // deafult parameters
        private fry: number = 56,
        protected hi = 'android'
    ) {

    }

    get x() {
        return this.frx
    }

    get y() {
        return this.fry
    }

    center(pvt?: number) { // optional parameters
        return (this.frx + this.fry) / 2
    }
}

export class Dimensions extends Top implements Gps {

    rng: number = 10

    location() {
        console.log(`Location is Punes`)
    }

    topLeft() {
        this.hi = 'hello'
        return this.x + this.y
    }
}

let dm: Dimensions = new Dimensions()
dm.topLeft()
dm.center()
console.log(`X is ${dm.x} and Y is ${dm.y}`)

export interface Gps {
    rng: number
    location()
}

let gp: Gps = {
    rng: 10,
    location: () => console.log(`Locations`)
}

let fp : any = new Top()

fp = gp

gp = fp