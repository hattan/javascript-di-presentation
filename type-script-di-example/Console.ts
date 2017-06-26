export interface Console{
  log(message : string);
}

export class BasicConsole implements Console{
    log(message : string){
        console.log(message);
    }
}

export class ColoredConsole implements Console{
    log(message : string){
        console.log('\x1b[36m%s\x1b[0m', message);
    }
}