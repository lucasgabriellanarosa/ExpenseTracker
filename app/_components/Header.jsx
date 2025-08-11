import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

function Header() {
  return (
    <header className="p-5 flex justify-between items-center shadow-sm border">
      <Image src={'./logo.svg'} width={160} height={100} alt="logo" />

      <Button>Get Started</Button>
    </header>
  )
}

export default Header