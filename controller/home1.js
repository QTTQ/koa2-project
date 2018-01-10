//引入service文件
const HomeService = require('../service/home');

module.exports = {
    // index: async (ctx, next) => { ctx.response.body = `<h1>index page</h1>` },
    index: async (ctx, next) => {
        await ctx.render('home/index', { title: 'node欢迎你 ' })
    },
    home: async (ctx, next) => {
        console.log(ctx.request.query)
        console.log(ctx.request.querystring)
        ctx.response.body = '<h1>HOME page</h1>'
    },
    homeParams: async (ctx, next) => {
        console.log(ctx.request.query);
        console.log(ctx.request.querystring);
        console.log(ctx.params);
        ctx.response.body = `<h1>home page</h1>`
    },
    // login: async (ctx, next) => {
    //     ctx.response.body = `
    //      <form action="/user/register" method="post">
    //       <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
    //       <br/>
    //       <input name="password" type="text" placeholder="请输入密码：123456"/>
    //       <br/> 
    //       <button>GoGoGo</button>
    //     </form>
    //     `
    // },
    login: async (ctx, netx) => {
        await ctx.render('home/login', { btnName: 'gogogo' })
    },
    // register: async (ctx, next) => {
    //     let { name, password } = ctx.requset.body;
    //     if (name == '111' && password == '111') {
    //         ctx.response.body = `hello , ${name}`;
    //     } else {
    //         ctx.response.body = '账号信息错误'
    //     }
    // }
    register: async (ctx, next) => {
        let params = ctx.request.body;
        let name = params.name;
        let password = params.password;
        let res = await HomeService.register(name, password);
        if (res.status == '-1') {
            await ctx.render('home/login', res.data);
        } else {
            ctx.state.title = '个人中心'
            await ctx.render('home/success', res.data)
        }
    }
}