'use strict';

/**
 * A set of functions called "actions" for `Certificates`
 */

module.exports = {
  index: async (ctx) => {
    ctx.send({
      certificates: [
        {
          title: 'Sehtest',
          frenquence: 3,
          "id": 1
        },
        {
          title: 'Hörtest',
          frenquence: 4,
          "id": 2
        },
        {
          title: 'Streckenkunde',
          frenquence: 1,
          "id": 3
        }
      ]
    });
  }
};
