// 預約
const Reserve = () => {
  return(
     <article>
        <section className="flex flex-col items-center justify-center w-[90%] max-w-[600px] h-auto mx-auto gap-[10px]">

          <div className="trans bg-[#3eb6a8] p-[10px] rounded-[5px] text-[#ffffff] 
            hover:bg-[#ffffff] hover:text-[#3eb6a8] border-[1px] hover:border-[#3eb6a8] hover:scale-[1.1]
            cursor-pointer">
            <a href="https://lin.ee/wzyhdLZ" target="_blank" rel="noopener noreferrer">
              點擊按鈕加入
            </a>
          </div>

          <div>
            或
          </div>

          <div className="">
            掃描加入LINE
          </div>
          <div className="w-[70%] max-w-[300px] bg-[#3eb6a8] p-[10px] rounded-[5px]">
            <img src={`./images/line.jpg`} alt="line QR code" className="rounded-[5px]" />
          </div>

      </section>
    </article>
  )
};

export default Reserve;
