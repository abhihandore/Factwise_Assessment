import { memo, ReactNode } from "react";
import { useAccordionContext } from "../hooks/useAccordionContext";
import styles from "../Accordion.module.css";
import ChevronDownSvg from "../../../../assets/icons/ChevronDownSvg";

const AVOIDABLE_TAGS = ["INPUT"];
const AccordionSummary = ({
  children,
  id,
  className,
  preventClick = false,
}: {
  children: ReactNode;
  id: string | null;
  className?: string;
  preventClick?: boolean;
}) => {
  const { onSelect, active } = useAccordionContext();
  return (
    <button
      className={`${styles.summary} ${active === id ? styles.active : ""} ${
        className || ""
      }`}
      onClick={(evt: React.MouseEvent<HTMLButtonElement>) => {
        const isTargetAvoidable = AVOIDABLE_TAGS.includes(
          (evt.target as HTMLElement).tagName
        );
        if (isTargetAvoidable || preventClick) return;
        onSelect(active === id ? null : id);
      }}
    >
      {children}
      <span className={`${styles.chevron}`}>
        <ChevronDownSvg />
      </span>
    </button>
  );
};

export default memo(AccordionSummary);
