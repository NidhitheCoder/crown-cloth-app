import React from "react";
import { spinnerContainer, spinnerOverlay } from "./with-spinner.styles";

const withSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <spinnerOverlay>
        <spinnerContainer />
      </spinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default withSpinner;
