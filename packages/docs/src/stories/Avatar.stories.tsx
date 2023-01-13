import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@garden-ui/react";

export default {
  title: "Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/lucasvilela.png",
    alt: "Lucas"
  }
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: "Lucas"
  }
};
