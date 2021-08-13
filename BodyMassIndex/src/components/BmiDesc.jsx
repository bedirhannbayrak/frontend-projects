import {Flex, Heading, Text} from '@chakra-ui/react'

const BmiDesc = () => {
  return (
      <Flex flexDir={"column"} mb={10}>
        <Heading as={"h2"} mb={5} >BMI Nedir</Heading>
        <Text fontSize={"lg"}>Vücut kitle endeksi yetişkin bir insanın kilosunun boyuna göre normal olup olmadığını gösteren bir parametredir. Aşağıda görülen Vücut Kitle Endeksi (VKE veya VKİ) tablosunda kilogram cinsinden kilonuz ve metre cinsinden boyunuzun kesiştiği noktanın içinde bulunduğu alan kilonuzun ideal olup olmadını öğrenebilirsiniz. Eğer mevcut kilonuz ideal kilonuzun altında ya da üstünde ise bu kiloya ulaşabilmek için izlenecek yol, kısa sürede fazla miktarda kilo kaybetmek ya da almak değil, sağlıklı kilo kaybını/kazancını sağlamak ve bu kiloyu uzun dönemde korumaktır. </Text>
      </Flex>
  );
};

export default BmiDesc;