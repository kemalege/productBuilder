import styled from "styled-components";

export const StyledPricing = styled.div`
  margin-left: 50px;
  .grid5x2 {
    display: flex;
    flex-direction: row;
    
  }
  .grid5x2 > div {
    display: flex;
    flex-direction: column;
    padding: 2px;

    margin-left: 15px;
    margin-right: 15px;
    justify-content: space-between;
  }

  .header {
    display: flex;
    flex-direction: row;
  }
  .header > div {
    margin-left: 30px;
    margin-right: 30px;
    max-width: 50px;
    text-align: center;
  }
  .num-input > input {
    box-sizing: border-box;
    border: none;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    width: 60px;
    height: 40px;
    padding: 4px;
  }
`;
