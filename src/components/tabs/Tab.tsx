import {FC, ReactNode} from 'react';

export interface ITab{
  title:string,
  children: ReactNode,
  isVisible?: boolean
}

const Tab: FC<ITab> = ({children,title, isVisible}) => {
  return (
    <div className={!isVisible?'hidden':''}>
      {children}
    </div>
  );
};

export default Tab;