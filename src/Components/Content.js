import React, { useState } from "react";
import { StyledContent } from "./styles/Content.styled";
import CustomDropdown from "./CustomDropdown";
import CustomInput from "./CustomInput";
import ToggleSwitch from "./ToggleSwitch";

function Content({
  selectedItem,
  index,
  sub_index,
  errors,
  control
}) {
  const stitchDataOptions = [
    { value: "Dikiş Bir", label: "Dikiş Bir" },
    { value: "Dikiş İki", label: "Dikiş İki" },
    { value: "Dikiş Üç", label: "Dikiş Üç" },
  ];

  const readySizeDataOptions = [
    { value: "Ebat Bir", label: "Ebat Bir", color: "" },
    { value: "Ebat İki", label: "Ebat İki", color: "" },
    { value: "Ebat Üç", label: "Ebat Üç", color: "" },
  ];

  const readyWeightDataOptions = [
    { value: "Gramaj Bir", label: "Gramaj Bir" },
    { value: "Gramaj İki", label: "Gramaj İki" },
    { value: "Gramaj Üç", label: "Gramaj Üç" },
  ];

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      height: "35px",
      minHeight: "35px",
      fontSize: "14px",
    }),
    valueContainer: (state) => ({
      ...state,
      minHeight: "35px",
      height: "35px",
      padding: "0 6px",
    }),

    input: (state) => ({
      ...state,
      margin: "0px",
    }),

    indicatorsContainer: (state) => ({
      ...state,
      height: "35px",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles };
    },
    singleValue: (styles, { data }) => {
      return { ...styles };
    },
  };

  const [isSizeToggled, setIsSizeToggled] = useState(false);
  const [isWeightToggled, setIsWeightToggled] = useState(false);

  const handleSizeToggle = () => {
    setIsSizeToggled(!isSizeToggled);
  }
  
  const handleWeightToggle = () => {
    setIsWeightToggled(!isWeightToggled);
  }
  
  const registerName = `products[${index}].content[${sub_index}]`;
  return (
    <StyledContent>
      <div className="content-header">
        <input type="text" readOnly value={selectedItem.contentName} />
      </div>
      <div className="grid2x2">
        <div className="leftside">
          {!isSizeToggled ? (
            <div className="grid-1">
              <div>
                <div className="lefttext">BOY:</div>
                <CustomInput
                  registerName={`${registerName}.height`}
                  control={control}
                  errors={errors}
                  placeholder={"cm"}
                  type={"number"}
                  errorMessage="Boy giriniz!"
                  validationMessage={"Boy 0'dan Büyük Olmalı"}
                />
              </div>
              <div>
                <div className="lefttext">EN:</div>
                <CustomInput
                  registerName={`${registerName}.width`}
                  control={control}
                  errors={errors}
                  placeholder={"cm"}
                  type={"number"}
                  errorMessage="En Giriniz!"
                  validationMessage={"En 0'dan Büyük Olmalı"}
                />
              </div>
            </div>
          ) : (
            <div className="grid-1">
              <p>EBAT:</p>
              <CustomDropdown
                customStyles={customStyles}
                registerName={`${registerName}.readySize`}
                control={control}
                options={readySizeDataOptions}
                placeholder={"Seçiniz..."}
                errors={errors}
                errorMessage="Hazır Ebat Seçiniz!"
              />
            </div>
          )}

          <div className="readySize">
            <p>Hazır Ebat</p>
            <ToggleSwitch
              isToggled={isSizeToggled}
              onToggle={handleSizeToggle}
              control={control}
              registerName={`${registerName}.isSizeToggled`}
            />
          </div>

          <div className="toptext">
            <p>DİKİŞ</p>
            <div>
              <CustomDropdown
                customStyles={customStyles}
                registerName={`${registerName}.stitchType`}
                control={control}
                options={stitchDataOptions}
                placeholder={"Seçiniz..."}
                errors={errors}
                errorMessage="Dikiş Seçiniz!"
              />
            </div>
          </div>
        </div>
        <div className="rightside">
          <div className="toptext">
            <p>ADET:</p>
            <div>
              <CustomInput
                registerName={`${registerName}.piece`}
                control={control}
                errors={errors}
                placeholder=""
                type={"number"}
                defaultValue={0}
                errorMessage="Adet Giriniz!"
                validationMessage="Ürün adeti 0'dan Büyük Olmalı"
              />
            </div>
          </div>
          <div>
            <p>Gramaj</p>
            <ToggleSwitch
              isToggled={isWeightToggled}
              onToggle={handleWeightToggle}
              registerName={`${registerName}.isWeightToggled`}
              control={control}
            />
          </div>
          <div className="grid-2">
            {!isWeightToggled ? (
              <CustomInput
                registerName={`${registerName}.weight`}
                control={control}
                errors={errors}
                placeholder=""
                type={"number"}
                defaultValue={0}
                errorMessage="Gramaj Giriniz!"
                validationMessage="Gramaj 0'dan Büyük Olmalı"
              />
            ) : (
              <CustomDropdown
                customStyles={customStyles}
                registerName={`${registerName}.weight`}
                control={control}
                options={readyWeightDataOptions}
                placeholder={"Seçiniz..."}
                errors={errors}
                errorMessage="Gramaj Seçiniz!"
              />
            )}
          </div>
        </div>
      </div>
    </StyledContent>
  );
}
export default Content;
