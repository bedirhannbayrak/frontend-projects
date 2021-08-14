import React from 'react';
import {Box, Heading, SimpleGrid} from '@chakra-ui/react';
import {useQuery} from 'react-query';
import {fetchProducts} from '../api'
import Card from '../components/Card'

const Products = () => {

  const {data, isError, isLoading} = useQuery(['products'],
      () => fetchProducts())

  if (isLoading) {
    return <Heading>Loading</Heading>
  }
  if (isError) {
    return <Heading>Error</Heading>
  }

  return (
      <>
        <SimpleGrid py={10} px={20} minChildWidth={'300px'} spacing={'6'}>
          {
            data?.map((item, key) => (
                <Box w="100%" key={item.id}>
                  <Card item={item}/>
                </Box>
            ))
          }
        </SimpleGrid>
      </>
  );
};

export default Products;