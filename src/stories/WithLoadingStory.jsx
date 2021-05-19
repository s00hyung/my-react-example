import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../example/Style/Button';
import Text from '../example/Style/Text';
import withLoading from '../example/hoc/withLoading';

const TextWithLoading = withLoading('로딩중')(Text);
const ButtonWithLoading = withLoading(<Button disabled>로딩중...</Button>)(
  Button,
);

storiesOf('WithLoading', module)
  .add('기본설정', () => <div></div>)
  .add('isLoading 예제', () => (
    <div>
      <ButtonWithLoading isLoading>안녕하세요</ButtonWithLoading>
      <TextWithLoading isLoading>안녕하세요</TextWithLoading>
    </div>
  ));
