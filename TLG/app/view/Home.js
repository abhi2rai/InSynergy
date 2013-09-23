/**
 * Created with JetBrains WebStorm.
 * User: abhishekrai
 * Date: 8/17/13
 * Time: 9:58 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('TLGApp.view.Home',{
    extend:'Ext.tab.Panel',
    id:'home',
    requires:[
        'TLGApp.view.Intro'
    ],
    config:{
        fullscreen: true,
        tabBarPosition: 'bottom',

    items:
        [
            {
                title: 'Home',
                iconCls: 'home',
                xtype:'panel',
                layout: {
                    type:'vbox'
                },

                items:
                    [
                        {
                            xtype: 'titlebar',
                            docked: 'top',
                            title: 'The Lash Gallery'
                        },
                        {
                            html:'<center>Rochelle Magno</center>'+
                                '<center>Address: 207 5th Street Jersey City</center>'+
                                '<center>Phone: 201-201-201</center>'+
                                '<center>E-Mail: rochellemagno@gmail.com</center>',
                            flex:1
                        },
                        {
                            flex:2,
                            xtype:'carousel',
                            style:'margin-left:15%;margin-right:15%;margin-bottom:15%',
                            align:'middle',
                            items:
                                [
                                    {
                                        html : '<center><img width=75% height=100% src="http://www.lashhaven.com.au/images/bigeyelash.jpg"></center>'

                                    },
                                    {
                                        html : '<center><img width=75% height=100% src="http://cleanslatewaxing.com/wp-content/uploads/2011/08/eyelash-extensions.jpg"></center>'

                                    },
                                    {
                                        html : '<center><img width=75% height=100% src="http://cleanslatewaxing.com/wp-content/uploads/2011/08/eyelash-extensions.jpg"></center>'

                                    },
                                    {
                                        html : '<center><img width=75% height=100% src="http://cleanslatewaxing.com/wp-content/uploads/2011/08/eyelash-extensions.jpg"></center>'

                                    }
                                ]
                        }

                    ]

            },
            {
                title: 'Appointments',
                iconCls: 'team',
                xtype:'panel',
                layout: {
                    type:'vbox'
                },
                items:
                    [
                        {   xtype: 'titlebar',
                            docked: 'top',
                            title: 'Appointments'

                        },
                        {
                            xtype: 'togglefield',
                            name: 'Customer',
                            label: 'Are you a New Customer?',
                            labelWidth: '75%'
                        } ,
                        {
                            xtype: 'textfield',
                            label: 'Name',
                            name: 'name'

                        },
                        {
                            xtype: 'selectfield',
                            label: 'Choose',
                            options: [
                                {text: 'Lash Style 1',  value: 'first'},
                                {text: 'Lash Style 2', value: 'second'},
                                {text: 'Lash Style 3',  value: 'third'}
                            ]
                        },
                        {
                            xtype: 'datepickerfield',
                            label: 'Date',
                            name: 'birthday',
                            value: new Date()
                        },
                        {
                            xtype: 'selectfield',
                            label: 'Time',
                            options: [
                                {text: '9 am',  value: 'first'},
                                {text: '10 am', value: 'second'},
                                {text: '11 am',  value: 'third'}
                            ]
                        },
                        {
                            html:'<br>'
                        },
                        {
                            xtype: 'button',
                            text:'Submit',
                            style:'margin-left:25%;margin-right:25%',
                            listeners:
                            {
                                'tap':function(){
                                    var actionSheet = Ext.create('Ext.ActionSheet', {

                                        items: [
                                            {
                                                text: 'Confirm',
                                                ui  : 'confirm',

                                                listeners:
                                                {
                                                    'tap':function(){
                                                        actionSheet.hide();
                                                    }
                                                }
                                            },

                                            {
                                                text: 'Cancel',
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
                title: 'Contact',
                iconCls: 'user',
                xtype:'panel',
                layout: {
                    type:'vbox'
                },
                items:
                    [
                        {
                            xtype: 'titlebar',
                            docked: 'top',
                            title: 'Contact Us'
                        },
                        {

                            html: '<center>Rochelle Magno</center>'+
                                '<center>Address: 207 5th Street Jersey City</center>'+
                                '<center>Phone: 201-201-201</center>'+
                                '<center>E-Mail: rochellemagno@gmail.com</center>'
                        } ,
                        {

                            html:'<center><iframe width="300" height="240" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=207+5th+St,+Jersey+City,+NJ&amp;aq=&amp;sll=37.6,-95.665&amp;sspn=49.958574,93.076172&amp;ie=UTF8&amp;hq=&amp;hnear=207+5th+St,+Jersey+City,+Hudson,+New+Jersey+07302&amp;ll=40.724446,-74.043032&amp;spn=0.011839,0.022724&amp;t=m&amp;z=14&amp;layer=c&amp;cbll=40.724562,-74.043048&amp;panoid=i_xRGTt30VCS2dq5x3UeMg&amp;cbp=12,174.03,,0,0&amp;output=svembed"></iframe><br /><small><a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=207+5th+St,+Jersey+City,+NJ&amp;aq=&amp;sll=37.6,-95.665&amp;sspn=49.958574,93.076172&amp;ie=UTF8&amp;hq=&amp;hnear=207+5th+St,+Jersey+City,+Hudson,+New+Jersey+07302&amp;ll=40.724446,-74.043032&amp;spn=0.011839,0.022724&amp;t=m&amp;z=14&amp;layer=c&amp;cbll=40.724562,-74.043048&amp;panoid=i_xRGTt30VCS2dq5x3UeMg&amp;cbp=12,174.03,,0,0" style="color:#0000FF;text-align:left">View Larger Map</a></small></center>'
                        }
                    ]

            }
        ]
    }
})  ;