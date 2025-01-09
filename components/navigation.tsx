"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "../lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu"

const items = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <NavigationMenu className="justify-end max-w-full px-4 py-2">
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  pathname === item.href && "font-bold bg-accent"
                )}
              >
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

