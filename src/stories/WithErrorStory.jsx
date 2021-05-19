import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../example/Style/InputWithStyle';
import withError from '../example/hoc/withError';

const InputWithError = withError('올바르지 못한 값입니다')(Input);

storiesOf('WithError', module)
  .add('기본설정', () => <InputWithError name="name" hasError />)
  .add('errorMessage 예제', () => (
    <div>
      <InputWithError name="name" hasError errorMessage="필수항목입니다." />
    </div>
  ));
