import { Tesla } from "./tesla";
import { Console,BasicConsole,ColoredConsole } from "./Console";

var console = new BasicConsole();
var hattansCar = new Tesla(console);
hattansCar.drive();