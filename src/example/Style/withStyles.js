import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeINterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import Theme from './Theme';

ThemedStyleSheet.registerTheme(Theme);
ThemedStyleSheet.registerInterface(aphroditeINterface);

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet };
export default withStyles;
