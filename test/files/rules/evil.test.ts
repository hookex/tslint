var testVariable = "eval";

function a() {
    function b() {
        function c() {
            eval("console.log('hi');");
        }
    }
}
