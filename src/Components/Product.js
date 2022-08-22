import React from "react";
import { useFieldArray } from "react-hook-form";
import Content from "./Content";
import Pricing from "./Pricing";
import Selections from "./Selections";
import { SectionHeader } from "./styles/ProductSectionHeader.styled";
import Textures from "./Textures";

function Product({ control, index, register, errors, watchFields, setValue }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `products[${index}].content`,
  });

  return (
    <>
      <Selections
        register={register}
        control={control}
        errors={errors}
        append={append}
        fields={fields}
        index={index}
        remove={remove}
      />

      <div className="content-div">
        <SectionHeader>ÜRÜN İÇERİĞİ</SectionHeader>
        {fields.map((field, sub_index) => {
          return (
            <Content
              selectedItem={field}
              control={control}
              index={index}
              sub_index={sub_index}
              register={register}
              errors={errors}
              key={field.id}
            />
          );
        })}
      </div>
      <Textures
        register={register}
        control={control}
        errors={errors}
        append={append}
        fields={fields}
        index={index}
        remove={remove}
      />
      <Pricing
        setValue={setValue}
        watchFields={watchFields}
        register={register}
        control={control}
        errors={errors}
        append={append}
        fields={fields}
        index={index}
        remove={remove}
      />
    </>
  );
}

export default Product;
