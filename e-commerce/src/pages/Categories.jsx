import {Box, Button, Flex, Heading, Spacer, Text} from '@chakra-ui/react'
import {Link, Route, Switch, useRouteMatch} from 'react-router-dom'
import {useQuery} from 'react-query'
import {fetchAllCategories} from '../api'
import CategoryProducts from '../components/CategoryProducts'
import Products from './Products'

const Categories = () => {
  const {path} = useRouteMatch();
  const {data} = useQuery('categories', fetchAllCategories)

  return (
      <Flex >
        <Flex minW={"200px"} pos={"sticky"} top={"10vh"} h={"90vh"} px={2} py={5} bg={"whiteAlpha.400"} flexDir={'column'} w={'15%'}>
          {
            data?.map(c => (
                <Link mb={"10"} to={`/categories/${c}`}>
                  <Text px={2}
                        py={2}
                        textTransform={"uppercase"}
                        color={"white"}
                        _hover={{
                          backgroundColor:"gray.900"
                        }}
                        rounded={'md'}
                        mb={2} bg={"gray.700"}
                        fontWeight={"bold"}
                        fontSize={"xl"}>{c}</Text>
                </Link>
            ))
          }
        </Flex>
        <Spacer/>
        <Flex overflow={"auto"} height={"90vh"} w={"80%"}>
          <Switch>
            <Route path={`${path}/:category_name`} component={CategoryProducts}/>
            <Route path={"*"} component={CategoryProducts}/>
          </Switch>

        </Flex>
      </Flex>
  );
};

export default Categories;