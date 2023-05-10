import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import Image from "next/image";
import Link from "next/link";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import JuliImage from '../../utils/images/Juli.jpg';

export default function Post({ postData }) {
  return (
    <>
     <Box as="header" bg="gray.100" py="6">
  <Box mx="auto" bg="white" borderRadius="50%" overflow="hidden" height="144px" width="144px">
    <Image
      priority
      src={JuliImage}
      alt=""
      layout="responsive"
      width={144}
      height={144}
    />
  </Box>
</Box>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Box maxW="3xl" mx="auto" py="6" px="4">
        <Heading as="h1" fontSize="4xl" fontWeight="bold" mb="4">
          {postData.title}
        </Heading>
        <Text fontSize="lg" color="gray.500" mb="2">
          <Date dateString={postData.date} />
        </Text>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
