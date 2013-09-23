/**
 * Created with JetBrains WebStorm.
 * User: abhishekrai
 * Date: 8/31/13
 * Time: 12:04 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InSynergy.view.EditFields',{
    extend:'Ext.Panel',
    requires:[
        'Ext.field.Toggle'
    ],
    id:'editfields',
    config:
    {

        layout: {
            type:'vbox'
        },


        items:[
            {
                xtype: 'textfield',
                id:'dutyamount',
                label: 'Duty Amount',
                labelWidth: '50%'
            },
            {
                xtype: 'togglefield',
                id: 'rms',
                label: 'Assessed in RMS',
                labelWidth: '50%'
            },
            {
                xtype: 'togglefield',
                id: 'check',
                label: 'Under First Check',
                labelWidth: '50%'
            },
            {
                xtype: 'togglefield',
                id: 'final',
                label: 'Final Assessed',
                labelWidth: '50%'
            },
            {
                xtype: 'togglefield',
                id: 'prov',
                label: 'Prov Assessed',
                labelWidth: '50%'
            },
            {
                xtype: 'togglefield',
                id: 'duty',
                label: 'Duty Changed',
                labelWidth: '50%'
            }

        ]
    }
});