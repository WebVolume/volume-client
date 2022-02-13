import DummyAlbumArt from "@images/dummys/dummy-album-art-big.png";
import "./RecommendationListItem.scss";

function RecommendationListItem() {
  return (
    <div className="recommendation-list-item">
      <img className="album-art" src={DummyAlbumArt} alt="앨범 아트" />

      <div className="album-info">
        <p className="album-info--title mont-alt w-500">Dummy Title</p>
        <p className="album-info--artist fs-14 mont-alt w-400">Dummy Artist</p>
      </div>
    </div>
  );
}

export default RecommendationListItem;
