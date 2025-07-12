import { basePath } from "../common/constants"

// logo
export const Banner = () => {
  return(
    <div className="flex flex-col items-center w-full py-[15px] bg-[#fff6cc]">
        <div className="w-[40%] max-w-[300px]">
          <a href={`${basePath}/about`}>
              <img src="./images/logo.png" />
          </a>
        </div>
    </div>
  )
}