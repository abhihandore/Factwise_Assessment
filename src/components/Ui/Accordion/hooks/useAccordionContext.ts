import { useContext } from "react";
import { AccordionContextProps } from "../types";
import { AccordionContext } from "../AccordionContext";

export function useAccordionContext(): AccordionContextProps {
    const context = useContext(AccordionContext);
    if (context === undefined) {
      throw new Error("useTabsContext must be must under TabsContextProvider");
    }
    return context;
}