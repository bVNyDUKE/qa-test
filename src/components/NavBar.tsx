import { Link } from 'react-router-dom';
import DarkMode from '@/components/DarkMode';
import { helloWrapper } from '@/utils/helloWrapper';

const NavBar = () => {
  return (
    <nav className="p-6 bg-white dark:bg-blue-950 transition-colors ease-in-out duration-1000">
      <div className="flex justify-between items-center container m-auto">
        <Link to="/posts">
          <h1 className="text-xl font-bold text-blue-955 dark:text-white transition-colors ease-in-out duration-1000">
            QAgency Test - Darko Karapandža
          </h1>
        </Link>
        <div className="font-semibold flex justify-start dark:text-white transition-colors ease-in-out duration-1000">
          <DarkMode />
          Dark Mode
        </div>
      </div>
    </nav>
  );
};

export default helloWrapper(NavBar);
