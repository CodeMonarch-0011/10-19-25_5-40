import "./App.css";
// Components
import Layout from "./_layout.jsx";
import { ContactContextProvider } from "./context/contact.jsx";
import { MessageContextProvider } from "./context/messages.jsx";
import { SliderContextProvider } from "./context/slider.jsx";

function App() {
  return (
    <SliderContextProvider>
      <MessageContextProvider>
        <ContactContextProvider>
          <div className="app">
            <Layout />
          </div>
        </ContactContextProvider>
      </MessageContextProvider>
    </SliderContextProvider>
  );
}

export default App;
