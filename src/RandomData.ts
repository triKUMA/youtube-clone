import Channel from "./Channel";
import VideoMetadata from "./VideoMetadata";

const videoMetadata: VideoMetadata[] = [
  {
    thumbnail: "",
    title: "",
    channel: {
      name: "",
      profileUrl: "",
      verified: false,
    },
    length: new Date(0, 0, 0, 0, 3, 47),
    views: 447000,
    age: new Date(),
  },
];

function getRand<T>(input: T[]): T {
  return input[Math.floor(Math.random() * input.length)];
}

function RandVideoMetadata() {
  return getRand(videoMetadata);
}

function RandThumbnail() {
  return getRand(videoMetadata).thumbnail;
}

function RandTitle() {
  return getRand(videoMetadata).title;
}

function RandChannel() {
  return getRand(videoMetadata).channel;
}

export { RandVideoMetadata, RandThumbnail, RandTitle, RandChannel };
