import type { Meta, StoryObj } from "@storybook/react";

import { CustomSelect } from "./custom-select";

const meta = {
  title: "Components/CustomSelect",
  component: CustomSelect,
  parameters: {
    layout: "centered",
  },
  args: {
    disabled: false,
    placeholder: "Select an options",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
  argTypes: {
    value: { type: "string" },
  },
} satisfies Meta<typeof CustomSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
