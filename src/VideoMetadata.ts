import Channel from "./Channel";

export default interface VideoMetadata {
  thumbnail: string;
  title: string;
  channel: Channel;
  uploaded: Date;
  length: Date;
  views: number;
}
