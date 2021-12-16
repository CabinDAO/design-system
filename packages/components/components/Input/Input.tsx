import React from "react";
import { styled } from "../../stitches.config";
import Label from "../Label";

export interface IInputProps {
  tabIndex?: number;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  name?: string;
  value?: string;
  description?: string;
  onChange?: () => void;
  required?: boolean;
  error?: string;
}

const Input = ({ label, description, required, error, ...props }: IInputProps) => {
  return (
    <Label 
      label={label} 
      description={description}
      required={required}
      error={error}
    >
      <InputContainer 
        {...props}
      />
    </Label>
  );
}

const InputContainer = styled("input", {
  display: "flex",
  flex: 1,
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "$forest",
  height: '$10',
  py: 0,
  px: '$3',
  fontSize: "$base",
  color: "$forest",
  outline: "none",
  transition: "all 0.2s ease-in-out",
  background: "transparent",
  "&:focus": {
    boxShadow: "0px 0px 0px 1px $colors$forest",
  },
  "&::placeholder": {
    color: "$forest",
    fontStyle: "italic",
    opacity: 0.75,
    fontWeight: 200,
  },
  variants: {
    disabled: {
      true: {
        borderColor: "$wheat",
        cursor: "not-allowed",
        backgroundColor: "#FFEED9",
        "&:focus": {
          boxShadow: "none",
        },
      },
    },
  },
});

export default Input;