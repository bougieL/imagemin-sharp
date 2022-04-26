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
      chainSharp: await (sharp) => {
        const meta = await sharp.metadata()
        if (meta.width > 1000) {
          return sharp.resize({ width: 1000 })
        }
        return sharp
      },
    }),
  ],
});

console.log(files);
```

## Related

- [sharp](https://sharp.pixelplumbing.com/)
- [imagemin](https://github.com/imagemin/imagemin)

## License

[MIT](./LICENSE)
