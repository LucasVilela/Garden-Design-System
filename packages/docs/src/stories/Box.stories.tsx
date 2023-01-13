import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@garden-ui/react";

export default {
  title: "Box",
  component: Box,
  args: {
    children: <Text>Box Element</Text>
  }
} as Meta;

export const Primary: StoryObj<BoxProps> = {};
