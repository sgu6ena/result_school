import {FC, useState} from 'react';
import Tab, {ITab} from "./Tab";

const Tabs: FC<{ tabs: ITab[] }> = ({tabs}) => {
  const count = tabs.length-1

  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={'bg-purple-900 p-40'} onWheel={(e) => {
      setActiveTab(e.deltaY > 0 ? (activeTab < count ? activeTab + 1 : activeTab) : (activeTab > 0 ? activeTab - 1 : 0))
    }}>
      <div className={'flex text-5xl'}>{tabs.map((tab, index) => <button key={index} onClick={() => {
        setActiveTab(index)
      }}>{tab.title}</button>)}</div>
      <div className={'flex'}>
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