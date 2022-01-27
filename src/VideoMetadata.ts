import { TimeLike } from "fs";
import Channel from "./Channel";

export default interface VideoMetadata {
  thumbnail: string;
  title: string;
  channel: Channel;
  length: Date;
  views: number;
  age: Date;
}
