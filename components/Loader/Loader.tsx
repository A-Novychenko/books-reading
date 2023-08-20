"use client";
import {RotatingLines} from "react-loader-spinner";
import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.wrap}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
