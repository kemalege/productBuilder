import React from "react";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { StyledErrorMessage } from "./styles/ErrorMessage.styled";
import  OnlyNumber from "../utils/OnlyNumber"
import  OnlyText from "../utils/OnlyText"

function CustomInput({registerName, control,placeholder, errorMessage,
  type, defaultValue, readOnly, errors, validationMessage} ) {   
    
  return (
    <Controller
      name={registerName}
      rules={{ required: `${errorMessage}` , min: {
        value: 1,
        message:  validationMessage ? `${validationMessage}`: " "
      }}}
      control={control}
      
      render={({ field: { onChange, value } }) => {

        const min = 0;

        const handleSelectChange = (e) => {
          const numVal = Math.max(min,(Number(e.target.value)));
          onChange(!isNaN(+e.target?.value) ? numVal : e.target?.value);
        };
        
        return (
          <>
            <input
              type={type}
              onChange={handleSelectChange}
              value={value ? value : ""}
              placeholder={placeholder}
              name={registerName}
              readOnly = {readOnly}
              onKeyDown={type === "number" ? OnlyNumber : OnlyText}
              
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
export default CustomInput;