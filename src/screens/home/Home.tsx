import {FC} from 'react';
import Advantages, {IAdvantage} from "../../components/advantages/Advantages";
import MainBlock from "./MainBlock";
import Instruction from "./Instruction";
import LastBlock from "./LastBlock";

const advantages: IAdvantage[] = [
  {
    text: 'HD видеоурока длительностью 3 - 15 минут ',
    count: 293,
  },
  {
    text: 'Мероприятий на курсе (Хакатоны, мастер классы, разборы и т.д.)',
    count: 6,
  },
  {
    text: 'Заданий и тестов для закрепления ',
    count: 193,
  },
]

const Home: FC = () => {
  return (<>
      <MainBlock/>
      <Advantages advantages={advantages}/>
      <Instruction/>
      <LastBlock/>
    </>

  );
};

export default Home;