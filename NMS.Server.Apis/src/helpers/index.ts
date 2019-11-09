
export class Helpers {
    public static Log(str: string) {
        console.log(str);
    }
    
    public static LogParams(str: string) {
        console.log("Params => ", JSON.stringify(str));
    }

}