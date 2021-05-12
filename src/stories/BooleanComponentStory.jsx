import React from 'react';
import { storiesOf } from '@storybook/react';

import BooleanComponent from '../example/Component/BooleanComponent';

storiesOf('BooleanComponent', module)
  .add('기본설정', () => <BooleanComponent />)
  .add('bored 설정', () => <BooleanComponent bored />);
