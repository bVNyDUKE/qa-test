import { helloWrapper } from '@/utils/helloWrapper';
import type { Comment } from '@/types';

const Post = ({
  title,
  body,
  username,
  comments,
}: {
  title: string;
  body: string;
  username?: string;
  comments: Comment[];
}) => {
  return (
    <article className="hover:border-gray-500 hover:dark:border-slate-400 dark:text-white border hover:cursor-pointer transition-colors ease-in-out duration-1000 max-w-md p-3 space-y-4">
      <div>
        <h1 className="font-bold capitalize text-xl">{title}</h1>
        <h2>by {username || 'Unknown'}</h2>
      </div>
      <main>{body}</main>
      <div>
        <h3>Comments:</h3>
        <div className="space-y-3">
          {comments.map((c) => (
            <div className="truncate" key={c.id}>
              {c.email} : {c.body}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default helloWrapper(Post);
