import { Banner } from "../components/home/banner";
import { Biography } from "../components/home/biography";
import { EarlyCareer } from "../components/home/early-career";
import { FilmWork } from "../components/home/film-work";
import { Filmography } from "../components/home/filmography";
import { Legacy } from "../components/home/legacy";
import { LookingAhead } from "../components/home/looking-ahead";
import { PersonalLife } from "../components/home/personal-life";
import { RiseToProminence } from "../components/home/rise-to-prominence";
import { ContactContextFunction } from "../context/contact.jsx";
import { ContactPopup } from "../components/ui/contact-popup.jsx";
import "../styles/home.css";
import { MessageQueue } from "../components/general/message-queue.jsx";
import { SliderContextFunction } from "../context/slider.jsx";
import { Slider } from "../components/general/slider.jsx";
import { Philanthropy } from "../components/home/philanthropy.jsx";

export default function Page() {
  const { isOpen } = ContactContextFunction();
  const { isOpen: sliderOpen } = SliderContextFunction();

  return (
    <section className="home-page">
      <Banner />
      <Biography />
      <EarlyCareer />
      <RiseToProminence />
      <FilmWork />
      <PersonalLife />
      <Legacy />
      <Filmography />
      <Philanthropy />
      <LookingAhead />
      {isOpen && <ContactPopup />}
      <MessageQueue />
      {sliderOpen && <Slider />}
    </section>
  );
}
