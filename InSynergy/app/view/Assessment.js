/**
 * Created with JetBrains WebStorm.
 * User: abhishekrai
 * Date: 8/27/13
 * Time: 10:54 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains WebStorm.
 * User: abhishekrai
 * Date: 8/27/13
 * Time: 12:10 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InSynergy.view.Assessment',{
    extend:'Ext.Panel',
    requires:[
        'InSynergy.view.CountPanel',
        'InSynergy.view.EditPage'
    ],
    id:'assessment',
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
                    title:'Assessment',
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
                        }
                    ]
                },
                {
                    xclass:'InSynergy.view.CountPanel'

                },
                {
                    html:['<table style="width:100%;border: 1px solid;background-color: #15467D;color:#FFFFFF;font-family: hul">' +
                        '<tr style="width:100%"><td style="width:33%">BE No.</td>'+
                        '<td style="width:33%">Importers Name</td>'+
                        '<td style="width:33%" align="center">F/S</td>'+
                        '</tr>'+
                        '</table>'].join("")
                },
                {
                    xtype:'list',
                    id:'clientlist',
                    width:'100%',
                    height:'75%',
                    scrollable:true,
                    itemTpl: Ext.create('Ext.XTemplate',
                '<div style="float:left; width: 40%">{BE}</div>',
                '<div style="float:left; width: 40%">{Importers}</div>',
                '<div style="float:left; width: 20%">{FS}</div>',
                '<div style="clear:both"></div>'
                        ),
                    data: [
                        { BE: '1',Importers:'Arun',FS:'1' },
                        { BE: '2',Importers:'Anu',FS:'2' },
                        { BE: '3',Importers:'Aku',FS:'3' },
                        { BE: '4',Importers:'AB',FS:'4' }

                    ],
                    listeners:{
                        itemsingletap:function(list, idx, target, record, evt){

                            if(Ext.getCmp('editpage' )== undefined)
                            {
                                Ext.Viewport.animateActiveItem({xclass:'InSynergy.view.EditPage'}, { type: 'slide', direction: 'left' });
                            }
                            else
                            {
                                Ext.Viewport.animateActiveItem(Ext.getCmp('editpage'), { type: 'slide', direction: 'left' });
                            }
                            var pos;
                            var obj = JSON.parse(localStorage.UserData);
                            for(var i =0 ;i<obj.length ;i ++)
                            {
                                if(obj[i].clientId == globalId)
                                {
                                    pos = i;
                                }
                            }
                            var panel =  Ext.getCmp('editPanel');
                            var panel2 =  Ext.getCmp('editHeader');
                            panel2.removeAll();
                            panel.removeAll();
                            panel.add(
                                {
                                    html:['<table style="width:100%;border: 1px solid;background-color: #15467D;color:#FFFFFF;font-family: hul;"><tr>'+
                                        '<td style="width: 50%"><div>' +
                                        '<div align="left" class="panell">Total:<br>'+obj[pos].count+'</div>' +
                                        '</td><td style="width:50%">'+
                                        '<div align="right" class="panelr">Todays Filing: '+obj[pos].today+'</div>' +
                                        '<div align="right" class="panelr">Files Under FC: '+obj[pos].fc+'</div>'+
                                        '<div align="right" class="panelr">Files Under SC: '+obj[pos].sc+'</div>'+
                                        '</div></td></tr>' +
                                        '</table>'].join("")
                                }
                            );
                            panel2.add(
                                {
                                    html:['<table style="width:100%;border: 1px solid;background-color: #15467D;color:#FFFFFF;font-family: hul"><tr>'+
                                        '<td style="width: 50%"><div>' +
                                        '<div align="left" class="panell">Name: '+record.data.Importers+'</div>' +
                                        '<div align="left" class="panell">BE No.: '+record.data.BE+'</div>' +
                                        '<div align="left" class="panell">Goods: BLAH</div>'+
                                        '</td><td style="width:50%">'+
                                        '<div align="right" class="panelr">Gross Weight: BLAH</div>' +
                                        '<div align="right" class="panelr">Present Status: BLAH</div>'+
                                        '<div align="right" class="panelr">Packages: 2</div>'+
                                        '</div></td></tr>' +
                                        '</table>'].join("")
                                }
                            );
                        }
                    }
                }


            ]
    }
});