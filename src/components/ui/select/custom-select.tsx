import { type FC } from "react";

import { cn } from "@/lib/utils";
import type { SelectProps } from "@radix-ui/react-select";
import { cva, type VariantProps } from "class-variance-authority";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

const selectVariants = cva(
  "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
  {
    variants: {
      variant: {
        primary: "bg-primary border-primary text-white focus:ring-primary",
        secondary:
          "bg-secondary border-secondary text-white focus:ring-secondary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface CustomSelectProps
  extends SelectProps,
    VariantProps<typeof selectVariants> {
  placeholder?: string;
  options?: Array<{ label: string; value: string }>;
}

const CustomSelect: FC<CustomSelectProps> = ({
  variant,
  placeholder,
  options = [],
  ...rest
}) => {
  return (
    <Select {...rest}>
      <SelectTrigger className={cn(selectVariants({ variant }), "w-[180px]")}>
        <SelectValue placeholder={placeholder || "Select an option"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((opt, index) => (
            <SelectItem key={index} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { CustomSelect, selectVariants };
