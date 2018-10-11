(function() {
    var api = {};
    var pixelId = null;
    var data = {};

    api.init = function(pId) {
        pixelId = pId;
    };

    api.setData = function(param){
        data = param;
    };


    api.toQueryString = function() {
        var s = [];
        Object.keys(data).forEach(function(key) {
            s.push(key + "=" + encodeURIComponent(data[key]));
        });
        return s.join("&");
    };

    api.send = function() {
        var pixel = document.createElement("img");
        var queryParams = api.toQueryString();
        pixel.src = "/onepixelgif?"+ queryParams;

        if(document.body) document.body.appendChild(pixel);
        else{
            document.addEventListener('DOMContentLoaded', function () {
                document.body.appendChild(pixel);
            });
        }
    };

    // pull functions off of the global queue and execute them
    var execute = function() {
        // while the global queue is not empty, remove the first element and execute the
        // function with the parameter it provides
        // (assuming that the queued element is a 2 element list of the form
        // [function, parameters])

        if(window.arPixel.q.length > 0){
            var command = window.arPixel.q.shift();
            var func = command[0];
            var parameters = command[1];
            if (typeof api[func] === 'function') {
                api[func].call(window, parameters);
            } else {
                console.error("Invalid function specified: " + func);
            }
            execute();
        }
    };

    execute();
})();
