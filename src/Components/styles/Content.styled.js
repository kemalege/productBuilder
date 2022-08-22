import styled from "styled-components";

export const StyledContent = styled.div`
  margin: 10px;
  border: 1px solid #a5a4a7;
  border-radius: 3px;
  background-color: #d3d2d6;
  padding: 2px;

  .grid2x2 {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .grid2x2 > div {
    display: flex;
    flex-direction: column;
    padding: 2px;
  }
  .grid2x2 > div > div {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 2px;
    flex-direction: row;
  }
  .grid2x2 > div > div.grid-1 {
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    padding: 2px;
    flex-direction: column;
    height: 80px;
    width: 125px;
    
  }

  .grid2x2 > div > div.grid-2 {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2px;
    height: 50px;
    width: 88px;
  }

  .grid2x2 > div > div.toptext {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .grid2x2 > div > div > div {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 2px;
    flex-direction: row;
    align-items: center;
  }

  input {
    box-sizing: border-box;
    width: 80px;
    border: 1px solid #a5a4a7;
    border-radius: 3px;
  }
  div.content-header {
    padding: 5px;

    display: flex;
    justify-content: center;
  }
  div.content-header > input {
    box-shadow: inset 0px 0px 2px 2px rgba(0, 0, 0, 0.5);
    width: 100%;
    text-align: center;
    height: 35px;
    background-color: #F5F4F7;
    border: 2px solid #a5a4a7;
  }

  p {
    font-size: 12px;
    margin: 0px;
    
  }
  /* 
  .contentFeatures {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
  }
  .a {
    display: flex;
    width: 40%;
  } */
`;
