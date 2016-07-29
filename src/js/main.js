require.config({
    paths: {
        /*jQuery*/
        "jquery": "lib/jquery.min",
        /*公共JS*/
        "common": "common/common",
        /* 主页模块 */ 
        "homeCtrl": "modHome/homeCtrl",
        /* 列表模块 */ 
        "listCtrl": "modList/listCtrl",
        /* 详情页模块 */ 
        "detailCtrl": "modDetail/detailCtrl"
    }
});
require(['homeCtrl', 'listCtrl', 'detailCtrl'], function (homeCtrl, listCtrl, detailCtrl) {
    /* 首页初始化 */
    homeCtrl.init();
    /* 列表初始化 */
    listCtrl.init();
    /* 详情页初始化 */
    detailCtrl.init();
});