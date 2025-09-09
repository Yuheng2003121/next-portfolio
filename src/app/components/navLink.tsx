import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavLink({href, children}: {href: string, children: React.ReactNode}) {
  const pathName = usePathname();
  return (
    <Link href={href} className={`text-xl rounded text-black p-1 ${pathName.toLowerCase() === href.toLowerCase() && "bg-black text-white"}`}>
      {children}
    </Link>
  )
}
