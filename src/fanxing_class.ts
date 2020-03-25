interface Info{
    name: string,
    age: number,
    gender: string,
    type: string
}

class Animal2<T extends Info>{
    public info: T

    // 构造器
    constructor(info: T) {
        this.info = info
    }

    sayHi():void {
        console.log(`my name is ${this.info.name}, i am a ${this.info.type}`)
    }
}

const dog = new Animal2({name: '冈瑟四世', age: 5, gender: '男' ,type : 'Dog'})
const cat = new Animal2({name: 'Tom', age: 3, gender: '男' ,type : 'Cat'})
dog.sayHi()
cat.sayHi()