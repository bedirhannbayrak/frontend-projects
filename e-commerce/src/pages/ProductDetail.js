import {useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import {Button, Flex, Image, Text} from '@chakra-ui/react';
import {useBasket} from '../Contexts/BasketContext'
import {fetchProduct} from '../api'
import {useFavorites} from '../Contexts/FavoritesContext'

const Index = () => {

  const {product_id} = useParams()
  const {data, isLoading, isError} = useQuery(['product', product_id],
      () => fetchProduct(product_id))

  const {items: basketItems, addToBasket} = useBasket()
  const {items: favoriteItems, addToFavorites} = useFavorites()

  if (isLoading) {
    return <div>Loading....</div>
  }

  if (isError) {
    return <div>Error...</div>
  }

  const findBasketItem = basketItems.find((item) => (item.id == product_id))
  const findFavoriteItem = favoriteItems.find((item) => (item.id == product_id))

  return (
      <Flex mt={10} justify={'center'}>
        <Image mr={10} maxH={'md'} src={data.image}/>
        <Flex flexDir={'column'} w={'md'}>
          <Text as="h2" fontWeight={'semibold'}
                fontSize="4xl">{data.title}</Text>
          <Text mt="5" as="h2" fontSize="xl">{data.description}</Text>
          <Flex mt={5} justify={'space-between'}>
            <Button mt="2" variant="solid"
                    colorScheme={findBasketItem ? 'gray' : 'pink'}
                    onClick={() => addToBasket(data, findBasketItem)}>
              {
                findBasketItem ? 'Remove from basket' : 'Add to basket'
              }
            </Button>
            <Button mt="2" variant="solid"
                    colorScheme={findFavoriteItem ? 'gray' : 'pink'}
                    onClick={() => addToFavorites(data, findFavoriteItem)}>
              {
                findBasketItem ? 'Remove from favorites' : 'Add to favorites'
              }
            </Button>
          </Flex>
        </Flex>
      </Flex>
  );
};

export default Index;