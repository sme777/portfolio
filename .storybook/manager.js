import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://www.spetrosyan.com/icon.svg',
    brandTitle: 'Samson Petrosyan Components',
    brandUrl: 'https://www.spetrosyan.com',
  },
});
