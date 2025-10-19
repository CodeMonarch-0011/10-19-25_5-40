import { createContext, useContext, useState } from "react";

const ContactContext = createContext({})


export function ContactContextFunction () {
    return (
        useContext(ContactContext)
    )
}


export function ContactContextProvider ({ children }) {
    
    const [ isOpen, setIsOpen ] = useState(false)
    

    function openContactPopup () {
        setIsOpen(true)
    }

    function closeContactPopup () {
        setIsOpen(false)
    }

    return (
        <ContactContext.Provider value={{ isOpen, openContactPopup, closeContactPopup }}>
            {children}
        </ContactContext.Provider>
    )
}