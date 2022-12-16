import Post from '@/components/Post';
import { usePosts } from '@/store';
import { useParams } from 'react-router-dom';
import Message from '@/components/Message';
import { helloWrapper } from '@/utils/helloWrapper';

function PostPage() {
  const {
    state: { users, posts, comments, loading, error },
  } = usePosts();

  if (loading) {
    return <Message text="Loading" />;
  }

  if (error) {
    return <Message text="An error occured" />;
  }

  const { postId } = useParams();

  const post = posts.filter((p) => p.id === parseInt(postId ?? ''))?.at(0);

  if (!post) {
    return <Message text="Post not found!" />;
  }

  const username = users.find((u) => u.id === post.userId)?.username ?? 'Unknown user';
  const postComments = post && comments.filter((c) => c.postId === post.id);

  return (
    <div className="container mx-auto p-10 flex flex-col items-center space-y-5">
      <Post
        key={post.id}
        title={post.title}
        comments={postComments}
        body={post.body}
        username={username}
      />
    </div>
  );
}

export default helloWrapper(PostPage);
