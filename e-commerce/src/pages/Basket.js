import {Alert, Box, Button, Flex, Image, Link, Text} from '@chakra-ui/react';
import {useBasket} from '../Contexts/BasketContext'
import Card from '../components/Card'

const Basket = () => {

	const {items} = useBasket();

	const total = items.reduce((acc,obj) => acc+obj.price,0)
	console.log(total)

	return (
		<Flex p={10} w={"100%"}>
			{
				items.length < 1 ? (
					<Alert status="warning">
						Sepetinizde ürün bulunmamaktadır
					</Alert>
				) : (
						<Flex flexDir={"column"}>
							<Text textAlign={"center"} size="md" fontSize="xl" fontWeight="800" >{total} TL</Text>
							<Flex p={10} w={"100%"} wrap={"wrap"}>
								{
									items.map((item) => (
											<Card mr={"20px"} item={item} mb="5" key={item.id} />
									))
								}
							</Flex>
						</Flex>

				)
			}
		</Flex>
	);
};

export default Basket;