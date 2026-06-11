import type { Preview } from '@storybook/nextjs-vite';
import '../src/styles/themes.css';


const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme switcher',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;

      return (
        <div
          className={`${theme} storybook-wrapper`}
        >
          <Story />
        </div>
      );
    },
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
  },
};

export default preview;