/**
 * Created with JetBrains WebStorm.
 * User: abhishekrai
 * Date: 8/17/13
 * Time: 10:33 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('TLGApp.view.ImageGallery',{
    extend:'Ext.Carousel',
    id:'imageGallery',
    items:
        [
            {
                html:'<img src="http://www.lashhaven.com.au/images/bigeyelash.jpg">'
            },
            {
                html:'<img src="http://www.lashhaven.com.au/images/bigeyelash.jpg">'
            }
        ]
});