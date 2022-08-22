import React from "react";
import CustomDropdown from "./CustomDropdown";
import CustomInput from "./CustomInput";

function TextureItems({ index, errors, control, sub_index, selected }) {
  const groupDataOptions = [
    { value: "Grup Bir", label: "Grup Bir" },
    { value: "Grup İki", label: "Grup İki" },
    { value: "Grup Üç", label: "Grup Üç" },
  ];
  const figureDataOptions = [
    { value: "Desen Bir", label: "Desen Bir" },
    { value: "Desen İki", label: "Desen İki" },
    { value: "Desen Üç", label: "Desen Üç" },
  ];
  const colourDataOptions = [
    { value: "Renk Bir", label: "Renk Bir" },
    { value: "Renk İki", label: "Renk İki" },
    { value: "Renk Üç", label: "Renk Üç" },
  ];

  const registerName = `products[${index}].textures.[${sub_index}]`;
  return (
    <div>
      <div>
        <CustomDropdown
          registerName={`${registerName}.group`}
          control={control}
          options={groupDataOptions}
          placeholder={"Grup yok"}
          errors={errors}
          errorMessage="Grup Seçiniz!"
        />
      </div>
      <div>
        <CustomDropdown
          registerName={`${registerName}.figure`}
          control={control}
          options={figureDataOptions}
          placeholder={"Desen yok"}
          errors={errors}
          errorMessage="Desen Seçiniz!"
        />
      </div>
      <div>
        <CustomDropdown
          registerName={`${registerName}.colour`}
          control={control}
          options={colourDataOptions}
          placeholder={"Renk yok"}
          errors={errors}
          errorMessage="Renk Seçiniz!"
        />
      </div>
      <div className="numInput">
        <CustomInput
          registerName={`${registerName}.quantity`}
          control={control}
          errors={errors}
          errorMessage="Miktar 0 dan büyük olmalı"
          type={"number"}
        />
      </div>
    </div>
  );
}
export default TextureItems;
