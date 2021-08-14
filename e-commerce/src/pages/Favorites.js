import {Alert, Flex} from '@chakra-ui/react';
import {useFavorites} from '../Contexts/FavoritesContext'
import Card from '../components/Card'

const Basket = () => {

	const {items,removeFromFavorites} = useFavorites();

	return (
		<Flex p={10} w={"100%"}>
			{
				items.length < 1 ? (
					<Alert status="warning">
						Favorilerinizde Ürün bulunmamaktadır
					</Alert>
				) : (
						<Flex p={10} w={"100%"} wrap={"wrap"}>
								{
									items.map((item) => (
											<Card mr={"20px"} item={item} mb="5" key={item.id} />
									))
								}
						</Flex>
				)
			}
		</Flex>
	);
};

export default Basket;