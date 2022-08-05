import {FC} from 'react';
import Tabs from "../../components/tabs/Tabs";
import styles from "./home.module.scss";
import ItemWithIcon from "../../components/IconWithDescription/ItemWithIcon";
import {ReactComponent as Cmd} from '../../assets/svg/cmd.svg'
import {ReactComponent as Nano} from '../../assets/svg/nano.svg'
import {ReactComponent as Web} from '../../assets/svg/web.svg'
import {ReactComponent as ReactIcon} from '../../assets/svg/react.svg'
import {ReactComponent as Node} from '../../assets/svg/node.svg'

const LastBlock: FC = () => {
  return (
    <div className={styles.last}>
      <h2>Что тебе даст прохождение курса?</h2>
      <Tabs tabs={[
        {
          title: 'SKILLS UPGRADE', children:
            <div className={styles.tabcontent}>
              <ItemWithIcon
                icon={<Cmd/>}
                text={'Научишься понимать терминологию, документацию и писать код на уровне востребованных  разработчиков'}
              />
              <ItemWithIcon
                icon={<Nano/>}
                text={'твои знания превратятся в систему, ты не просто изучишь технологии, но и поймешь как развиваться дальше'}
              />
              <ItemWithIcon
                icon={<Web/>}
                text={'Создашь Fullstack приложение, которое покажет что твои навыки выше чем у стандартного junior'}/>
            </div>
        },
        {
          title: 'STRONG HARD SKILLS', children: <div className={styles.tabcontent}>
            <ItemWithIcon
              icon={<ReactIcon/>}
              text={'Создаёте с помощью фреймворка React  визуальную часть приложения: элементы, анимация'}
            />
            <ItemWithIcon
              icon={<Node/>}
              text={'Изучите NodeJS на достаточном уровне чтобы связывать frontend и backend'}
            />
            <ItemWithIcon
              icon={<Nano/>}
              text={'Владеете базой,  от которого можно отталкиваться и учить любую технологию на JavaScript'}
            />
          </div>
        }
      ]}></Tabs>
    </div>
  );
};

export default LastBlock;