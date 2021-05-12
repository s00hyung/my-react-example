import { configure, setAddon } from '@storybook/react';
import interopRequiredDefault from 'babel-runtime/helpers/interopRequireDefault';

function loadStories() {
  const context = require.context('../src/stories', true, /Story\.jsx$/);
  context.keys().forEach((srcFile) => {
    interopRequiredDefault(context(srcFile));
  });
}

configure(loadStories, module);
