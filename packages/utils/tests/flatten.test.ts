import { flatten } from '../src/flatten';

describe('flatten', () => {
  it('should flatten an object correctly', () => {
    const object = { colors: { red: { 500: '#ff0000' } } };

    const flatResult = flatten(object, 1);
    expect(flatResult).toMatchInlineSnapshot(`
      Object {
        "colors.red": Object {
          "500": "#ff0000",
        },
      }
    `);
  });
  it('should flatten an array correctly', () => {
    const array = {
      space: [0, 1, 2, 4, 8, 16, 32],
    };

    const flatResult = flatten(array, 1);
    expect(flatResult).toMatchInlineSnapshot(`
      Object {
        "space.0": 0,
        "space.1": 1,
        "space.2": 2,
        "space.3": 4,
        "space.4": 8,
        "space.5": 16,
        "space.6": 32,
      }
    `);
  });
});
