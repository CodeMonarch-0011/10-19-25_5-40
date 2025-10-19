import { ContactContextFunction } from "../../context/contact";
import { SliderContextFunction } from "../../context/slider";
import "../../styles/general.css";
import { BsX } from "react-icons/bs";

const SliderCnt = [
  {
    label: "Home",
    nav: "",
    icon: "",
  },
  {
    label: "About",
    nav: "#about",
    icon: "",
  },
  {
    label: "Filmography",
    nav: "#filmography",
    icon: "",
  },
  {
    label: "Personal Life",
    nav: "#personal-life",
    icon: "",
  },
  {
    label: "Legacy",
    nav: "#legacy",
    icon: "",
  },
];

function SliderItem({ label, nav, icon }) {
  const { closeSlider } = SliderContextFunction();
  function handleClick() {
    window.location.hash = nav;
    closeSlider();
  }

  return (
    <div className="slider-item" onClick={handleClick}>
      <span>{label}</span>

      {icon ? <span>{icon}</span> : <></>}
    </div>
  );
}

export function Slider() {
  const { closeSlider } = SliderContextFunction();
  const { openContactPopup } = ContactContextFunction();

  function contact() {
    closeSlider();
    openContactPopup();
  }

  return (
    <div className="slider">
      <span className="slider-exit" onClick={closeSlider}>
        <BsX />
      </span>

      <div className="slider-menu">
        {SliderCnt.map((item, i) => (
          <SliderItem
            key={i}
            label={item.label}
            icon={item.icon}
            nav={item.nav}
          />
        ))}
      </div>

      <button onClick={contact}>Contact Us</button>
    </div>
  );
}
