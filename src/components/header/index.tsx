import Link from 'next/link';
import { useState } from 'react';
import * as styled from './styles';

export const Header = () => {
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsButtonClick = () => {
    setShowSettings((prevState) => !prevState);
  };

  return (
    <styled.Header>
      <Link href="/">
        <styled.Link href="/">Recipes</styled.Link>
      </Link>
      <styled.Buttons>
        <styled.SettingsButton onClick={handleSettingsButtonClick}>
          <styled.Icon
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 640 640"
          >
            <title>Settings</title>
            <path
              fill="#ffffff"
              d="M537.056 320c0-33.568 20.672-60 51.744-78.176-5.632-18.688-13.024-36.64-22.144-53.504-34.848 9.12-63.040-4.512-86.752-28.256-23.712-23.68-30.976-51.872-21.856-86.752-16.864-9.12-34.816-16.576-53.504-22.112-18.176 31.040-51.040 51.68-84.544 51.68-33.536 0-66.368-20.64-84.576-51.68-18.72 5.536-36.608 12.992-53.472 22.112 9.12 34.88 1.888 63.072-21.888 86.752-23.68 23.744-51.872 37.376-86.752 28.256-9.12 16.864-16.544 34.816-22.112 53.504 31.040 18.176 51.68 44.608 51.68 78.176 0 33.504-20.64 66.368-51.68 84.576 5.6 18.688 12.992 36.608 22.112 53.504 34.88-9.12 63.072-1.888 86.752 21.824 23.712 23.744 31.008 51.936 21.888 86.752 16.864 9.12 34.784 16.576 53.504 22.176 18.176-31.136 51.040-51.744 84.576-51.744 33.504 0 66.368 20.64 84.576 51.744 18.688-5.632 36.608-13.056 53.504-22.176-9.12-34.816-1.888-63.008 21.856-86.752 23.712-23.68 51.904-37.312 86.752-28.256 9.12-16.864 16.544-34.752 22.144-53.504-31.136-18.208-51.808-44.64-51.808-78.144zM320 436.864c-64.576 0-116.896-52.32-116.896-116.864 0-64.576 52.352-116.928 116.896-116.928 64.576 0 116.864 52.384 116.864 116.928 0 64.576-52.288 116.864-116.864 116.864z"
            />
          </styled.Icon>
          Settings
        </styled.SettingsButton>
      </styled.Buttons>
      {showSettings && <styled.Popover>Settings</styled.Popover>}
    </styled.Header>
  );
};
