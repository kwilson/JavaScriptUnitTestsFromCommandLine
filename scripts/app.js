(function (window, undefined) {

    var addFive = function (number) {
        return number + 5;
    };

    var addSix = function (number) {
        return number + 5;
    };

    var addSeven = function (number) {
        return number + 7;
    };

    var publicApi = {
        addFive: addFive,
        addSix: addSix,
        addSeven: addSeven
    };

    window.calculator = publicApi;

})(window);