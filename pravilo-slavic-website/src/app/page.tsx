import SlavicHeader from '@/components/SlavicHeader'
import SlavicHero from '@/components/SlavicHero'
import SlavicAbout from '@/components/SlavicAbout'
import SlavicServices from '@/components/SlavicServices'
import SlavicMisha from '@/components/SlavicMisha'
import SlavicContact from '@/components/SlavicContact'
import SlavicFooter from '@/components/SlavicFooter'

export default function Home() {
  return (
    <div className="min-h-screen">
      <SlavicHeader />
      <SlavicHero />
      <SlavicAbout />
      <SlavicServices />
      <SlavicMisha />
      <SlavicContact />
      <SlavicFooter />
    </div>
  )
}