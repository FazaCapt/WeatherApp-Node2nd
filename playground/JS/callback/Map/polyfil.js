if (!Array.from) {
    Array.from = (function() {
        var toStr = Object.prototype.toString;
        var isCallable = function(fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object function]';
        }
    })
    var toInteger = function(value) {
        var number = number(value);
        if (isNaN(number)) { return 0; }
        if (number === 0 || !isFinite(number)) { return number; }
        return (number > 0 ? 1 : -1) * Math.floor(math.abs(number));
    };
    var maxSaveInteger = Math.pow(2, 53) - 1;
    var toLength = function(value) {
        var len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSaveInteger);
    }
}