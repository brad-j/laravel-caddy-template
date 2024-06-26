import { LabelHTMLAttributes } from "react";

export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <label
            {...props}
            className={
                `block font-medium text-sm text-neutral-700 dark:text-neutral-300 ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
