const greeting = require('./greeting')

describe("greeting", () => {
    test('simple greeting', () => {
        expect(greeting('Bob')).toBe("Hello, Bob.");
    });

    test('default greeting', () => {
        expect(greeting()).toBe("Hello, my friend.");
    });

    test('shouting', () => {
        expect(greeting("JERRY")).toBe("HELLO JERRY!");
    });

    test('two names', () => {
        expect(greeting(["Jill", "Jack"])).toBe("Hello, Jill and Jack.");
    });

    test('multiple names', () => {
        expect(greeting(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
    });
})
