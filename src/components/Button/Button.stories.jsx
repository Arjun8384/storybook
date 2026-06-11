import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export const Primary = {
  args: {
    label: "Primary Button",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
  },
};

export const Danger = {
  args: {
    label: "Delete",
    variant: "danger",
  },
};

export const Disabled = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};
