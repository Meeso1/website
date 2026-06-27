import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Route } from "next";

export default function LinkButton({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link 
            href={href as Route} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={cn(buttonVariants({ variant: "link" }), "w-full text-center bg-white hover:bg-gray-200 text-black")}>
            {children}
        </Link>
    )
}