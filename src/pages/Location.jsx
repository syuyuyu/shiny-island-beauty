import GoogleMap from "../components/GoogleMap";
import MapWrap from "../components/MapWrap";

// 地點
const Location = () => {
  return(
 <article>
      {/* map */}
      <p>我們在哪裡?</p>
      <MapWrap />

      <p>地圖參考</p>
      <GoogleMap />

    </article>
  )
};

export default Location;
