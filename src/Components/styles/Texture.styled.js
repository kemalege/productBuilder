import styled from "styled-components";

export const StyledTexture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 75px;

  .header {
    display: flex;
    flex-direction: row;
  }

  .header > div {
    margin-left: 30px;
    margin-right: 30px;
  }
  .header > div:nth-child(1) {
    margin-left: 15px;
  }
  .header > div:nth-child(5) {
    margin-left: 20px;
  }

  .grid-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .grid-item > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    margin-left: 15px;
    margin-right: 15px;
  }

  .grid-item > div > div {
      display: flex;
      flex-direction: column;
      padding: 5px;
  
  }
  .numInput > input {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 60px;
    height: 40px;
    padding: 4px;
  }
  .remove-button {
    width: 25px;
    height: 25px;
    color: white;
    background-color: #ff5154;
    border: none;
    border-radius: 50%;
  }
  .add-item {
    display: flex;
    justify-content: center;
    border: 1px solid black;
    background-color: #9597a1;
    width: 100px;
    height: 25px;
    border-radius: 15px;
    margin-top: 10px;
    margin-right: 15px;

    & button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      background-color: #9597a1;
      border-radius: 8px;
      width: 10px;
      color: white;
    }
  }
`;
