import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { StyledSelection } from "./styles/Selections.styled";
import CustomDropdown from "./CustomDropdown";
import { SelectionHeader } from "./styles/SelectionInputHeader.styled";
import { StyledSelectionInput } from "./styles/SelectionInput.styled";
import { SectionHeader } from "./styles/ProductSectionHeader.styled";

function Selections({
  index,
  errors,
  append,
  remove,
  control,
  fields,
}) {
  const [contentNames] = useState([
    "NEVRESİM",
    "ÇARŞAF",
    "STD. YASTIK KILIFI",
    "OXF. YASTIK KILIFI",
    "KIRLENT KILIFI",
  ]);

  const brandDataOptions = [
    { value: "Marka Bir", label: "Marka Bir" },
    { value: "Marka İki", label: "Marka İki" },
    { value: "Marka Üç", label: "Marka Üç" },
  ];

  const sizeDataOptions = [
    { value: "Beden Bir", label: "Beden Bir" },
    { value: "Beden İki", label: "Beden İki" },
    { value: "Beden Üç", label: "Beden Üç" },
  ];

  const productTypeDataOptions = [
    { value: "Ürün Cinsi Bir", label: "Ürün Cinsi Bir" },
    { value: "Ürün Cinsi İki", label: "Ürün Cinsi İki" },
    { value: "Ürün Cinsi Üç", label: "Ürün Cinsi Üç" },
  ];

  const packageTypeDataOptions = [
    { value: "Ambalaj Bir", label: "Ambalaj Bir" },
    { value: "Ambalaj İki", label: "Ambalaj İki" },
    { value: "Ambalaj Üç", label: "Ambalaj Üç" },
  ];

  const registerName = `products[${index}]`;

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      
      border: "1px solid black"
    }),
    valueContainer: (state) => ({
      ...state,
    }),

    input: (state) => ({
      ...state,
    }),

    indicatorsContainer: (state) => ({
      ...state,
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles };
    },
    singleValue: (styles, { data }) => {
      return { ...styles };
    },
  };

  return (
    <StyledSelection>
      <SectionHeader>SEÇİMLER</SectionHeader>

      <StyledSelectionInput>
        <SelectionHeader>Marka:</SelectionHeader>
        <CustomDropdown
          registerName={`${registerName}.brand`}
          customStyles={customStyles}
          control={control}
          options={brandDataOptions}
          placeholder={"Marka Seçiniz..."}
          errors={errors}
          errorMessage="Marka Seçiniz!"
        />
      </StyledSelectionInput>

      <StyledSelectionInput>
        <SelectionHeader>Beden:</SelectionHeader>
        <CustomDropdown
          registerName={`${registerName}.size`}
          customStyles={customStyles}
          control={control}
          options={sizeDataOptions}
          placeholder={"Beden Seçiniz..."}
          errors={errors}
          errorMessage="Beden Seçiniz!"
        />
      </StyledSelectionInput>
      <StyledSelectionInput>
        <SelectionHeader>Ürün Cinsi:</SelectionHeader>
        <CustomDropdown
          registerName={`${registerName}.productType`}
          customStyles={customStyles}
          control={control}
          options={productTypeDataOptions}
          placeholder={"Ürün Cinsi Seçiniz..."}
          errors={errors}
          errorMessage="Ürün Cinsi Seçiniz!"
        />
      </StyledSelectionInput>
      <StyledSelectionInput>
        <SelectionHeader>İçerikler:</SelectionHeader>
        <Multiselect
          options={contentNames}
          onKeyPressFn={function noRefCheck() {}}
          onSearch={function noRefCheck() {}}
          isObject={false}
          onRemove={(selectedList, itemtobeRemoved) => {
            remove(
              fields.map((item) => item.contentName).indexOf(itemtobeRemoved)
            );
          }}
          onSelect={(selectedList, selectedItem) => {
            append({
              contentName: selectedItem,
            });
          }}
          placeholder="İçerik Seç"
          avoidHighlightFirstOption={true}
          showCheckbox
          displayValue="value"
          style={{
            background: "white",
            searchBox: {
              
              minHeight: "38px",
              border: "1px solid #374151",
              background: "white",
              
            },
            inputField: {
              fontSize: "16px",
            }
          }}
        />
      </StyledSelectionInput>
      <StyledSelectionInput>
        <SelectionHeader>Ambalaj:</SelectionHeader>
        <CustomDropdown
          registerName={`${registerName}.packageType`}
          customStyles={customStyles}
          control={control}
          options={packageTypeDataOptions}
          placeholder={"Ambalaj Seçiniz..."}
          errors={errors}
          errorMessage="Ambalaj Seçiniz!"
        />
      </StyledSelectionInput>
    </StyledSelection>
  );
}

export default Selections;
