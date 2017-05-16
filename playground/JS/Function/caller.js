function f(n) {
    g(n - 1);
}

function g(n) {
    if (n > 0) {
        f(n);
    } else {
        stop();
    }
}
f(2);