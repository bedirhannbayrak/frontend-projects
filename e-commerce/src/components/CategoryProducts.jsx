import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import {fetchProductsByCategory} from '../api'
import {Box, Flex, Heading, SimpleGrid} from '@chakra-ui/react'
import Card from './Card'
import React from 'react'

const CategoryProducts = () => {

  let {category_name} = useParams()
  console.log(category_name)

  category_name = category_name || "electronics"

  const {data,isError,isLoading} = useQuery(["products",category_name],
      () => fetchProductsByCategory(category_name))

  if (isLoading) {
    return <Heading>Loading</Heading>
  }
  if (isError) {
    return <Heading>Error</Heading>
  }

  return (
      <Flex w={"100%"} flexDir={"column"}>
        <Heading textTransform={"uppercase"} my={5} textAlign={"center"}>{category_name}</Heading>
        <SimpleGrid pb={10} w={"100%"} minChildWidth={"300px"} spacing={"6"} >
          {
            data?.map((item,key) => (
                <Box key={item.id}>
                  <Card item={item} />
                </Box>
            ))
          }
        </SimpleGrid>
      </Flex>

  );
};

export default CategoryProducts;