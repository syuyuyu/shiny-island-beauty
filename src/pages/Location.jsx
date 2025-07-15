import GoogleMap from "../components/GoogleMap";
import MapWrap from "../components/MapWrap";

// 地點
const Location = () => {
  return(
 <article>
      {/* map */}
      {/* 我們在哪裡? */}
      <MapWrap />

      {/* 地圖參考 */}
      <GoogleMap />

    </article>
  )
};

export default Location;
