class Animal{
    static home: string = '地球'
    name: string = ''
    age: number = 0

    constructor(name: string,age: number) {
        this.name = name
        this.age = age
    }

    eat(food: string){
        console.log(`${this.name} 吃 ${food}`)
    }

    static printHome(){
        console.log('所有动物的家园是 ',this.home)
    }
}

console.log(Animal.home)

class Dog extends Animal{
    color: string

    // 重写构造器
    constructor(name: string,age: number,color: string) {
        super(name,age)

        this.color = color
    }

    // 重写父类的方法
    eat(food: string) {
        console.log(`冈瑟四世吃的是 ${food}`)
    }
}