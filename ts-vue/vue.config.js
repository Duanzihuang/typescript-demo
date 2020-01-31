module.exports = {
    devServer: {
        before(app){
            app.get('/api/girls',(req,res) => {
                res.json([
                    {id:1001,name:'周芷若',skill:'九鹰白骨抓'},
                    {id:1002,name:'黄蓉',skill:'打狗棒法'}
                ])
            })
        }
    }
}