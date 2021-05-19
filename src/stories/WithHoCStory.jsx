import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../example/Style/Button';
import Text from '../example/Style/Text';
import withHoC from '../example/hoc/withHoC';

const ButtonWithHoc = withHoC(Button);
const TextWithHoC = withHoC(Text);

storiesOf('WithHoC', module)
  .add('기본설정', () => (
    <div>
      <ButtonWithHoc>안녕하세요</ButtonWithHoc>
      <TextWithHoC>안녕하세요</TextWithHoC>
    </div>
  ))
  .add('large 예제', () => (
    <div>
      <ButtonWithHoc large>안녕하세요</ButtonWithHoc>
      <TextWithHoC large>안녕하세요</TextWithHoC>
    </div>
  ));
