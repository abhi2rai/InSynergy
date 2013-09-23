/**
 * Created with JetBrains WebStorm.
 * User: abhishekrai
 * Date: 8/27/13
 * Time: 12:10 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InSynergy.view.Welcome',{
    extend:'Ext.Panel',
    requires:[
        'InSynergy.view.Header'
    ],
    id:'welcome',
    config:
    {

        layout: {
            type:'vbox'
        },
        items:
            [
                {
                    xtype:'titlebar',
                    docked: 'top',
                    title:'Profile',
                    style: {
                        fontFamily:'hul',
                        fontSize:'40'
                    },
                    height:'10%',
                    items: [
                        {
                            ui: 'back',
                            text:'Logout',
                            style: {
                                fontFamily:'hul'
                            },
                            align: 'left',
                            listeners:{
                                'tap':function(){
                                    Ext.Viewport.animateActiveItem(Ext.getCmp('home'), { type: 'slide', direction: 'right' });
                                    Ext.getCmp('loginForm').getAt(0).setValue("");
                                    Ext.getCmp('loginForm').getAt(1).setValue("");
                                }
                            }
                        }
                    ]
                },
                {
                    xclass:'InSynergy.view.Header'

                },
                {
                    xtype: 'image',
                    src: 'resources/icons/user.png',
                    height:'20%'
                },
                {
                    xtype:'button',
                    id:'assess',
                    cls:'assess',
                    ui:'action',
                    text:'Assessment Status'

                },

                {
                    xtype:'button',
                    id:'enquire',
                    cls:'enquiry',
                    ui:'action',
                    text:'Enquiry'

                },
                {
                    xtype:'titlebar',
                    docked: 'bottom',
                    title:'Your Expectation,Our Inspiration!',
                    style: {
                        fontFamily:'hul'
                    },
                    height:'5%'

                }

            ]
    }
});