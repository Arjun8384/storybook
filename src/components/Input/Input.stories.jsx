import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],

  argTypes: {
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
  },
};

export const Default = {
  args: {
    placeholder: "Enter your name",
  },
};

export const Error = {
  args: {
    placeholder: "Invalid input",
    error: true,
  },
};

export const Disabled = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};
