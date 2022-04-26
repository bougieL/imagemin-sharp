import sharp from "sharp";

export interface Options extends sharp.SharpOptions {
  chainSharp?: (sharp: sharp.Sharp) => sharp.Sharp | Promise<sharp.Sharp>;
}

const imageminSharp =
  (options: Options = {}) =>
  async (input: Buffer) => {
    const isBuffer = Buffer.isBuffer(input);

    if (!isBuffer) {
      return Promise.reject(
        new TypeError(`Expected a Buffer, got ${typeof input}`)
      );
    }

    const { chainSharp, ...restOptions } = options;
    const instance = sharp(input, restOptions);
    if (typeof chainSharp === "function") {
      const result = await chainSharp(instance)
      return result.toBuffer();
    }
    return instance.toBuffer();
  };

export default imageminSharp;
module.exports = imageminSharp;
