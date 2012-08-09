// ==UserScript==
// @name				Silence
// @description	        Hides comments.

// ==/UserScript==

(function() {
    var safeDomains =   [
                            'jquery.com'
                        ],
        containers =    '#disqus_thread, ' +
                        'fb\\:comments, ' + // esc : for css selector
                        '.comments_block_holder, ' + // huffpo
                        '#ugccmt-container', // yahoo
                        i, j, t, elem, type;

    function main() {
        for (i=0; i<safeDomains.length; i++) {
            if (document.domain.indexOf(safeDomains[i]) == -1) {
                elem = document.querySelectorAll(containers);
                if (elem.length) {
                    for (j=0; j<elem.length; j++) {
                        remove(elem[j]);
                    }
                }
            }
        }
    }
    
    function remove(element) {
        element.parentNode.removeChild(element);
    }
    
    window.onload = function() {
        main();
    }
})();