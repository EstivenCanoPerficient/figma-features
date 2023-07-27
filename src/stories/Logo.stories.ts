import type { Meta, StoryObj } from "@storybook/react";

import { Logo } from "./Logo";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Logo",
  component: Logo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryFullColor: Story = {
  args: {
    type: "primary",
    color: "fullColor",
  },
};

export const SecondaryFullColor: Story = {
  args: {
    type: "secondary",
    color: "fullColor",
  },
};

export const IsotipoFullColor: Story = {
  args: {
    type: "isotipo",
    color: "fullColor",
  },
};

export const PrimaryOneColor: Story = {
  args: {
    type: "primary",
    color: "oneColor",
  },
};

export const SecondaryOneColor: Story = {
  args: {
    type: "secondary",
    color: "oneColor",
  },
};

export const IsotipoOneColor: Story = {
  args: {
    type: "isotipo",
    color: "oneColor",
  },
};

export const PrimaryReserved: Story = {
  args: {
    type: "primary",
    color: "reserved",
  },
};

export const SecondaryReserved: Story = {
  args: {
    type: "secondary",
    color: "reserved",
  },
};

export const IsotipoReserved: Story = {
  args: {
    type: "isotipo",
    color: "reserved",
  },
};
