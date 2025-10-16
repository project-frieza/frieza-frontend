import type { Meta, StoryObj } from "@storybook/react";

import SampleComponent from "./SampleComponent";
import { mockData } from "./SampleComponent.mock";
import { SampleComponentParams } from "./SampleComponent.interface";

const meta: Meta<typeof SampleComponent> = {
  title: "Components/Base/SampleComponent",
  component: SampleComponent,
  parameters: {
    layout: "fullscreen centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SampleComponent>;

export const Default: Story = {
  args: {
    title: mockData.title,
  } as SampleComponentParams,
};
