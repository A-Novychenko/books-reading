import Image from "next/image";
import {FC} from "react";

import styles from "./AuthQuoteRegister.module.scss";
import {abril_fatface} from "@/fonts/fonts";

export const AuthQuoteRegister: FC = () => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>
        <span className={abril_fatface.className}>Books Reading</span>
      </h2>
      <ul>
        <li className={styles.item}>
          <h3 className={styles.sub_title}>Will help you to</h3>
          <ul>
            <li className={styles.sub_item}>
              <Image
                className={styles.img}
                src="/arrowRegister.svg"
                alt="arrow list marker"
                width={10}
                height={20}
                priority
              />
              <p className={styles.text_item}>
                Create your goal faster and proceed to read
              </p>
            </li>
            <li className={styles.sub_item}>
              <Image
                className={styles.img}
                src="/arrowRegister.svg"
                alt="arrow list marker"
                width={10}
                height={20}
                priority
              />
              <p className={styles.text_item}>
                Divide process proportionally for each day
              </p>
            </li>
            <li className={styles.sub_item}>
              <Image
                className={styles.img}
                src="/arrowRegister.svg"
                alt="arrow list marker"
                width={10}
                height={20}
                priority
              />
              <p className={styles.text_item}>Track your success</p>
            </li>
          </ul>
        </li>
        <li className={styles.item}>
          <h3 className={styles.sub_title}>You may also</h3>
          <ul>
            <li className={styles.sub_item}>
              <Image
                className={styles.img}
                src="/arrowRegister.svg"
                alt="arrow list marker"
                width={10}
                height={20}
                priority
              />
              <p className={styles.text_item}>
                Pose your own independent point of view
              </p>
            </li>
            <li className={styles.sub_item}>
              <Image
                className={styles.img}
                src="/arrowRegister.svg"
                alt="arrow list marker"
                width={10}
                height={20}
                priority
              />
              <p className={styles.text_item}>
                Improve your professional skills according to new knowledge
              </p>
            </li>
            <li className={styles.sub_item}>
              <Image
                className={styles.img}
                src="/arrowRegister.svg"
                alt="arrow list marker"
                width={10}
                height={20}
                priority
              />
              <p className={styles.text_item}>
                Become an interesting interlocutor
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
