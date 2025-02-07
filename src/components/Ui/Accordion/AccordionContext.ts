import { createContext } from "react";
import { AccordionContextProps } from "./types";


export const AccordionContext = createContext<AccordionContextProps>({
  active: null,
  onSelect: () => undefined,
});
