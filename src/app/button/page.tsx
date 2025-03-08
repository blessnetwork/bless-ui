'use client'

import Button from '@/components/ui/button'
import * as React from 'react'

export default function ButtonPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button onClick={() => alert("Clicked!")}>Fluid Button</Button>
    </div>

  )
}