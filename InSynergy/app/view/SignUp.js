/**
 * Created with JetBrains WebStorm.
 * User: abhishekrai
 * Date: 8/26/13
 * Time: 10:20 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InSynergy.view.SignUp',{
    extend:'Ext.Panel',
    requires:[
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.ActionSheet'
    ],
    id:'signup',
    config:{
        layout: {
            type:'vbox'
        },
        items:
            [
                {
                    xtype:'titlebar',
                    docked: 'top',
                    title:'Sign Up',
                    style: {
                        fontFamily:'hul',
                        fontSize:'40'
                    },
                    height:'10%',
                    items: [
                        {
                            ui: 'back',
                            text:'Login',
                            style: {
                                fontFamily:'hul'
                            },
                            align: 'left',
                            listeners:{
                                'tap':function(){
                                    Ext.Viewport.animateActiveItem(Ext.getCmp('home'), { type: 'slide', direction: 'right' });

                                }
                            }
                        }
                    ]
                },
                {
                    html:'<br><br>'
                },
                {
                    xtype: 'textfield',
                    id:'nameReg',
                    label: 'Username',
                    labelWidth: '50%'
                },
                {
                    xtype: 'textfield',
                    label: 'Client ID',
                    labelWidth: '50%',
                    id:'idReg'

                },
                {
                    xtype: 'datepickerfield',
                    label: 'DOB',
                    labelWidth: '50%',
                    id: 'dob',
                    value: new Date()
                },
                {
                    xtype: 'selectfield',
                    label: 'Category',
                    labelWidth: '50%',
                    id:'categ',
                    options: [
                        {text: 'Cat A',  value: 'A'},
                        {text: 'Cat B', value: 'B'},
                        {text: 'Cat C',  value: 'C'}
                    ]
                },
                {
                    xtype:'passwordfield',
                    placeHolder:'Password',
                    label:'Enter Password',
                    labelWidth: '50%',
                    id:'password',
                    required:true
                },
                {
                    xtype:'passwordfield',
                    placeHolder:'Confirm Password',
                    label:'Confirm',
                    labelWidth: '50%',
                    id:'passwordC',
                    required:true
                },
                {
                    html:'<br><br<br>'
                },
                {
                    xtype:'button',
                    cls:'submit',
                    ui:'action',
                    text:'Submit',
                    id:'register'
                },
                {
                    xtype:'titlebar',
                    docked: 'bottom',
                    title:'Your Expectation, Our Inspiration!',
                    style: {
                        fontFamily:'hul'
                    },
                    height:'5%'

                }
            ]

    }
});