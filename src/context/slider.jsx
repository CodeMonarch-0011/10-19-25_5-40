import { createContext, useContext, useState } from "react";

const SliderContext = createContext({});

export function SliderContextFunction() {
  return useContext(SliderContext);
}

export function SliderContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function openSlider() {
    setIsOpen(true);
  }

  function closeSlider() {
    setIsOpen(false);
  }

  return (
    <SliderContext.Provider value={{ isOpen, openSlider, closeSlider }}>
      {children}
    </SliderContext.Provider>
  );
}
