import React from "react";
import CustomDropdown from "./CustomDropdown";
import { StyledContent } from "./styles/Content.styled";

function ReadySize({
  registerName,
  control,
  stitchOptions,
  errors,
  errorMessage,
  placeholder,
}) {
  return (
    
      <CustomDropdown
        registerName={registerName}
        control={control}
        options={stitchOptions}
        placeholder={placeholder}
        errors={errors}
        errorMessage={errorMessage}
      />
    
  );
}
export default ReadySize;
