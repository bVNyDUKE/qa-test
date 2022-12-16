import { helloWrapper } from '@/utils/helloWrapper';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col space-y-10 justify-center items-center">
      <div className="text-white text-3xl">Welcome</div>
      <Link className="dark:text-white border border-gray-400 rounded-lg p-5" to="/posts">
        Go to posts
      </Link>
    </div>
  );
}

export default helloWrapper(HomePage);
