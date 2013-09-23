/**
 * Created with JetBrains WebStorm.
 * User: abhishekrai
 * Date: 8/17/13
 * Time: 10:30 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('TLGApp.view.Intro',{
    extend:'Ext.Container',
    requires:[
        'TLGApp.view.ImageGallery'
    ],
    id:'intro',
    fullscreen:true,
    layout: {
        type:'vbox',
        align:'middle'
    },
    defaults:
    {
        flex:1
    },
    items:
        [
            {
                xclass:'TLGApp.view.ImageGallery'
            } ,
            {
                html:'Hey There'
            }
        ]

})  ;
