# imagemin-sharp

Imagemin plugin for `sharp`

## Installation

```bash
npm install imagemin-sharp --save
```

## Usage

```js
import imagemin from "imagemin";
import imageminSharp from "imagemin-sharp";

const files = await imagemin(["images/*.{jpg,png}"], {
  destination: "build/images",
  plugins: [
    imageminSharp({
      chainSharp: async (sharp) => {
        const meta = await sharp.metadata();
        if (meta.width > 1000) {
          return sharp.flip().resize({ width: 1000 });
        }
        return sharp.flip();
      },
    }),
  ],
});

console.log(files);
```

## Options

Options is a union of `chainSharp` and `SharpOptions`

- `chainSharp`: A callback to chain operate sharp instance, return `Sharp | Promise<Sharp>`
- `SharpOptions`: Sharp constructor options, can referrer https://sharp.pixelplumbing.com/api-constructor

## Related

- [sharp](https://sharp.pixelplumbing.com/)
- [imagemin](https://github.com/imagemin/imagemin)

## License

[MIT](./LICENSE)
