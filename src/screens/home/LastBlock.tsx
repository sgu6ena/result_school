import {FC} from 'react';
import Tabs from "../../components/tabs/Tabs";
import styles from "./home.module.scss";

const LastBlock: FC = () => {
  return (
    <div className={styles.last}>
      <Tabs tabs={[
        {title: 'первая вкладка', children: <span>111111</span>},
        {title: 'втрая вкладка', children: <span>222222</span>}
      ]}></Tabs>
    </div>
  );
};

export default LastBlock;