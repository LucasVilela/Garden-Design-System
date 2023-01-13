import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@garden-ui/react";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Button"
  }
} as Meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    size: "sm"
  }
};

export const Secondary: StoryObj<ButtonProps> = {};
