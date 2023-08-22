import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes, ReactHTMLElement } from "react";
import { Input } from "../ui/input";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { Textarea } from "../ui/textarea";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const FormItem = ({ className, id, name, label, type, ...other }: Props) => {
  return (
    <div className="relative px-2 flex-col flex gap-2 my-2 py-2">
      <label
        htmlFor={id}
        className="font-semibold text-accent-foreground capitalize text-sm  flex gap-2 items-center"
      >
        {label}
        <CheckCircledIcon className="text-primary" />
      </label>
      {type === "textarea" ? (
        <Textarea
          id={id}
          name={name}
          className={cn("  ", className)}
          placeholder={other.placeholder}
        />
      ) : (
        <Input
          type={type}
          id={id}
          name={name}
          className={cn("  ", className)}
          {...other}
        />
      )}
    </div>
  );
};

export default FormItem;
