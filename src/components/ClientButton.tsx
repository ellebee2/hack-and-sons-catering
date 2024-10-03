'use client'

import { Button } from "@/components/ui/button"
import { ReactNode, ButtonHTMLAttributes } from "react"

export function ClientButton({ children, ...props }: { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <Button {...props}>{children}</Button>
}