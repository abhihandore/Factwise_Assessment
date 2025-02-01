import { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: React.ReactNode;
  containerId?: string;
}
const Portal: FC<Props> = ({ children, containerId = "root" }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let portalContainer = document.getElementById(containerId);

    // If the container doesn't exist, create it
    if (!portalContainer) {
      portalContainer = document.createElement("div");
      portalContainer.setAttribute("id", containerId);
      document.body.appendChild(portalContainer);
    }

    setContainer(portalContainer);
  }, [containerId]);

  if (!container) return null;

  return ReactDOM.createPortal(children, container);
};

export default Portal;
