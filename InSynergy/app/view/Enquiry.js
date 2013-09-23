/**
 * Created with JetBrains WebStorm.
 * User: abhishekrai
 * Date: 9/2/13
 * Time: 11:37 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InSynergy.view.Enquiry',{
    extend:'Ext.Panel',
    requires:['Ext.field.Email','Ext.field.Number'
    ],
    id:'enquiry',
    config:
    {

        layout: {
            type:'vbox'
        },
        scrollable:true,
        items:
            [
                {
                    xtype:'titlebar',
                    docked: 'top',
                    title:'Enquiry',
                    style: {
                        fontFamily:'hul',
                        fontSize:'40'
                    },
                    height:'10%',
                    items: [
                        {
                            ui: 'back',
                            text:'Home',
                            style: {
                                fontFamily:'hul'
                            },
                            align: 'left',
                            listeners:{
                                'tap':function(){
                                    Ext.Viewport.animateActiveItem(Ext.getCmp('welcome'), { type: 'slide', direction: 'right' });

                                }
                            }
                        },
                        {
                            ui: 'action',
                            text:'Done',
                            style: {
                                fontFamily:'hul'
                            },
                            align: 'right',
                            listeners:{
                                'tap':function(){
                                    var actionSheet = Ext.create('Ext.ActionSheet', {

                                        items: [
                                            {
                                                text: 'Confirm',
                                                style: {
                                                    fontFamily:'hul'
                                                },
                                                ui  : 'confirm',

                                                listeners:
                                                {
                                                    'tap':function(){
                                                        actionSheet.hide();
                                                        Ext.Viewport.animateActiveItem(Ext.getCmp('welcome'), { type: 'slide', direction: 'right' });
                                                    }
                                                }
                                            },

                                            {
                                                text: 'Cancel',
                                                style: {
                                                    fontFamily:'hul'
                                                },
                                                ui  : 'decline',

                                                listeners:
                                                {
                                                    'tap':function(){
                                                        actionSheet.hide();
                                                    }
                                                }
                                            }
                                        ]
                                    });
                                    actionSheet.show();

                                }
                            }
                        }
                    ]
                },
                {
                    xtype:'mainPanel',
                    id:'panelEnquiry'
                },
                {
                    xtype: 'textfield',
                    id:'compName',
                    label: 'Company Name',
                    labelWidth: '50%'
                },
                {
                    xtype: 'textfield',
                    id:'contactPerson',
                    label: 'Contact Person',
                    labelWidth: '50%'
                },
                {
                    xtype: 'emailfield',
                    id:'emailId',
                    label: 'Email ID',
                    labelWidth: '50%'
                },
                {
                    xtype: 'numberfield',
                    id:'mobNumber',
                    label: 'Mobile No.',
                    labelWidth: '50%'
                },
                {
                    xtype: 'textfield',
                    id:'fromPort',
                    label: 'From Port',
                    labelWidth: '50%'
                },
                {
                    xtype: 'textfield',
                    id:'toPort',
                    label: 'To Port',
                    labelWidth: '50%'
                },
                {
                    xtype: 'textfield',
                    id:'commodity',
                    label: 'Commodity',
                    labelWidth: '50%'
                },
                {
                    xtype: 'numberfield',
                    id:'wtKgs',
                    label: 'Weight',
                    labelWidth: '50%'
                },
                {
                    xtype: 'numberfield',
                    id:'pckgs',
                    label: 'Packages',
                    labelWidth: '50%'
                },
                {
                    xtype: 'textareafield',
                    label: 'Remarks',
                    id:'remarks',
                    labelWidth: '50%',
                    maxRows: 4
                }
            ]
    }

});