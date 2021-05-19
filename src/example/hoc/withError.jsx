import React from 'react';
import withStyles, { css } from '../Style/withStyles';

export default function (defaultMessage) {
  return (WrappedComponent) => {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function ComponentWithError({ hasError, errorMessage, styles, ...props }) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} />
          {hasError && <div {...css(styles.error)}>{errorMessage}</div>}
        </React.Fragment>
      );
    }
    ComponentWithError.defaultProps = {
      errorMessage: defaultMessage,
    };

    ComponentWithError.displayName = `withError(${wrappedComponentName})`;
    return withStyles(({ color }) => ({
      error: {
        color: color.error,
      },
    }))(ComponentWithError);
  };
}
