import {Flex, Heading, IconButton, Text} from '@chakra-ui/react'
import {ArrowBackIcon} from '@chakra-ui/icons'
import {useHistory} from 'react-router-dom'

const Diyet = ({title}) => {
  const history = useHistory()
  return (
      <Flex my={3} flexDir={"column"}>
        <IconButton
            onClick={()=> {history.goBack()}}
            colorScheme="gray"
            aria-label="Go Back"
            size="lg"
            mb={2}
            width={"2rem"}
            icon={<ArrowBackIcon/>}
        />
        <Heading mb={5}>{title}</Heading>
        <Text >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores consectetur dolorum eius eligendi expedita, iure laudantium minima nostrum obcaecati, odit omnis perferendis quia rem repellat rerum sed voluptas voluptatum.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores consectetur dolorum eius eligendi expedita, iure laudantium minima nostrum obcaecati, odit omnis perferendis quia rem repellat rerum sed voluptas voluptatum.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores consectetur dolorum eius eligendi expedita, iure laudantium minima nostrum obcaecati, odit omnis perferendis quia rem repellat rerum sed voluptas voluptatum.
        </Text>
      </Flex>
  );
};

export default Diyet;