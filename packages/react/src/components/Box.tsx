import { ComponentProps } from "@stitches/react";
import { styled } from "../styles";

export const Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray700"
});

export interface BoxProps extends ComponentProps<typeof Box> {
  children: React.ReactNode;
}
