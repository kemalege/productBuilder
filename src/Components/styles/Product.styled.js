import styled from "styled-components";

export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 1920px;
  
  .content-div {
    width : 250px;
  }

  .mainDiv {
    display: flex;
    background-color: #e4e4e7;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px 10px 0px 10px;
  }
  .inputDiv {
    display: flex;
    flex-direction: column;
    border: none;
    width: 18vh;
    padding: 10px;
  }

  .selectedItem {
    display: flex;
    flex-direction: column;
  }
  .header {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: none;
    padding: 10px;
    display: flex;
    border: none;
    padding: 10px;
    align-items: center;
  }

  .removeButton {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: none;
    padding: 10px;
    display: flex;
    border: none;
    padding: 10px;
    align-items: center;
    & button {
      border: 1px solid black;
      border-radius: 5px;
      background-color: #ff5154;
      color: white;
      height: 35px;
      width: 35px;
      font-weight: 500;
      cursor: pointer;
      line-height: 16px;
      text-align: center;
      box-sizing: border-box;
      padding: 8px;
      outline: 0;
      box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
      :hover,
      :active {
        background-color: #ff6567;
        background-position: 0 0;
        color: white;
      }
    }
  }
  
  /* div > div > div > div {
    padding: 0;
    
  } */

  /* .multiselect {
    display: block;
  }
  .multiselect > div {
    display: block;
  } */
  /* .multiselect > ul {
    display: block;;
  } */

  /* .multiselect-container .search-wrapper .searchWrapper .searchBox .optionContainer .optionListContainer .displayNone .multiSelectContainer {
    display: "webkit-box"
    background-color: #D2D3D1;
    border: 1px solid black;
    border-radius: 5px;
  } */

  /* .displayNone{
    display: none;
  }
  .displayBlock{
    display: block;
  }
  .chip {
    display: inline-flex;
    align-items: center;
  } */
`;
