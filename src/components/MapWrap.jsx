const MapWrap = () => {
  return (
    <section className="flex flex-col items-center justify-center w-[80%] max-w-[600px] h-auto mx-auto">
        
        <p className="title-style text-center mb-[10px] text-[#3eb6a8]">我們在哪裡?</p>

        <div className="flex flex-col items-center w">
          <div>
            <img src="./images/map.jpg" alt="map" />
          </div>

          <div>
            <img src="./images/map_2.jpg" alt="map" />
          </div>

        </div>
      </section>
  ) 
}

export default MapWrap;