import React, { useEffect } from "react";
import CustomDropdown from "./CustomDropdown";
import CustomInput from "./CustomInput";
import { StyledPricing } from "./styles/Pricing.styled";

function Pricing({
  index,
  errors,
  control,
  watchFields,
  setValue,
}) {
  const totalPiece = watchFields.products[index].textures.reduce(
    (totalPiece, currentValue) => totalPiece + parseInt(currentValue.quantity),
    0
  );

  useEffect(() => {
    setValue(`products[${index}].pricing.totalPiece`, totalPiece);
  }, [totalPiece]);

  const totalCost = watchFields.products[index].pricing.cost * totalPiece;

  useEffect(() => {
    setValue(`products[${index}].pricing.totalCost`, totalCost);
  }, [totalCost]);

  const unitSizeDataOptions = [
    { value: "Ölçü Bir", label: "Ölçü Bir" },
    { value: "Ölçü İki", label: "Ölçü İki" },
    { value: "Ölçü Üç", label: "Ölçü Üç" },
  ];

  const currencyUnitRateDataOptions = [
    { value: "TL", label: "TL" },
    { value: "DOLAR", label: "DOLAR" },
    { value: "EURO", label: "EURO" },
  ];

  const registerName = `products[${index}].pricing`;
  return (
    <StyledPricing>
      <div className="header">
        <div>TOPLAM ADET</div>
        <div>BİRİM (ÖLÇÜ)</div>
        <div>FİYAT</div>
        <div>BİRİM (PARA)</div>
        <div>TOPLAM</div>
      </div>
      <div className="grid5x2">
        <div className="num-input">
          <CustomInput
            registerName={`${registerName}.totalPiece`}
            control={control}
            placeholder={"0"}
            errors={errors}
            type="number"
            readOnly="readOnly"
          />
        </div>
        <div>
          <CustomDropdown
            registerName={`${registerName}.unitSize`}
            control={control}
            options={unitSizeDataOptions}
            errors={errors}
            placeholder="Seçiniz"
            errorMessage="Ölçü Seçiniz!"
          />
        </div>
        <div className="num-input">
          <CustomInput
            registerName={`${registerName}.cost`}
            control={control}
            type={"number"}
            placeholder={"0"}
            errors={errors}
            errorMessage="Fiyat giriniz!"
            validationMessage="Fiyat 0'dan büyük olmalı"        
          />    
        </div>
        <div>
          <CustomDropdown
            registerName={`${registerName}.currencyUnit`}
            control={control}
            options={currencyUnitRateDataOptions}
            placeholder={"Seçiniz"}
            errors={errors}
            errorMessage="Para birimi seçiniz!"
          />
        </div>
        <div className="num-input">
          <CustomInput
            registerName={`${registerName}.totalCost`}
            control={control}
            placeholder={"0"}
            errors={errors}
            readOnly="readOnly"   
          />
        </div>
        
      </div>
    </StyledPricing>
  );
}

export default Pricing;
