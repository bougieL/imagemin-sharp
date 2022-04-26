# imagemin-sharp

Imagemin plugin for `sharp`

## Installation

```bash
npm install imagemin-sharp --save
```

## Usage

```ts
import imagemin from "imagemin";
import imageminSharp from "imagemin-sharp";

const files = await imagemin(["images/*.{jpg,png}"], {
  destination: "build/images",
  plugins: [
    imageminSharp({
      chainSharp: (sharp) => {
        return sharp.resize({ width: 100 }).rotate();
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
