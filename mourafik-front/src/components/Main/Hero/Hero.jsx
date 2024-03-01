import landingImg from "../../../assets/landingImg.png";
import watch from "../../../assets/watch.png";
import { LuArrowUpRight } from "react-icons/lu";

import "./Hero.css";

export default function Hero() {
  return (
    <div className="landing-container">
      <div className="description">
        <h1>
          Medical <br />
          Healthcare <br />
          Tracking
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          soluta voluptatum neque hic. Illum, laboriosam consequuntur ex dolor
          aliquid labore saepe ea minus officia provident rerum voluptatibus
          nesciunt dolores a.
        </p>
        <button>
          GET STARTED
          <span class="icon">
            <LuArrowUpRight />
          </span>
        </button>
      </div>
      <div className="illustrations">
        <img className="landingImg" src={landingImg} alt="" />
        <img className="watch" src={watch} alt="" />
      </div>
    </div>
  );
}
