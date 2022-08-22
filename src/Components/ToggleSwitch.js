import React from "react";

import { StyledToggleSwtich } from "./styles/ToggleSwitch.styled";
import { Controller } from "react-hook-form";

function ToggleSwitch({ isToggled, onToggle, registerName , control}) {
  return (
    <Controller
    name={registerName}
    control={control}
    render={({ field: { onChange, value, ref } }) => {
      
        
    return (<StyledToggleSwtich>
      <label className="switch">
        <input
          type="checkbox"
          checked={isToggled}
          onChange={onToggle}
          name={registerName}
        />
        <span className="slider round"></span>
      </label>
    </StyledToggleSwtich>)
      }}
    />
  );
}

export default ToggleSwitch;
