import Post from '@/components/Post';
import DebouncedInput from '@/components/DebouncedInput';
import Magnifier from '@/components/Icons/Magnifier';
import { usePosts } from '@/store';
import { Link } from 'react-router-dom';
import Message from '@/components/Message';
import { helloWrapper } from '@/utils/helloWrapper';

function PostListPage() {
  const {
    state: { users, paginatedPosts, pageCount, page, comments, loading, error, filter },
    dispatch,
  } = usePosts();

  if (loading) {
    return <Message text="Loading" />;
  }

  if (error) {
    return <Message text="An error occured" />;
  }

  return (
    <div className="container mx-auto p-10 flex flex-col items-center space-y-5">
      <div>
        <DebouncedInput
          onStateChange={(f: string) => dispatch({ type: 'SET_FILTER', payload: f })}
          placeholder="Search posts by username"
          defaultValue={filter}
          icon={<Magnifier />}
        />
      </div>
      {paginatedPosts.map((post) => {
        const username = users.find((u) => u.id === post.userId)?.username;
        const postComments = comments.filter((c) => c.postId === post.id);
        return (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <Post
              title={post.title}
              comments={postComments}
              body={post.body}
              username={username}
            />
          </Link>
        );
      })}
      <div className="space-x-5">
        <button
          className="text-white border-white border p-2"
          disabled={page === 1}
          onClick={() => dispatch({ type: 'SET_PAGE', payload: 1 })}
        >
          First
        </button>
        <button
          className="text-white border-white border p-2"
          disabled={page === 1}
          onClick={() => dispatch({ type: 'SET_PAGE', payload: page - 1 })}
        >
          Previous
        </button>
        <div className="text-white border-white border p-2 text-center inline">
          {page} of {pageCount}
        </div>
        <button
          className="text-white border-white border p-2"
          disabled={page === pageCount}
          onClick={() => dispatch({ type: 'SET_PAGE', payload: page + 1 })}
        >
          Next
        </button>
        <button
          className="text-white border-white border p-2"
          disabled={page === pageCount}
          onClick={() => dispatch({ type: 'SET_PAGE', payload: pageCount })}
        >
          Last
        </button>
      </div>
    </div>
  );
}

export default helloWrapper(PostListPage);
