import Card from '@/components/card'
import Link from 'next/link'
import React from 'react'

export default function ArchivedNotification() {
  return (
    <Card>
      <div>Achived notification</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  )
}
