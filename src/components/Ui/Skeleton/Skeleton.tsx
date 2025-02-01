import React from "react";
import styles from "./Skeleton.module.css";

interface SkeletonProps {
  variant: "rectangular" | "circular";
  width: number;
  height: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ variant, width, height }) => {
  const skeletonStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div
      className={`${styles.skeleton} ${
        variant === "circular" ? styles.circular : styles.rectangular
      }`}
      style={skeletonStyle}
    ></div>
  );
};

export default Skeleton;
