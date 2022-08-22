import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { ErrorMessage } from '@hookform/error-message';
import { StyledErrorMessage } from "./styles/ErrorMessage.styled";

function CustomDropdown({
  registerName,
  control,
  options,
  placeholder,
  errors,
  errorMessage,
  customStyles
}) {
  return (
    
      <Controller
        name={registerName}
        rules={{ required: `${errorMessage}` } }
        control={control}
        render={({ field: { onChange, value, ref } }) => {
          const currentSelection = options.find((o) => o.value === value);
          const handleSelectChange = (selectedOption) => {
            onChange(selectedOption?.value);
          };
          return (
            <>
              <Select
                styles={customStyles}
                value={currentSelection}
                options={options}
                onChange={handleSelectChange}
                type="text"
                placeholder={placeholder}
              />
              <ErrorMessage
                errors={errors}
                name={registerName}
                render={({ message }) => <StyledErrorMessage>{message}</StyledErrorMessage>}
              />
            </>
          );
        }}
      />
    
  );
}

export default CustomDropdown;
