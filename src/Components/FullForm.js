import React from "react";
import {
  useFieldArray,
  useForm,
} from "react-hook-form";

import { StyledProduct } from "./styles/Product.styled";
import CustomerForm from "./CustomerForm";
import Product from "./Product";
import CostFooter from "./CostFooter";
import { AddProductButton } from "./styles/AddProductButton.styled";
import { PrintDataButton } from "./styles/PrintDataButton.styled";

function FullForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      products: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  const watchFields = watch();

  const submitForm = (data) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <CustomerForm errors={errors} register={register} control={control} />

      <AddProductButton
        type="button"
        onClick={() =>
          append({
            brand: "",
            size: "",
            productType: "",
            content: [],
            packageType: "",
            textures: [],
            pricing: {
              cost: 0,
              currencyUnit: "",
              totalCost: 0,
              unitSize: "",
            },
          })
        }
      >
        ÜRÜN EKLE
      </AddProductButton>
      <PrintDataButton type="submit" />
      <StyledProduct>
        {fields.map((field, index) => {
          return (
            <div key={field.id} className="mainDiv">
              <div>
                <div className="header">ID</div>
                <div className="header">{index}</div>
                <div className="removeButton">
                  <button type="button" onClick={() => remove(index)}>
                    SİL
                  </button>
                </div>
              </div>

              <Product
                setValue={setValue}
                watchFields={watchFields}
                control={control}
                index={index}
                register={register}
                errors={errors}
              />
            </div>
          );
        })}
      </StyledProduct>
      <CostFooter fields={fields} watchFields={watchFields} />
    </form>
  );
}

export default FullForm;
