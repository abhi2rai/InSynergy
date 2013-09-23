/**
 * Created with JetBrains WebStorm.
 * User: abhishekrai
 * Date: 8/26/13
 * Time: 11:31 PM
 * To change this template use File | Settings | File Templates.
 */
var globalId;
Ext.define('InSynergy.controller.registerController', {
    extend: 'Ext.app.Controller',
    requires:['InSynergy.view.Welcome','Ext.device.Connection'],
    config:{
        control:{
            '#register':{
                tap: 'addNewUser'
            },
            '#logIn':{
                tap: 'headerInit'

            }
        }
    },
    addNewUser:function()
    {
        var name= Ext.getCmp('nameReg').getValue();
        var clientId = Ext.getCmp('idReg').getValue();
        var dob=Ext.getCmp('dob').getValue();
        var categ = Ext.getCmp('categ').getValue();
        var pwd = Ext.getCmp('password').getValue();
        var pwdC = Ext.getCmp('passwordC').getValue();
        if(!name || !clientId || !pwd || !pwdC)
        {
            Ext.Msg.alert('SignUp','Please fill in all the values', Ext.emptyFn());
        }
        else if(pwd != pwdC)
        {
            Ext.Msg.alert('SignUp','Passwords do not match',Ext.emptyFn());
            Ext.getCmp('password').setValue("");
            Ext.getCmp('passwordC').setValue("");
        }
        else
        {

            var obj = {
                'name':name,
                'cliendId':clientId,
                'dob':dob,
                'categ':categ,
                'pwd':pwd
            }
            if(localStorage.Users == undefined)
            {
                var Users = new Array();
                Users.push(obj);
                localStorage.Users = JSON.stringify(Users);
            }
            else
            {
                var Users = JSON.parse(localStorage.Users);
                Users.push(obj);
                localStorage.Users = JSON.stringify(Users);

            }
            Ext.Msg.alert('InSynergy','User with Username '+name+' and Client ID '+clientId+' added.',Ext.emptyFn());
            Ext.Viewport.animateActiveItem(Ext.getCmp('home'), { type: 'slide', direction: 'right' });
        }

    },
    headerInit:function()
    {
        var Users;
        var flag = 0;
        var status;
        if(Ext.device.Connection.isOnline())
        {
            status="resources/icons/online.png"
        }
        else
        {
            status="resources/icons/offline.png"
        }
        var user = Ext.getCmp('loginForm').getAt(0).getValue();
        var pwd = Ext.getCmp('loginForm').getAt(1).getValue();
        if(localStorage.Users == undefined)
        {
            Ext.Msg.alert('Error','User Does not Exist',Ext.emptyFn());
        }
        else
        {
            Users = JSON.parse(localStorage.Users);
            for(var i = 0 ; i < Users.length;i++)
            {
                if((user == Users[i].name) && (pwd == Users[i].pwd))
                {
                    flag=1;
                    if(Ext.getCmp('header' )== undefined)
                    {
                        Ext.Viewport.animateActiveItem({xclass:'InSynergy.view.Welcome'}, { type: 'slide', direction: 'left' });
                    }
                    else
                    {
                        Ext.Viewport.animateActiveItem(Ext.getCmp('welcome'), { type: 'slide', direction: 'left' });
                    }
                    var panel =  Ext.getCmp('header');
                    var time = new Date();
                    var date = time.toString().split(' ').splice(1,3).join(' ');
                    panel.removeAll();
                    panel.add(
                        {
                            html:['<table style="width:100%;border: 1px solid;background-color: #15467D;color:#FFFFFF;font-family: hul;"><tr>'+
                                '<td style="width: 50%;"><div>' +
                                '<div align="left" class="panell">Welcome '+Users[i].name+'</div>' +
                                '<div align="left" class="panell">'+date+'</div>' +
                                '<div align="left" class="panell">'+Users[i].cliendId+'</div>'+
                                '</td><td style="width:50%"><div align="right" class="panelr">Status: <img src='+status+'></div>'+
                                '</div></td></tr></table>'].join("")
                        }
                    );
                    globalId = Users[i].cliendId;
                    var assessObj={
                        'clientId':globalId,
                        'count':"1111",
                        'today':'3',
                        'fc':'4',
                        'sc':'5'
                    }
                    var arr = new Array();
                    arr.push(assessObj);
                    if(localStorage.UserData == undefined)
                    {
                        localStorage.UserData = JSON.stringify(arr);
                    }
                    else
                    {
                        var obj = JSON.parse(localStorage.UserData);
                        for(var i =0 ;i<obj.length ;i ++)
                        {
                            if(obj[i].clientId != globalId)
                            {
                                obj.push(assessObj);
                                localStorage.UserData = JSON.stringify(obj);
                            }
                        }
                    }

                }

            }
            if(flag==0)
            {
                Ext.Msg.alert('Error','Incorrect Username and Password',Ext.emptyFn());
            }

        }
    }
});