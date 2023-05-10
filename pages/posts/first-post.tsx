
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/Layout";
import Image from "next/image";
import { Box, Heading, Link } from "@chakra-ui/react";
import JuliImage from '../../utils/images/Juli.jpg';



export default function FirstPost() {
    return (
        <>
        <header>
          <Link href="/">
          <Box borderRadius="50%" overflow="hidden">
      <Image
        priority
        src={JuliImage}
        height={144}
        width={144}
        alt=""
      />
    </Box>
          </Link>
        </header>
        <Head>
          <title>First Post</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() => console.log("script loaded correctly")}
        />
        <Box maxW="80ch" mx="auto" px={4}>
          <Heading as="h1" fontSize="4xl" mt={8}>
            First Post
          </Heading>
          <Link href="/" mt={4} display="inline-block">
            Back Home
          </Link>
        </Box>
      </>
    );
}