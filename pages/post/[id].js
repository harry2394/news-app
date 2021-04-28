import { useEffect, useState } from 'react';
import fire from '../../config/config';
import Link from 'next/link';
import Layout from '../../components/layout';
import PostContainer from '../../components/postContainer';

const Post = (props) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fire
      .firestore()
      .collection('Posts')
      .doc(props.id)
      .get()
      .then((result) => {
        setPost(result.data());
      });
  }, []);
  if (!post) {
    return (
      <Layout>
        <h2>Loading...</h2>;
      </Layout>
    );
  }
  return (
    <Layout>
      <PostContainer>
        <div>
          <h2 className="text-3xl font-bold text-black">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      </PostContainer>
      <Link href="/">
        <a className="text-2xl font-bold text-black">Back</a>
      </Link>
    </Layout>
  );
};
Post.getInitialProps = ({ query }) => {
  return {
    id: query.id,
  };
};
export default Post;
