import { FC, memo, ReactNode } from "react";
import { useAccordionContext } from "../hooks/useAccordionContext";
import styles from "../Accordion.module.css";

interface AccordionDetailsProps {
  className?: string;
  children: ReactNode;
  panelKey: string | number;
}

const AccordionDetails: FC<AccordionDetailsProps> = ({
  children,
  panelKey,
  className,
}) => {
  const { active } = useAccordionContext();
  const selected = active === panelKey;
  return (
    <div
      className={` accodion_details ${styles.details}  ${
        selected && styles.expanded
      }`}
    >
      <div className={`${className || ""} ${styles.details_content}`}>
        {children}
      </div>
    </div>
  );
};

export default memo(AccordionDetails);
