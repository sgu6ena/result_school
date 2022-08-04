import {FC} from 'react';
import Tabs from "../../components/tabs/Tabs";

const LastBlock: FC = () => {
  return (
    <div>
      <Tabs tabs={[
        {title: '1', children: <span>111111</span>},
        {title: '2', children: <span>222222</span>}
      ]}></Tabs>
    </div>
  );
};

export default LastBlock;