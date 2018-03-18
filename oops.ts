export class Top {
    /*frx: number
    fry: number
    constructor(frx : number, fry : number) {
        this.frx = frx
        this.fry = fry
    }*/

    constructor(
        private frx: number = 98, // deafult parameters
        private fry: number = 56
    ) {

    }

    center(pvt? : number) { // optional parameters
        return (this.frx + this.fry) / 2
    }
}

export class Dimensions extends Top {

}