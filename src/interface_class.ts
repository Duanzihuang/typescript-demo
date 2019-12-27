interface Entity2{
    title:string;
    log():void;
}

class Post2 implements Entity2{
    title:string;

    constructor(title:string){
        this.title = title;
    }

    log():void{
        console.log('hello ',this.title)
    }
}

const p = new Post2('小明');
p.log();