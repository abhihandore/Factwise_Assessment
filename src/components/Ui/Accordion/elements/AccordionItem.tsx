import { FC, memo, ReactNode } from "react";
import styles from "../Accordion.module.css";
interface AccordionItemProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const AccordionItem: FC<AccordionItemProps> = ({ children, id, className }) => {
  return (
    <div {...(id && { id })} className={`${styles.item} ${className}`}>
      {children}
    </div>
  );
};

export default memo(AccordionItem);
