import {FC} from 'react';
import styles from "./home.module.scss";

const MainBlock: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.circles}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.content}>

          <h1>Профессия<br/>
            Frontend — разработчик</h1>
          <p className={styles.subtitle}>Стань с нуля продвинутым Junior разработчиком за 7 месяцев с знанием
            технологий
            больше, чем у других кандидатов</p>
          <p className={styles.text}>Начиная с основ изучишь JavaScript, разберешься с самыми популярными
            технологиями,
            научишься писать Frontend <strong>на фреймворке</strong> и связывать его с Backend.
            <strong> Навыки после курса оцениваются от 100 т.р.</strong></p>
          <button>Задать вопрос об обучении</button>
        </div>
        <div className={styles.wrapper}>
          <img src="/assets/images/img.png" className={styles.image} alt="Профессия Frontend — разработчик"/>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;