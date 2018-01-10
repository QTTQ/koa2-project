const userModel = require('../lib/mysql')
const md5 = require('md5')

module.exports = {
    login: async (ctx, user) => {
        return await userModel.findUserData(user.name)
            .then((result) => {
                // console.log('login result:', result)
                if (result.length) {
                    try {
                        console.log('login result:', result[0].name)
                        ctx.body = {
                            msg: '用户登录成功',
                            user_name: result[0].name,
                            data: 1
                        };
                    } catch (error) {
                        //处理err
                        // console.log(error)
                        ctx.body = {
                            msg: '未知错误',
                            user_name: "",
                            data: 0
                        };
                    }
                } else {
                    ctx.body = {
                        msg: '请求错误',
                        user_name: "",
                        data: 0
                    };

                }
            })
    },
    register: async (ctx, user) => {
        await userModel.findDataByName(user.name)
            .then(result => {
                console.log('result:', result);
                let msg, user_name, data;
                if (result.length) {
                    try {
                        // throw Error('用户已经存在')
                        msg = '用户已经存在'
                    } catch (error) {
                        //处理err
                        msg = '处理err'
                        console.log(error)
                    }
                    ctx.body = {
                        msg: msg,
                        user_name: "",
                        data: 0
                    };;
                } else {
                    userModel.insertData([ctx.request.body.name, md5(ctx.request.body.password)])
                    console.log('register body:', ctx.request.body)
                    // ctx.session.user = ctx.request.body.name
                    ctx.body = {
                        msg: '用户注册成功',
                        user_name: ctx.request.body.name,
                        data: 1
                    };
                }
            })
    }
}
// else if (user.pass !== user.repeatpass || user.pass == '') {
//     body = {
//         data: 2
//     };

// }