import { Flex, Input, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotification2Line, RiSearch2Line, RiUserAddLine } from 'react-icons/ri'

export function Header(){
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text 
        fontSize="3xl" 
        fontWeight="bold" 
        letterSpacing="tight" 
        w="64" 
      >
        dashgo
        <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
        />

        <Icon fontSize="20"mt="1" as={RiSearch2Line} />
      </Flex>

      <Flex
        align="center"
        ml="auto"
      >
        <HStack 
          spacing="8"
          mx="8"
          pr="8"
          px="2"
          color="gray.300"
          borderRightWidth={2}
          borderColor="gray.700"
        >
          <Icon as={RiNotification2Line} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex
          align="center"
        >
          <Box mr="4" textAlign="right">
            <Text>Victor Carvalho</Text>
            <Text color="gray.300" fontSize="small">
              victor@gmail.com
            </Text>
          </Box>

          <Avatar 
            size="md" 
            name="Victor carvalho"
            src="https://github.com/vitugc1.png" 
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

