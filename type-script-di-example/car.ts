import { Console} from "./Console";

export class Car {
    make : string;
    engine : EngineType;
    private console : Console;

    constructor(console : Console){
        this.console = console;
    }
    drive(){
        if(this.engine === EngineType.Gas){
            this.console.log("vroom vroom");

        }
        else if(this.engine === EngineType.Electric){
            this.console.log("buzz");
        }
        
    }
}

export enum EngineType {
    Gas,Electric
}