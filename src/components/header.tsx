//src/components/header.tsx
import NextLink from "next/link"
import { Flex, Button, useColorModeValue, Spacer, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react'

const siteTitle="H2G Token DAPP @IBM"
export default function Header() {

  return (
    <Flex as='header' bg={useColorModeValue('green.200', 'green.900')} p={4} alignItems='center'>
      <LinkBox>
        <NextLink href={'/'} passHref>
          <LinkOverlay>
            <Heading size="md">{siteTitle}</Heading>
          </LinkOverlay>
        </NextLink>
      </LinkBox>      
      <Spacer />
      <Button >Account </Button>
    </Flex>
  )
}
