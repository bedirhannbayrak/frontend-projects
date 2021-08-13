import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text
} from '@chakra-ui/react'
import {useCallback, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const CalculateBmi = () => {

  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)

  useEffect(() => {
    setHeight(localStorage.getItem('height') || 0)
    setWeight(localStorage.getItem('weight') || 0)
  }, [])

  const calculate = useCallback((e) => {
    e?.preventDefault()
    let bmi = weight / Math.pow(height / 100, 2)
    bmi = Number.parseFloat(bmi).toFixed(2)
    setBmi(bmi)
  },[weight,height])
  useEffect(() => {
    calculate()
    localStorage.setItem('height', height)
    localStorage.setItem('weight', weight)
  }, [height, weight, calculate])

  return (
      <Flex wrap={'wrap'}>

        <Flex flexDir={'column'} w={['100%', '100%', '50%', '50%', '50%']}>
          <form onSubmit={calculate}>
            <FormControl id="kilo">
              <FormLabel>Kilonuz(kg)</FormLabel>
              <Input value={weight} onChange={(e) => setWeight(e.target.value)}
                     type={'number'}/>
            </FormControl>
            <FormControl id="boy" mb={2}>
              <FormLabel>Boyunuz(cm)</FormLabel>
              <Input value={height} onChange={(e) => setHeight(e.target.value)}
                     type={'number'}/>
            </FormControl>
            <Button type={'submit'} onClick={calculate}
                    width={'full'}>Hesapla</Button>
          </form>
        </Flex>

        <Flex w={['100%', '100%', '50%', '50%', '50%']} flexDir={'column'}
              alignItems={'center'} justify={'flex-start'}>
          <Text mt={5} mb={10} textAlign={'center'} width={'sm'}
                borderBottom={'1px solid gray'} fontWeight={'bold'}
                fontSize={'4xl'}>BMI</Text>
          {bmi > 0 && (
              <>
                <Text fontWeight={'bold'} fontSize={'2xl'}>
                  {bmi}
                </Text>
                <Text fontWeight={'semibold'} my={2} fontSize={'2xl'}>Size uygun
                  diyet listeleri</Text>
                <Flex w={'80%'} px={2} py={5} mb={2}
                      justifyContent={'space-between'}>
                  {
                    bmi < 22 && (
                        <>
                          <Link to={'/diyet1'}><Button>Diyet 1</Button></Link>
                          <Link to={'/diyet2'}><Button>Diyet 2</Button></Link>
                        </>

                    )
                  }
                  {
                    bmi >= 22 && bmi < 25 && (
                        <>
                          <Link to={'/diyet3'}><Button>Diyet 3</Button></Link>
                          <Link to={'/diyet4'}><Button>Diyet 4</Button></Link>
                        </>

                    )
                  }
                  {
                    bmi >= 25 && bmi <= 100 && (
                        <>
                          <Link to={'/diyet5'}><Button>Diyet 5</Button></Link>
                          <Link to={'/diyet6'}><Button>Diyet 6</Button></Link>
                          <Link to={'/diyet7'}><Button>Diyet 7</Button></Link>
                        </>

                    )
                  }
                </Flex>
              </>
          )}
        </Flex>
      </Flex>
  );
};

export default CalculateBmi;