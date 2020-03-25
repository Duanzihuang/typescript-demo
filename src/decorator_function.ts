function Log(params: any) {
    return function(target:any, funcName:any,descriptor: TypedPropertyDescriptor<any>) {
        const oldValue = descriptor.value

        descriptor.value = function(...rest: any[]) {
            console.log(`${params.start} ${new Date().toLocaleString()}`)

            // 执行原先的方法
            oldValue.apply(this, rest)

            console.log(`${params.end} ${new Date().toLocaleString()}`)
        }
    }
}

class Page{
    @Log({start: '开始了',end: '结束了'})
    render() {
        console.log('render 执行了~')
    }

    @Log({start: 'run 开始了',end: 'run 结束了'})
    run() {
        console.log('run 执行了~')
    }
}

const p1 = new Page()
p1.render()
console.log('---------------------------------------')
p1.run()