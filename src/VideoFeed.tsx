import { useEffect, useState } from "react";
import FeedBanner from "./FeedBanner";
import Video from "./Video";
import "./VideoFeed.css";
import VideoGroup from "./VideoGroup";
import Channel from "./Channel";

function VideoFeed() {
  const [videoColumns, setVideoColumns] = useState(getVideoColumnsAmt());

  function getVideoColumnsAmt(): number {
    let columnsAmt = 5;
    if (window.innerWidth <= 495) {
      columnsAmt = 1;
    } else if (window.innerWidth <= 870) {
      columnsAmt = 2;
    } else if (window.innerWidth <= 1130) {
      columnsAmt = 3;
    } else if (window.innerWidth <= 1950) {
      columnsAmt = 4;
    }

    document.documentElement.style.setProperty(
      "--video-columns",
      columnsAmt.toString()
    );

    return columnsAmt;
  }

  // useEffect(() => {
  //   setVideoColumns(getVideoColumnsAmt());
  // }, [window.innerWidth]);

  window.addEventListener("resize", () => {
    setVideoColumns(getVideoColumnsAmt());
  });

  const thumbnails: string[] = [
    "https://i.ytimg.com/vi/nj3ZeKkQ49w/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmAl5qWZh8yg2DtZlzpBRGA4WhuQ",
    "https://i.ytimg.com/vi/iu3tThEql7U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFR6_SYc9WHNzdJuYB5by9TWDW4Q",
    "https://i.ytimg.com/vi/LDtmqqajwag/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRxssfAlm6cbA-hAZCjxxDASb-cw",
    "https://i.ytimg.com/vi/6WXKyyFwQmk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcc2WFrZos3yYWo-Wi4MiRHrrW-g",
    "https://i.ytimg.com/vi/fUXQQbh8N6o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBD1mxLnSjl1InZVuYEKSg1RFPnIQ",
    "https://i.ytimg.com/vi/xqi-9zXx03Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDo9t4CuqlNKrAaVy6ZgAC0r5DdXQ",
    "https://i.ytimg.com/vi/otIAxfJ0UTc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQjme6COOfrRTDB4H4OqbjIsx90g",
    "https://i.ytimg.com/vi/ozdmU2g_ui4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAx_AWLIvcLvwCx7zg7Q2pLH4_vqw",
    "https://i.ytimg.com/vi/drVQdw6oQ6U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4tAtWsDw8oH49VC7PP7y6UgOYQw",
    "https://i.ytimg.com/vi/ooqdg9Wr-mo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEfvQsokLE9P7OaDJ4C4IFTU7d1g",
    "https://i.ytimg.com/vi/RvMt-sShni0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxnV7PQlYsnzBy1GqFzkWol1RvVQ",
    "https://i.ytimg.com/vi/9esCA8_EPeY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOLZY3m5II2crMbMH_0y61X8nY9w",
    "https://i.ytimg.com/vi/eVUVTV-ez74/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPIN6sR81nbG-8iqmCPsNlWu1x9Q",
    "https://i.ytimg.com/vi/SAK117AmzSE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzA7o1ikGi_yDlaimIxpWRMlkVNA",
  ];

  const titles: string[] = [
    "KSI Moving Mad",
    "What Happens If You Hire 50 Bodyguards?",
    "Wayne Rooney ignores Paul Pogba in the tunnel",
    "Best Moments of 2021!",
    "EPIC REACTIONS TO ARNOLD SCHWARZENEGGER WORKING OUT IN PUBLIC 😱",
    "Victoria Police officer charged with assault | 9 News Australia",
    "Steph Curry, Kevin Durant Play Epic Game of P-I-G",
    "Penny's Best Moments! | The Big Bang Theory",
    "We Don't Talk About Apple Bottom Jeans",
    "World's Most Expensive Food!",
    "Best UFC Knockouts of 2021",
    "Iron Man Takes Spider-Man's Suit Scene - Spider-Man: Homecoming (2017) Movie CLIP HD",
    "Top 20 NEW Open World Games of 2022",
    "Can Otters See Optical Illusions? | Indoor Sinkhole",
  ];

  const channels: Channel[] = [
    {
      name: "Sidemen Clips",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AKedOLSdZNvsPAwtAUyVtPTBWY4mXoaX-fiJS7AJNaA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Airrack",
      profileUrl:
        "https://yt3.ggpht.com/uUfOrEH3ZGDTadl_LVSJlBSQrjZ96CMbIZMUtUeqJhHvgM7xcykdgysscHTd3XALYPVLHelmKg=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Sky Sports Retro",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AKedOLTA4j_cyj40oCe_kb3P3Y_yHrSOwXjAFk0AUcF6sw=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "JayPrehistoricPets",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AKedOLTPMILcmAlWWia5iKSVWMLSUID1TasA9ZlEyhwGAA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Aesthetic World",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AKedOLR9B8n64kMvfcWz_J3u9MQPBOo93gw1vA857vRPWQ=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "9 News Australia",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AKedOLQJSITBthUulcMNh0zNcaf6F_7QYi23KrqU5_pYJg=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Bleacher Report",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AKedOLScwlqY4iJCtTqEmEn0_57ewz-mfJCRFMbK-xVU=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Warner Bros. TV",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AKedOLQyODnahEQYdeI4RIho-O6sjfOALCw_MHAWa5dbfQ=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Sawtooth Memes",
      profileUrl:
        "https://yt3.ggpht.com/9tpb-_WmbWPyOO5WdJ2ZPegQpJEm_nhtBItOhW8HneZ5qSFYJT5eG_6_GBPx4OjMk33dhC-uO4Y=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Beast Reacts",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AKedOLREDyzQ-3o32vvhe7W0Iq2miFl7FOpLYIKHKq9_8A=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "BoxingvideoZ",
      profileUrl:
        "https://yt3.ggpht.com/Qiy476WIAHgd7w_XyjvvNNjlnk14lh1_lnePJhPTVN7vr9UfLUIkQSbuGe0bC5TSozPBIzaFEg=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "TopMovieClips",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AKedOLSsdk9Oc0v0rq7nrprpm5xNsto2iMx7G-J-ducejA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "gameranx",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AKedOLRjW77DzAQyGuXfC6Rgd2gh1zfckc5uJzKT_-fK=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "KOTSUMET",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AKedOLS7vuZ0iVKmDuo_azmnI3TfI4uxO54axiX0_vsycw=s68-c-k-c0x00ffffff-no-rj",
    },
  ];

  function getRand<T>(input: T[]): T {
    return input[Math.floor(Math.random() * input.length)];
  }

  return (
    <div className="videoFeed">
      <VideoGroup>
        {[...Array(2 * videoColumns)].map((value: undefined, index: number) => (
          <Video
            thumbnail={getRand(thumbnails)}
            title={getRand(titles)}
            channel={getRand(channels)}
            verified={Math.random() < 0.4}
          />
        ))}
      </VideoGroup>
      <VideoGroup title="Trending" initial={[1, videoColumns]}>
        {[...Array(3 * videoColumns)].map((value: undefined, index: number) => (
          <Video
            thumbnail={getRand(thumbnails)}
            title={getRand(titles)}
            channel={getRand(channels)}
            verified={Math.random() < 0.4}
          />
        ))}
      </VideoGroup>
      <VideoGroup>
        {[...Array(3 * videoColumns)].map((value: undefined, index: number) => (
          <Video
            thumbnail={getRand(thumbnails)}
            title={getRand(titles)}
            channel={getRand(channels)}
            verified={Math.random() < 0.4}
          />
        ))}
      </VideoGroup>
      <VideoGroup title="COVID-19 news" initial={[1, videoColumns]}>
        {[...Array(1 * videoColumns)].map((value: undefined, index: number) => (
          <Video
            thumbnail={getRand(thumbnails)}
            title={getRand(titles)}
            channel={getRand(channels)}
            verified={Math.random() < 0.4}
          />
        ))}
      </VideoGroup>
      <VideoGroup>
        {[...Array(3 * videoColumns)].map((value: undefined, index: number) => (
          <Video
            thumbnail={getRand(thumbnails)}
            title={getRand(titles)}
            channel={getRand(channels)}
            verified={Math.random() < 0.4}
          />
        ))}
      </VideoGroup>
      {videoColumns >= 4 && (
        <FeedBanner
          imgSrc="https://www.gstatic.com/youtube/img/promos/growth/24130705fcdd89c3d8453b2253b97e4ec8ee91660021ac874249f99ab7e2f015_480x270.png"
          title="Trending this month: Creators you can't miss"
          desc="Check out up-and-coming creators in our new monthly playlist"
          cta="Explore Now"
          darkVariant
        />
      )}
      <VideoGroup>
        {[...Array(6 * videoColumns)].map((value: undefined, index: number) => (
          <Video
            thumbnail={getRand(thumbnails)}
            title={getRand(titles)}
            channel={getRand(channels)}
            verified={Math.random() < 0.4}
          />
        ))}
      </VideoGroup>
      {videoColumns >= 4 && (
        <FeedBanner
          imgSrc="https://www.gstatic.com/youtube/img/promos/growth/de0fdfa3872e7bcb579ee98472aa76e8166046950ef7c0d7887a7de7534949ba_480x270.png"
          title="Making YouTube Safer"
          desc="We are committed to creating a responsible platform. Our products and policies help protect our community from harmful content."
          cta="Learn More"
        />
      )}
      <VideoGroup>
        {[...Array(4 * videoColumns)].map((value: undefined, index: number) => (
          <Video
            thumbnail={getRand(thumbnails)}
            title={getRand(titles)}
            channel={getRand(channels)}
            verified={Math.random() < 0.4}
          />
        ))}
      </VideoGroup>
    </div>
  );
}

export default VideoFeed;
