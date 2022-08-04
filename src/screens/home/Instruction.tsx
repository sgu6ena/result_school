import {FC} from 'react';
import cn from "classnames";
import styles from './home.module.scss'

const Instruction: FC = () => {
  return (
    <div className={styles.instructions}>
      <h2> <span className={styles.question}>?</span> Как именно ты станешь разработчиком</h2>
      <p className={styles.description}>На курсе ты не просто изучаешь теоретический материал. в процессе изучения ты
        повторяете за действующим
        разработчиком, после чего <strong> закрепляешь знания на заданиях и проектах.</strong></p>
      <div className={styles.wrapper}>
        <img src="/assets/images/instructions.png" alt="Как именно ты станешь разработчиком"/>

        <div className={cn(styles.card, styles.left)}>
          <h4>2 Командных проекта</h4>
          <p> Симуляция комерческого проекта - получаете ТЗ и организовываете командную разработку. Прокачивая навыки
            для  будущей работы.</p>
          <div>
            <p> Проекты на тему:</p>
            <ul>
              <li>JavaScript плагин "Контекстное меню"</li>
              <li>Cайт на React, презентующий команду участников</li>
            </ul>

          </div>
        </div>
        <div className={cn(styles.card, styles.right)}>
          <h4>Индивидуальные проекты</h4>
          <div>
            <p>Чтобы свободно чуствовать себя на позиции junior необходим опыт разработки.</p>
            <p>Вы создадите 3 проекта изучая материал от простого к сложному:</p>
          </div>

          <ol>
            <li>Проект корзина с товарами для интернет-магазина</li>
            <li>Социальная сеть для поиска и знакомств</li>
            <li>Дипломный проект на выбранную вами тему:
              <ul>
                <li>Учет доходов и рассходов</li>
                <li>Бронирование отелей</li>
                <li>Интернет-магазин или схожий по сложности проект, которым вы выберети и утвердите с куратором</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Instruction;