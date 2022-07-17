// src/components/layout.tsx
import React, { ReactNode } from 'react'
import { Text, Center, Heading, Container, useColorModeValue } from '@chakra-ui/react'
import Header from './header'

type Props = {
  children: ReactNode
}

export function Layout(props: Props) {
  return (
    <div>
      <Header />
      <Container maxW="container.md" py='8'>
        {props.children}
      </Container>
      <Center as="footer" bg={useColorModeValue('green.200', 'green.900')} p={6}>
          <Heading size="md">Green Hydrogen POC DAPP by IBM - 2022</Heading>
      </Center>
    </div>
  )
}
