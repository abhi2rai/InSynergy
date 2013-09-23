/**
 * Created with JetBrains WebStorm.
 * User: abhishekrai
 * Date: 8/30/13
 * Time: 11:38 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InSynergy.view.EditPage',{
    extend:'Ext.Panel',
    requires:[
        'InSynergy.view.EditFields',
        'Ext.ActionSheet'
    ],
    id:'editpage',
    config:
    {

        layout: {
            type:'vbox'
        },
        scrollable:true,
        items:[
            {
                xtype:'titlebar',
                docked: 'top',
                title:'Edit Page',
                style: {
                    fontFamily:'hul',
                    fontSize:'40'
                },
                height:'10%',
                items: [
                    {
                        ui: 'back',
                        text:'Back',
                        style: {
                            fontFamily:'hul'
                        },
                        align: 'left',
                        listeners:{
                            'tap':function(){
                                Ext.Viewport.animateActiveItem(Ext.getCmp('assessment'), { type: 'slide', direction: 'right' });

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
                                                    Ext.Viewport.animateActiveItem(Ext.getCmp('assessment'), { type: 'slide', direction: 'right' });
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
                id:'editPanel'
            },
            {
                xtype:'mainPanel',
                id:'editHeader'
            },
            {
                xclass:'InSynergy.view.EditFields'
            },
            {
                html:'<br>'
            }
        ]
    }
});