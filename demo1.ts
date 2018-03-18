import { Top } from './oops';

let nm: string = 'android'
let num = 456

function nmNum(): string {
    return `android`;
}

let mg: number | string | boolean = true
mg = 'android'
mg = 1235

let an: any = mg
let fn: (nm: number) => void = function (nm: number) { }
let fn1: (nm: number) => void = (nm: number) => console.log('hi')

let v1: { [key: string]: number } = {
    one: 1,
    two: 2
}

class Car {

}

let cr: Car = new Car()
let dt: Date = new Date()

let tp : Top = new Top()
console.log(tp.center())