import { MusicInfoIconList } from "@components/Detail";
import "./MusicInfo.scss";

const MusicInfo = () => {
  return (
    <div className="music-info-wrapper fc-white mont">
      <div className="icons-container">
        <MusicInfoIconList />
      </div>
      <div className="music-info-description">
        <h1 className="music-info-description__title fs-36 w-600 inline-block">
          Ashes
        </h1>
        <h2 className="music-info-description__singer fs-18 inline-block">
          stellar
        </h2>
        <pre className="music-info-description__lyrics fs-22 mont-alt">
          {`Now that I got a taste
I think that I'd suffocate
For every secondthat you aren't by my side
But now I'm stuck at the gate 
Of Lucifer's estate
I fell in love with a girl I met in Hell

Thinking about all the things
The way you pull my strings
I love the way you turn me on
I ain't Hades, but I'm the King
I'd do anything
So that I could take you home

Thinking about all the things
The way you pull my strings
I love the way you turn me on
I ain't Hades, but I'm the King
I'd do anything
So that I could take you home
`}
        </pre>
      </div>
    </div>
  );
};

export default MusicInfo;
