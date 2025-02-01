import { FC, ReactNode } from "react";
import { AccordionContext } from "./AccordionContext";
interface IProps {
  className?: string;
  children: ReactNode;
  active: string | null;
  onSelect: (panelIndex: string | null) => void;
}

const Accordion: FC<IProps> = (props) => {
  const { children, active, onSelect } = props;
  return (
    <AccordionContext.Provider value={{ active, onSelect }}>
      {children}
    </AccordionContext.Provider>
  );
};

export default Accordion;
