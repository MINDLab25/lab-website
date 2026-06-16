'use client'

import { useState, useEffect } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import NewsSection from '@/components/sections/NewsSection'
import ResearchSection from '@/components/sections/ResearchSection'
import PublicationsSection from '@/components/sections/PublicationsSection'
import TeamSection from '@/components/sections/TeamSection'
import JoinSection from '@/components/sections/JoinSection'
import JoinModal from '@/components/sections/JoinModal'

export default function Page() {
  const [expandedPub, setExpandedPub] = useState<string | null>(null)
  const [newsExpanded, setNewsExpanded] = useState(false)
  const [joinModalOpen, setJoinModalOpen] = useState(false)

  useEffect(() => {
    const open = () => setJoinModalOpen(true)
    window.addEventListener('open-join-modal', open)
    return () => window.removeEventListener('open-join-modal', open)
  }, [])

  return (
    <>
      <HeroSection onOpenModal={() => setJoinModalOpen(true)} />
      <NewsSection
        expanded={newsExpanded}
        onToggle={() => setNewsExpanded((v) => !v)}
      />
      <ResearchSection />
      <PublicationsSection
        expandedId={expandedPub}
        onToggle={(id) => setExpandedPub(expandedPub === id ? null : id)}
      />
      <TeamSection />
      <JoinSection onOpenModal={() => setJoinModalOpen(true)} />
      <JoinModal open={joinModalOpen} onClose={() => setJoinModalOpen(false)} />
    </>
  )
}
