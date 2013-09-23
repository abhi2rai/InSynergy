/**
 * Created with JetBrains WebStorm.
 * User: abhishekrai
 * Date: 8/27/13
 * Time: 11:00 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InSynergy.controller.assessController', {
    extend: 'Ext.app.Controller',
    requires:['InSynergy.view.Assessment','InSynergy.view.Enquiry'],
    config:{
        control:{
            '#assess':{
                tap: 'assessPanel'
            } ,
            '#enquire':{
                tap: 'enquireHeader'

            }
        }
    } ,
    assessPanel:function()
    {
        if(Ext.getCmp('assessment' )== undefined)
        {
            Ext.Viewport.animateActiveItem({xclass:'InSynergy.view.Assessment'}, { type: 'slide', direction: 'left' });
        }
        else
        {
            Ext.Viewport.animateActiveItem(Ext.getCmp('assessment'), { type: 'slide', direction: 'left' });
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
        var panel =  Ext.getCmp('countPanel');
        panel.removeAll();
        panel.add(
            {
                html:['<table style="width:100%;border: 1px solid;background-color: #15467D;color:#FFFFFF;font-family: hul"><tr>'+
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
    },
    enquireHeader:function()
    {
        if(Ext.getCmp('enquiry' )== undefined)
        {
            Ext.Viewport.animateActiveItem({xclass:'InSynergy.view.Enquiry'}, { type: 'slide', direction: 'left' });
        }
        else
        {
            Ext.Viewport.animateActiveItem(Ext.getCmp('enquiry'), { type: 'slide', direction: 'left' });
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
        var panel =  Ext.getCmp('panelEnquiry');
        panel.removeAll();
        panel.add(
            {
                html:['<table style="width:100%;border: 1px solid;background-color: #15467D;color:#FFFFFF;font-family: hul"><tr>'+
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
    }


});