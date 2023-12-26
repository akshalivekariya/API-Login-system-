var usermodel = require('../model/usermodel');
const storage = require('node-persist');

exports.register = async (req,res) =>{
    var existuser = await usermodel.find({email : req.body.email});
    if(existuser.length >0){
        res.status(200).json({
            status : 'user already exist',   
        });
    }
    else{
        var data = await usermodel.create(req.body);
        res.status(200).json({
            status : 'data inserted successfully',
            data
        });
    }
};

exports.login = async (req, res) => {
    var user = await usermodel.find({email: req.body.email});
    await storage.init();
    var user_login = await storage.getItem('user_login')
   
    if(user_login==undefined){
            if(user.length==1){
                            if(user[0].password==req.body.password){
                                await storage.init();
                                await storage.setItem('user_login',user[0].id)
                                res.status(200).json({
                                status :"loggin successfully",
                                });
                            }
                            else{
                                res.status(200).json({
                                status : "incorrect email or password,please enter valid email or password"
                            })
                            }
            }
            else{
                            res.status(200).json({
                            status : "incorrect email or password,please enter valid email or password"
                            });
            }
    }
    else{
        res.status(200).json({
        status : "user alerady login"
        });
    }
};

exports.logout = async (req,res) =>{
    await storage.init();
    await storage.clear();
    res.status(200).json({
        status:"logout"
    })
};
