const Stack = require('../classes/Stack');

// when adding something to the top push everything else down 1 level

describe('My Stack', () => {

  let stack;

  beforeEach(() => {
    stack = new Stack();
  });


  it('is created empty', () => {
    expect(stack.size).toBe(0);
    expect(stack.items).toEqual({});
  });

  it('can push to the top and keep track of whats underneath', () => {
    stack.push('grape');
    stack.push('avocado');

    expect(stack.size).toBe(2);
    expect(stack.peek()).toBe('avocado');
    expect(stack.next()).toBe('grape');
  });


  it('can pop off the top', () => {
    stack.push('grape');
    stack.push('sunshine');
    stack.push('avocado');
    stack.pop();

    expect(stack.peek()).toBe('sunshine')
  });


})