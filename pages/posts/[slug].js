import { Fragment } from "react";
import PostContent from "../../component/posts/post-details/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from "next/head";

function PostDetailPage(props) {
  return (
    <Fragment>  
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;

  const postData = getPostData(params.slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 400,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
