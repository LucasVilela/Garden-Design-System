import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@garden-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    size: "md",
    children:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam."
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl"
      ],
      control: {
        type: "inline-radio"
      }
    }
  }
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "Strong Heading",
    as: "strong"
  }
};
