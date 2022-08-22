import React from "react";
import { StyledCostFooter } from "./styles/CostFooter.styled";

function CostFooter({ fields }) {
  const totalCostField = fields.reduce((acc, val) => {
    acc[val.pricing.currencyUnit] =
      (acc[val.pricing.currencyUnit] || 0) + parseInt(val.pricing.totalCost);
    return acc;
  }, {});

  return (
    <StyledCostFooter>
      <div>TOPLAM TUTAR:</div>

      {totalCostField && (
        <>
          <div>
            {Object.keys(totalCostField)
              .filter((item) => item)
              .map((key, index) => {
                return (
                  <div key={index}>
                    <div>
                      {totalCostField[key]} {key}
                    </div>
                    <div>{fields[index + 1]?.pricing.currencyUnit && `+`}</div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </StyledCostFooter>
  );
}
export default CostFooter;
