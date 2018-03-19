(function() {
    'use strict'

    class Greeting {
        constructor(word) {
            this.msg = word;
        }

        helloworld() {
            console.log(this.msg);
        }
    }

    var gree = new Greeting("hello world");
    gree.helloworld();

})();
