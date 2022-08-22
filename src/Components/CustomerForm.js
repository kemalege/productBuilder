import React from "react";
import CustomDropdown from "./CustomDropdown";
import { StyledCustomerForm } from "./styles/CustomerForm.styled";
import { StyledCustomerInput } from "./styles/CustomerInput.styled";
import CustomInput from "./CustomInput";
import { CustomerHeader } from "./styles/CustomerInputHeader.styled";

function CustomerForm({ errors, control }) {
  const deliveryOptions = [
    { value: "Teslim Bir", label: "Teslim Bir" },
    { value: "Teslim İki", label: "Teslim İki" },
    { value: "Teslim Üç", label: "Teslim Üç" },
  ];
  const dealerOptions = [
    { value: "Satıcı Bir", label: "Satıcı Bir" },
    { value: "Satıcı İki", label: "Satıcı İki" },
    { value: "Satıcı Üç", label: "Satıcı Üç" },
  ];
  const bankOptions = [
    { value: "Banka Bir", label: "Banka Bir" },
    { value: "Banka İki", label: "Banka İki" },
    { value: "Banka Üç", label: "Banka Üç" },
  ];
  const paymentMethodOptions = [
    { value: "Nakit", label: "Nakit" },
    { value: "Kredi Kartı", label: "Kredi Kartı" },
    { value: "Cüzdan", label: "Cüzdan" },
  ];
  return (
    <StyledCustomerForm>
      <StyledCustomerInput>
        <CustomerHeader>ALICI ADI</CustomerHeader>
        <CustomInput
          registerName={"receiverName"}
          control={control}
          placeholder={"Alcı adı..."}
          errors={errors}
          type="text"
          errorMessage="Alıcı Adı Giriniz!"
        />
      </StyledCustomerInput>

      <StyledCustomerInput>
        <CustomerHeader>ALICI CARİ KOD</CustomerHeader>
        <CustomInput
          registerName={"currentCode"}
          control={control}
          placeholder={"Cari kod..."}
          errors={errors}
          type="text"
          errorMessage="Alıcı Cari Kodu Giriniz!"
        />
      </StyledCustomerInput>

      <StyledCustomerInput>
        <CustomerHeader>TESLİM</CustomerHeader>
        <CustomDropdown
          registerName={`delivery`}
          control={control}
          options={deliveryOptions}
          placeholder={"Seçiniz..."}
          errors={errors}
          errorMessage="Teslimat Seçiniz!"
        />
      </StyledCustomerInput>

      <StyledCustomerInput>
        <CustomerHeader>TESLİM İÇİN ÖZEL KOD</CustomerHeader>
        <CustomInput
          registerName={"deliveryCode"}
          control={control}
          placeholder={"Teslim için özel kod..."}
          errors={errors}
          type="text"
          errorMessage="Teslimat İçin Özel Kod Giriniz!"
        />
      </StyledCustomerInput>
      <StyledCustomerInput>
        <CustomerHeader>SATICI</CustomerHeader>
        <CustomDropdown
          registerName={`dealer`}
          control={control}
          options={bankOptions}
          placeholder={"Seçiniz..."}
          errors={errors}
          errorMessage="Satıcı Seçiniz!"
        />
      </StyledCustomerInput>
      <StyledCustomerInput>
        <CustomerHeader>BANKA</CustomerHeader>
        <CustomDropdown
          registerName={`bank`}
          control={control}
          options={dealerOptions}
          placeholder={"Seçiniz..."}
          errors={errors}
          errorMessage="Banka Seçiniz!"
        />
      </StyledCustomerInput>
      <StyledCustomerInput>
        <CustomerHeader>ÖDEME</CustomerHeader>
        <CustomDropdown
          registerName={`paymentMethod`}
          control={control}
          options={paymentMethodOptions}
          placeholder={"Seçiniz..."}
          errors={errors}
          errorMessage="Ödeme Yöntemi Seçiniz!"
        />
      </StyledCustomerInput>
      <StyledCustomerInput>
        <CustomerHeader>FATURA NO</CustomerHeader>
        <CustomInput
          registerName={"invoice"}
          control={control}
          placeholder={"Fatura no..."}
          errors={errors}
          type="text"
          errorMessage="Fatura No. Giriniz!"
        />
      </StyledCustomerInput>
    </StyledCustomerForm>
  );
}

export default CustomerForm;
