import {FC, ReactNode} from 'react';
import styles from './itemWithDescription.module.scss'
const ItemWithIcon: FC<{text:string, icon:ReactNode}> = ({icon,text}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        {icon}
      </div>
      <div className={styles.text}>
        {text}
      </div>
    </div>
  );
};

export default ItemWithIcon;