import { Fragment } from "react";
import Hero from "../component/home-page/hero";
import FeaturedPosts from "../component/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  // const dummy = [
  //   {
  //     title: "1T",
  //     image: "getting-started-nextjs.png",
  //     excerpt: "1eeeeeeeeeeeeeeeeeeeee",
  //     date: "2022-10-4",
  //     slug: "s copy 2",
  //   },
  //   {
  //     title: "2T",
  //     image: "getting-started-nextjs.png",
  //     excerpt: "2022-10-4",
  //     date: "2eeeeeeeeeeeeeeeee",
  //     slug: "s copy",
  //   },
  //   {
  //     title: "3T",
  //     image: "getting-started-nextjs.png",
  //     excerpt: "3eeeeeeeeeeeeeeeeeeee",
  //     date: "2022-10-4",
  //     slug: "s",
  //   },
  // ];

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}

export default HomePage;
