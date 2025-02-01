import { FC, ReactNode } from "react";
import { AccordionContext } from "./AccordionContext";
interface IProps {
  //   id: string;
  className?: string;
  children: ReactNode;
  active: string | null;
  onSelect: (panelIndex: string | null) => void;
}

const Accordion: FC<IProps> = (props) => {
  const {
    children,
    // id,
    // className,
    active,
    onSelect,
  } = props;
  return (
    <AccordionContext.Provider value={{ active, onSelect }}>
      {/* <div id={id} className={className}> */}
      {children}
      {/* </div> */}
    </AccordionContext.Provider>
  );
};

export default Accordion;
