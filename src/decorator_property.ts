function Input(params: any) {
    return function(target: any) {
        console.log('target is ',target)

        target.baseUrl = params.baseUrl
    }
}

class Http {
    @Input({baseUrl:'http://127.0.0.1:300/api'})
    public baseUrl: string
}

const h1 = new Http()
console.log('baseURL is ',h1.baseUrl)