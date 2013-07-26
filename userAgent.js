/**
 * User: areschen
 * Date: 13-7-26
 * Time: 11:07 am
 */


(function(exports){

	"use strict";

    var userAgent = function(){

        var ua = navigator.userAgent.toString().toLowerCase();
        var match = /(trident)(?:.*rv:([\w.]+))?/.exec(ua) ||
                    /(msie) ([\w.]+)/.exec(ua) ||
                    /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
                    /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec( ua ) ||
                    /(opera)(?:.*version)?[ \/]([\w.]+)/.exec( ua ) ||
                    /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) ||
                    ['','unkonwn','unkonwn'];

        if(match[1] == 'trident'){
            match[1] = 'msie';
        }
        var name = match[1],
            version = match[2].match(/(\w+.\w+)/)[0],
            version_complete = match[2];

        return  {
            ua : ua,
            name : name,
            version : version,
            version_complete : version_complete
        };
    }

    exports.userAgent = userAgent;

})(window);
