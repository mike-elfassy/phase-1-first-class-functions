const receivesAFunction = cb => cb();

const returnsANamedFunction = () => {
    return function aNamedFunction() {return 'I am a named function'};
};

const returnsAnAnonymousFunction = () => {
    return function() {'I am an anonymous function'};
};