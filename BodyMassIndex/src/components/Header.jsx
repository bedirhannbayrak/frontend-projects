import {Link} from 'react-router-dom'
import {Flex, Heading, ListItem, Text, UnorderedList} from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
      <Flex shadow={'md'} bg={'whiteAlpha.400'} px={2} rounded={'md'} mb={10} height={"10vh"} alignItems={"center"} borderBottom={'1px'} borderBottomColor={"gray.300"}>
        <Link to={"/"}>
          <Heading size="2xl" mr={5}>BMI</Heading>
        </Link>
        <UnorderedList >
          <ListItem>
            <Link to="/">
              <Text fontSize={'2xl'} fontWeight={'bold'}>
                Home
              </Text>
            </Link>
          </ListItem>
        </UnorderedList>
      </Flex>
  );
};

export default Header;