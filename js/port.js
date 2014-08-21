/**
 * @Author :  JChen(尹士勇)
 * @Email  :  1156546473@qq.com
 * @Date   :  2014/8/21
 * @Time   :  12:44
 * @Desc   :
 */
!(function() {
    var Data = window.Data = function() {
        this.url = 'http://flight.qunar.com/site/lplist.htm';
        this.data = {};
        this.init();
    };
    Data.prototype = {
        constructor: Data,
        init: function() {

        },
        getData: function(opt) {
            'http://flight.qunar.com/site/lplist.htm?dcity=&acity=&ddate=2014-08-22&drange=7&query=search&sort=S1&asc=true&page=1&from=tejia_d&ex_track=&searchType=domestic&per=40&perScrollPage=10'

            var opt = this.opt = $.extend({
                searchType : 'domestic',
                ddity         : '',
                acity         : '',
                ddate         : '',    //明天
                drange        : 7,
                query         : 'search',
                from          : 'tejia_d',
                type          : '',
                dweek         : '',
                dtime         : '',
                sort          : 'S1',
                asc           : true,
                dstep         : '',
                per           : 40,
                page          : 1,
                minp          : '',
                maxp          : '',
                ex_track      : '',
                perScrollPage : 10
            }, opt);

            var param = [],
                query;
            for(var key in opt){
                if(key == 'dcity' || key == 'acity') {
                    param.push(key + '=' + encodeURIComponent(opt[key]));
                }else{
                    param.push(key + '=' + opt[key]) ;
                }
            }
            query = '?' + param.join('&');

            this.url += query;

            var me = this;

            $.ajax({
                url: me.url,
                success: function(data) {
                    console.log(data);
                }
            });
        }
    }

})(jQuery);