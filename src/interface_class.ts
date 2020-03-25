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

// 定义一个数据库连接的接口
interface Db{
    host: string
    dbName: string
    user: string
    password: string

    connect():boolean
}

// 用接口约束MySql类
class MySql implements Db{
    host: string
    dbName: string
    user: string
    password: string

    constructor(host: string,dbName: string, user: string, password: string) {
        this.host = host
        this.dbName = dbName
        this.user = user
        this.password = password
    }

    connect() {
        if (this.host == '127.0.0.1' 
            && this.dbName =='test' 
            && this.user == 'root' 
            && this.password == 'root') {
                return true
            }

        return false
    }
}

const mysql = new MySql('127.0.0.1','test','root','root')
const result = mysql.connect()
console.log('连接数据库结果 ',result)