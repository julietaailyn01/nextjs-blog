import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import JuliImage from '../utils/images/Juli.jpg';

const name = 'Julieta Ailyn Mosquera';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box as="header" bg="gray.50" borderBottom="1px" borderColor="gray.200">
        <Container maxW="container.lg" p={4}>
          <Flex align="center">
            {home ? (
              <>
                <Box borderRadius="50%" overflow="hidden">
      <Image
        priority
        src={JuliImage}
        height={144}
        width={144}
        alt=""
      />
    </Box>
                <Heading as="h1" fontSize="3xl" ml={4}>
                  {name}
                </Heading>
              </>
            ) : (
              <>
                <Link href="/">
                  <Image
                    priority
                    src={JuliImage}
                    height={144}
                    width={144}
                    alt=""
                  />
                </Link>
                <Link href="/">
                  <Heading as="h2" fontSize="2xl" ml={4}>
                    {name}
                  </Heading>
                </Link>
              </>
            )}
          </Flex>
        </Container>
      </Box>
      <Container maxW="container.lg" py={8}>
        <main>{children}</main>
        {!home && (
          <Box my={8}>
            <Link href="/">
              ← Back to home
            </Link>
          </Box>
        )}
      </Container>
    </>
  );
}
