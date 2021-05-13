import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../example/Style/Button';

storiesOf('Button', module)
  .add('기본설정', () => <Button>안녕하세요</Button>)
  .add('large', () => <Button large>안녕하세요</Button>)
  .add('xlarge', () => <Button xlarge>안녕하세요</Button>)
  .add('small', () => <Button small>안녕하세요</Button>)
  .add('primary', () => <Button primary>안녕하세요</Button>)
  .add('secondary', () => <Button secondary>안녕하세요</Button>)
  .add('primary large', () => (
    <Button primary large>
      안녕하세요
    </Button>
  ));
