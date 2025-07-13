import { useState } from "react";

// 項目
const Item = () => {
  const [isShow, setIsShow] = useState('tc'); // 台北tp 台中tc

  const item_nav = [{
    title: '北部',
    en: 'tp',
  }, {
    title: '中部',
    en: 'tc',
  }];

  const item_tp = ['霧眉', '霧唇', '唇部淡色', '發亮肌皮膚管理'];
  const item_tc = ['霧眉', '霧唇', '唇部淡色', '發亮肌皮膚管理', '艾灸', '耳燭', '美甲', '卸甲'
  ];
  

  return(
    <article>
        <section className="flex flex-col items-center justify-center w-[90%] max-w-[600px] h-auto mx-auto">

          {/* nav */}
          <div className="item-nav nav-li flex gap-[10px]">
            { item_nav.map((i) => {
                const isActive = i.en === isShow;
                return(
                  <div 
                    key={i.en} 
                    className={`item-nav-item nav-btn rounded-[5px] 
                      text-[1.3rem] px-[20px] py-[10px] 
                      ${isActive 
                        ? 'text-[#ffffff] bg-[#ffbdbd] pointer-events-none'
                        : 'text-[#ffbdbd] bg-[#ffffff]'
                      }
                    `}
                    onClick={() => setIsShow(i.en)}
                  >
                    {i.title}
                  </div>
                )
              })
            }
          </div>

          {/* 項目 */}
          <div className="item-title w-full flex gap-[10px] flex-wrap items-center justify-center text-[#ffbdbd] 
          my-[20px]">
            {
              isShow === 'tp' 
              ? item_tp.map((i) => <div key={i}>{i}</div>) 
              : item_tc.map((i) => <div key={i}>{i}</div>)
            }
          </div>

          {
            isShow === 'tp' 
            ? ''
            : <p className="text-[#ffbdbd]">看到最後有優惠哦 ~</p>
          }

          
        <div className="flex flex-col items-center w">

          {/* 圖片 */}
            {
              isShow === 'tp' 
              ? (<div>
                  <img src="./images/item_1.png" alt="item" />
                </div>
              )
              : new Array(3).fill(0).map((_, i) => (
                <div key={i}>
                  <img src={`./images/item_${i+2}.png`} alt="item" />
                </div>
              ))
            }


        </div>
      </section>
    </article>
  )
};

export default Item;
