/**
 * Created with JetBrains WebStorm.
 * User: abhishekrai
 * Date: 8/26/13
 * Time: 8:04 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InSynergy.view.Home',{
    extend:'Ext.Panel',
    id:'home',
    requires:[
        'InSynergy.view.SignUp',
        'Ext.TitleBar',
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.Img'

    ],
    config:
    {
        fullscreen: true,
        items:
            [
                {
                    xtype:'titlebar',
                    docked: 'top',
                    title:'InSynergy',
                    style: {
                        fontFamily:'papyrus',
                        fontSize:'40',
                        style:''
                    },
                    height:'10%'

                },
                {
                    xtype: 'image',
                    src: 'resources/icons/lock.png',
                    height:'20%'
                },
                {
                    xtype:'fieldset',
                    id:'loginForm',
                    items:[
                        {
                            xtype:'textfield',
                            placeHolder:'Username',
                            itemId:'username',
                            required:true
                        },
                        {
                            xtype:'passwordfield',
                            placeHolder:'Password',
                            itemId:'password',
                            required:true
                        }
                    ]
                },
                {
                    xtype:'button',
                    cls:'submit',
                    ui:'action',
                    text:'Submit',
                    id:'logIn'

                },
                {
                    html:'<div onclick="openSignUp()" align="center" style="margin-top: 20%"><u>New User? Sign Up</u></div>'

                },
                {
                    xtype:'titlebar',
                    docked: 'bottom',
                    title:'Your Expectation, Our Inspiration!',
                    style: {
                        fontFamily:'hul'
                    },
                    height:'2%'

                }


            ]
    }
});

function openSignUp()
{

    if(Ext.getCmp('signup') == undefined)
    {
        Ext.Viewport.animateActiveItem({xclass:'InSynergy.view.SignUp'}, { type: 'slide', direction: 'left' });
    }
    else
    {
        Ext.Viewport.animateActiveItem(Ext.getCmp('signup'), { type: 'slide', direction: 'left' });
    }
}
