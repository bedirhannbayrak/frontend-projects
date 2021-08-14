import {Box, Button, Flex, IconButton, Image, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {useBasket} from '../Contexts/BasketContext'
import {useFavorites} from '../Contexts/FavoritesContext'
import {StarIcon} from '@chakra-ui/icons'

const Card = ({item,...rest}) => {
  const {addToBasket, items: basketItems} = useBasket()
  const {addToFavorites, items: favoriteItems} = useFavorites()
  const basketItem = basketItems.find(
      (basket_item) => (basket_item.id === item.id))
  const favoriteItem = favoriteItems.find(
      (favorite_item) => (favorite_item.id === item.id))
  return (
      <Box {...rest} bg={'whiteAlpha.400'} rounded={'md'} shadow={'md'} maxW={'300px'}
            p="3" borderWidth="1px" borderRadius="lg"
           overflow="hidden">
        <Link to={`/product/${item.id}`}>
          <Image maxH={"200px"} objectFit={"contain"} width={'200px'} src={item.image} loading="lazy"/>
          <Box p="1">
            <Box mt="1" fontWeight="semibold" lineHeight="tight">
              {item.title}
            </Box>
            <Box my={2}><Text fontWeight={"bold"}>{item.price}</Text></Box>
          </Box>
        </Link>
        <Flex mt={"auto"} justify={"space-between"}>
          <Button onClick={() => addToBasket(item)}
                  colorScheme={basketItem ? 'gray' : 'green'}>
            {basketItem ? 'Remove from basket' : 'Add to basket'}
          </Button>
          <IconButton
              onClick={() => addToFavorites(item)}
              colorScheme={favoriteItem ? 'pink' : 'gray'}
              aria-label="Search database"
              icon={<StarIcon/>}
          />
        </Flex>
      </Box>
  );

};

export default Card;