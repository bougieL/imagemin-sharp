import type { Sharp, SharpOptions } from "sharp";

export type Plugin = (input: Buffer | NodeJS.ReadableStream) => Promise<Buffer>;

export default function imageminSharp(
  options?: SharpOptions & { chainSharp?: (sharp: Sharp) => Sharp }
): Plugin;
