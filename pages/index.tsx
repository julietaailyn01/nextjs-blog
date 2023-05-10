import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { Box, Heading, Text } from '@chakra-ui/react';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box py="4">
        <Heading as="h5" size="3" textAlign="center">
        ¡Hola! Soy Juli, una apasionada programadora en constante aprendizaje. Me especializo en construir sitios web y aplicaciones y actualmente estoy enfocada en aprender Next.js, TypeScript y Chakra UI.
        </Heading>
        <Text textAlign="center" mt="4">
         
(Este es un sitio web de ejemplo ♥  - 
<Link href="https://nextjs.org/learn">
tutorial de Next.js
</Link>
.)
        </Text>
      </Box>
      <Box py="8">
        <Heading as="h2" size="xl" mb="4">
          Blog
        </Heading>
        <Box as="ul" listStyleType="none" p="0">
          {allPostsData.map(({ id, date, title }) => (
            <Box as="li" key={id} mb="4">
              <Link href={`/posts/${id}`}>
                
                  <Heading as="h3" size="lg">
                    {title}
                  </Heading>
                
              </Link>
              <Text fontSize="sm" color="gray.500">
                <Date dateString={date} />
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  );
}
