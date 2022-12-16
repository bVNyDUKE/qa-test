import { helloWrapper } from '@/utils/helloWrapper';

const DarkMode = () => {
  const toggleDarkMode = () => {
    let root = document.documentElement.classList;
    if (root.contains('dark')) {
      root.remove('dark');
    } else {
      root.add('dark');
    }
  };

  return (
    <svg
      onClick={toggleDarkMode}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-3 hover:cursor-pointer dark:text-white transition-colors ease-in-out duration-1000"
      fill="currentColor"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
};

export default helloWrapper(DarkMode);
