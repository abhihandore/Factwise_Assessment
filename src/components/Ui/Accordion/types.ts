export interface AccordionContextProps {
    active: string | null;
    onSelect: (panelIndex: string | null ) => void;
}