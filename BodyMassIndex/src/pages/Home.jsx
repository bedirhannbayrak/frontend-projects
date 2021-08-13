import {Flex} from '@chakra-ui/react'
import BmiDesc from '../components/BmiDesc'
import CalculateBmi from '../components/CalculateBmi'

const Home = () => {
  return (
      <Flex flexDir={"column"}>
        <BmiDesc/>
        <CalculateBmi/>
      </Flex>
  );
};

export default Home;