import { useState, useEffect } from 'react';
import fire from '../config/config';
import Link from 'next/link';
import Layout from '../components/layout';
import PostContainer from '../components/postContainer';

function main() {
  const [Post, setPost] = useState([]);
  useEffect(() => {
    fire
      .firestore()
      .collection('Posts')
      .onSnapshot((snap) => {
        const Post = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPost(Post);
      });
  }, []);
  return (
    <div>
      <Layout>
        {Post.map((post) => (
          <PostContainer>
            <Link href="/post/[id]" as={'/post/' + post.id}>
              <a>{post.title}</a>
            </Link>
          </PostContainer>
        ))}
      </Layout>
    </div>
  );
}

export default main;
