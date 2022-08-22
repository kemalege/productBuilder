import React from "react";
import { useFieldArray } from "react-hook-form";
import { StyledTexture } from "./styles/Texture.styled";
import TextureItems from "./TextureItems";

function Textures({index, errors, control, }) {
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: `products[${index}].textures`,
    defaultValues: {
      [`products[${index}].textures`]: []
    },
  });
  
  return (
    <StyledTexture>
      <div className="header">
        <div>İŞLEM</div>
        <div>GRUPLAR</div>
        <div>DESENLER</div>
        <div>RENKLER</div>
        <div>MİKTAR</div>
      </div>
      {fields.map((field, sub_index) => {
        return (
          <div className="grid-item" key={field.id}>
            <div>
              <button
                className="remove-button"
                type="button"
                onClick={() => remove(sub_index)}
              >
                -
              </button>
            </div>
            <TextureItems
              selected={fields}
              index={index}
              control={control}
              errors={errors}
              sub_index={sub_index}
            />
          </div>
        );
      })}
      <div className="add-item">
        <button type="button" onClick={() => append({
          group: '',
          figure: '',
          colour: '',
          quantity: 0,
        })}>
          +
        </button>
      </div>
    </StyledTexture>
  );
}
export default Textures;
