import styled from "styled-components";

export const StyledToggleSwtich = styled.div `
  .switch {
    position: relative;
    display: inline-block;
    width: 28px;
    height: 15.89px;
  }

  .switch input {
    display: none;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 12.15px;
    width: 12.15px;
    left: 1.87px;
    bottom: 1.87px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(12.15px);
    -ms-transform: translateX(12.15px);
    transform: translateX(12.15px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 15.89px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
