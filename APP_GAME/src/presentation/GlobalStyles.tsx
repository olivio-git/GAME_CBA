import React from 'react';
import { css, Global } from '@emotion/react';

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={(theme) => css`
        html {
          --primary-color: ${theme === 'light' ? '#3490dc' : '#ffffff'};
          --secondary-color: ${theme === 'light' ? '#f39c12' : '#ffffff'};
          --text-color: ${theme === 'light' ? '#333' : '#ffffff'};
          --background-color: ${theme === 'light' ? '#f4f4f4' : '#000000'};
        }

        body {
          background-color: var(--background-color);
          color: var(--text-color);
        }
      `}
    />
  );
};

export default GlobalStyles;
