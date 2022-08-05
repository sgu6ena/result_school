import {FC, useState} from 'react';
import Tab, {ITab} from "./Tab";
import styles from './tabs.module.scss'
import cn from "classnames";
const Tabs: FC<{ tabs: ITab[] }> = ({tabs}) => {
  const count = tabs.length-1

  const [activeTab, setActiveTab] = useState(0)
  
  return (
    <div className={styles.tabs} onWheel={(e) => {
      setActiveTab(e.deltaY > 0 ? (activeTab < count ? activeTab + 1 : activeTab) : (activeTab > 0 ? activeTab - 1 : 0))
    }}>
      <div className={styles.header}>{tabs.map((tab, index) => <button key={index} onClick={() => {
        setActiveTab(index)
      }} className={cn(styles.title, index===activeTab&& styles.active)}>{tab.title}</button>)}</div>
      <div className={styles.content}>
        {tabs.map((tab, index) => (
          <Tab
            key={tab.title}
            isVisible={activeTab === index}
            title={tab.title}
          >
            {tab.children}
          </Tab>))
        }
      </div>
    </div>
  );
};

export default Tabs;