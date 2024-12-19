function main() {
    var x;
    function bigSub() {
        var a, b, c;

        function sub1() {
            var a, d;
            a = b + c; <------------1
        }

        function sub2(x) {
            var b, e;

            function sub3() {
                var c, e;
                sub1();
                e = b + a; <--------2
            }

            sub3();
            a = d + e; <------------3
        }

        sub2(7);
    }

    bigSub();
}
