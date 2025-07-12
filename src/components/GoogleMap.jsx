const GoogleMap = () => {
  return (
    <section className="flex flex-col items-center justify-center w-[80%] max-w-[600px] h-[40vw] max-h-[600px] mx-auto">
        <div className="w-full h-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3641.5481399331757!2d120.65855000000002!3d24.117381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693c56dadbc623%3A0xa109b45497e8e14e!2zNDAy5Y-w54Gj5Y-w5Lit5biC5Y2X5Yy65bel5a246LevMTI25be3MjHomZ8!5e0!3m2!1szh-TW!2sus!4v1752331599049!5m2!1szh-TW!2sus" style={{border:'0', width:"100%", height:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>
  ) 
}

export default GoogleMap;