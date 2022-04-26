const sharp = require("sharp");
const isStream = require("is-stream");

/**
 * @param {import('sharp').SharpOptions & { chainSharp?: (sharp: import('sharp').Sharp) => import('sharp').Sharp }} options
 */
const imageminSharp =
  (options = {}) =>
  async (input) => {
    const isBuffer = Buffer.isBuffer(input);

    if (!isBuffer && !isStream(input)) {
      return Promise.reject(
        new TypeError(`Expected a Buffer or Stream, got ${typeof input}`)
      );
    }

    const { chainSharp, ...restOptions } = options;
    const instance = sharp(input, restOptions);
    if (typeof chainSharp === "function") {
      return chainSharp(instance).toBuffer();
    }
    return instance.toBuffer();
  };

module.exports = imageminSharp;
