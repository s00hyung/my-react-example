import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../example/Style/Text';

storiesOf('Text', module).add(',기본설정', () => (
  <Text primary>안녕하세요</Text>
));
