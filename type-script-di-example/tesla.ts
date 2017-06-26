import { Car,EngineType } from "./car";
import { Console } from "./Console";

export class Tesla extends Car {
    constructor(console : Console){
        super(console);
        this.engine = EngineType.Electric;
    }
}