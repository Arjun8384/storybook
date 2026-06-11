import ProductCard from "./ProductCard";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],

  argTypes: {
    title: {
        control: "text",
    },

    prices: {
        control: "number",
    },

    inStock: {
        control: "boolean",
    },
  },
};

export const Default = {
  args: {
    image:
      "/shoe.jpg",
    title: "Running Shoes",
    price: 2499,
    inStock: true,
  },
};

export const OutOfStock = {
  args: {
    image:
      "/shoe.jpg",
    title: "Running Shoes",
    price: 2499,
    inStock: false,
  },
};

export const PremiumProduct = {
  args: {
    image: "/shoe.jpg",
    title: "Premium Running Shoes",
    price: 4999,
    inStock: true,
  },
};
