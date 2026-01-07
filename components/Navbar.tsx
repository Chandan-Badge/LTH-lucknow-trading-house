"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {

  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>

      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">

          </MenuItem>
        </Link>

        {/* <Link href={"/courses"}> */}
          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">All Courses</HoveredLink>
              <HoveredLink href="/courses/fttp">F.T.T.P. (Full Time Trading Program)</HoveredLink>
              <HoveredLink href="/courses/uptp">U.P.T.P.</HoveredLink>
              <HoveredLink href="/courses/ptp">P.T.P.</HoveredLink>
            </div>
          </MenuItem>
        {/* </Link> */}

        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/call">Through a Call</HoveredLink>
              <HoveredLink href="/email">Through a Email</HoveredLink>
            </div>
          </MenuItem>
        </Link>

        <button className="group border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Join Masterclass</span>
          <span className="absolute inset-x-0 w-1/2 group-hover:w-full h-px mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-300 ease-in-out" />
        </button>

      </Menu>

    </div>
  )
}

export default Navbar;
