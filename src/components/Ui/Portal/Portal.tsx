import { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: React.ReactNode;
  containerId?: string;
}
const Portal: FC<Props> = ({ children, containerId = "root" }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  // Create or find the container element
  useEffect(() => {
    let portalContainer = document.getElementById(containerId);

    // If the container doesn't exist, create it
    if (!portalContainer) {
      portalContainer = document.createElement("div");
      portalContainer.setAttribute("id", containerId);
      document.body.appendChild(portalContainer);
    }

    setContainer(portalContainer);

    // // Cleanup: Remove the container when the component unmounts
    // return () => {
    //   if (portalContainer) {
    //     document.body.removeChild(portalContainer);
    //   }
    // };
  }, [containerId]);

  // Render the children into the portal container
  console.log(container);
  if (!container) return null;

  return ReactDOM.createPortal(children, container);
};

export default Portal;
