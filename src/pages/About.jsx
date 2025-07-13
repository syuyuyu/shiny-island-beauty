import GoogleMap from "../components/GoogleMap";
import MapWrap from "../components/MapWrap";

// 關於
const About = () => {
  return(
    <article>
      <section>
        <div className="flex flex-col items-center justify-center w-[85%] max-w-[700px] h-auto mx-auto
        gap-[30px] text-[1.1rem] ">
          <p>每個人都有屬於自己閃閃發亮的地方</p>
          <p>而這裡，就是為了讓你的光芒被看見、盡情綻放的小島</p>
          <div className="about-item flex mo-column gap-[10px]">
            <p>
              半永久霧眉
            </p>
            <p>
              半永久霧唇
            </p>
            <p>
              皮膚做臉
            </p>
            <p>
              眉唇淡色
            </p>
            <p>
              美甲
            </p>
            <p>
              修眉
            </p>

          </div>
        <div className="flex flex-col gap-[10px]">
          <p>
            <span className="align-sub">* </span>
            國家美容技術證照丙
          </p>
          <p>
            <span className="align-sub">* </span>
            全採一對一服務
          </p>
          <p>
            <span className="align-sub">* </span>
            營業時間10:00~21:00 (週一公休)
          </p>
          <p>
            <span className="align-sub">* </span>
            台中市南區工學路126巷21號
          </p>
        </div>
        </div>
      </section>
      
    </article>
  )
};

export default About;