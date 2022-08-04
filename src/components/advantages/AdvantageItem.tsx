import {FC} from 'react';
import styles from './advantages.module.scss'
import {IAdvantage} from "./Advantages";

const AdvantageItem: FC<IAdvantage> = ({count,text}) => {
  return (
    <li className={styles.item}>
      <div className={styles.count}>
        {count}
      </div>
      <div className={styles.text}>
        {text}
      </div>
    </li>
  );
};

export default AdvantageItem;