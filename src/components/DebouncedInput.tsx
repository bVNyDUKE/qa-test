import { helloWrapper } from '@/utils/helloWrapper';
import React, { useRef, useState } from 'react';
import Spinner from '@/components/Icons/Spinner';

interface InputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type'> {
  onStateChange: (s: string) => void;
  activeIcon?: React.ReactNode;
  icon: React.ReactNode;
  timeoutSeconds?: number;
}

const DebouncedInput = ({
  onStateChange,
  timeoutSeconds = 1000,
  activeIcon = <Spinner />,
  icon,
  ...props
}: InputProps) => {
  const [active, setActive] = useState<boolean>();
  const timeout = useRef<NodeJS.Timeout>();

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout.current);
    setActive(true);
    timeout.current = setTimeout(() => {
      onStateChange(e.target.value);
      setActive(false);
    }, timeoutSeconds);
  };

  return (
    <div className="bg-white dark:bg-blue-950 min-w-min w-full lg:w-1/2 h-16 flex items-center space-x-8 rounded-md shadow-md text-gray-950 dark:text-white transition-colors ease-in-out duration-1000">
      <div className="ml-8">{active ? activeIcon : icon}</div>
      <input
        type="text"
        onChange={inputChange}
        {...props}
        className="flex-grow focus:outline-none dark:bg-blue-950 text-grey-950 dark:text-white transition-colors ease-in-out duration-1000"
      />
    </div>
  );
};

export default helloWrapper(DebouncedInput);
