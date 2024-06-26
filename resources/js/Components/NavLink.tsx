import { Link, InertiaLinkProps } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-indigo-400 dark:border-indigo-600 text-neutral-900 dark:text-neutral-100 focus:border-indigo-700 "
                    : "border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700 focus:text-neutral-700 dark:focus:text-neutral-300 focus:border-neutral-300 dark:focus:border-neutral-700 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
