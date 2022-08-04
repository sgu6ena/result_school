import {FC, ReactNode} from 'react';

const ItemWithIcon: FC<{text:string, icon:ReactNode}> = ({icon,text}) => {
  return (
    <div >
      <div>
        {icon}
      </div>
      <div>
        {text}
      </div>
    </div>
  );
};

export default ItemWithIcon;