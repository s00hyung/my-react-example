import React from 'react';
import { storiesOf } from '@storybook/react';

import HomePageComponent from '../example/Context/HomePageComponent';
import HomePageWithProvider from '../example/Context/HomePageWithProvider';

storiesOf('HomePageComponent', module)
  .add('컨텍스트 예제', () => <HomePageComponent />)
  .add('Provider 예제', () => <HomePageWithProvider />);
