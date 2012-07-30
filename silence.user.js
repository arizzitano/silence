// ==UserScript==
// @name				Silence
// @description	Hides comments.

// ==/UserScript==

(function() {
    var safeDomains =   [
                            'jquery.com'
                        ],
        containers =    [
                            '#disqus_thread', 
                            'fb:comments',
                            '#echo_container_a', // washpo
                            '.comments_block_holder', // huffpo
                            '#ugccmt-container' // yahoo
                        ],
                        i, j, t, elem, type;

    function main() {
        for (i=0; i<safeDomains.length; i++) {
            if (document.domain.indexOf(safeDomains[i]) == -1) {
                for (i=0; i<containers.length; i++) {
                    type = containers[i].charAt(0);
                    if (type === '#') {
                        elem = document.getElementById(containers[i].substr(1));
                    } else if (type === '.') {
                        elem = document.getElementsByClassName(containers[i].substr(1))[0];
                    } else {
                        elem = document.getElementsByTagName(containers[i])[0];
                    }
                    if (elem) {
                        remove(elem);
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