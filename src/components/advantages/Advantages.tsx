import {FC} from 'react';
import AdvantageItem from "./AdvantageItem";
import styles from './advantages.module.scss'

export interface IAdvantage {
  count: number,
  text: string
}

const Advantages: FC<{ advantages: IAdvantage[] }> = ({advantages}) => {
  return (
    <ul className={styles.list}>
      {advantages.map(({count,text})=><AdvantageItem key={text} count={count} text={text}/>)}
    </ul>
  );
};

export default Advantages;