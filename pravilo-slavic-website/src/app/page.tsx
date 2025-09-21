import DarkHeader from '@/components/SlavicHeader'
import DarkHero from '@/components/SlavicHero'
import DarkAbout from '@/components/SlavicAbout'
import DarkServices from '@/components/SlavicServices'
import DarkMisha from '@/components/SlavicMisha'
import DarkContact from '@/components/SlavicContact'
import DarkFooter from '@/components/SlavicFooter'

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg-primary">
      <DarkHeader />
      <DarkHero />
      <DarkAbout />
      <DarkServices />
      <DarkMisha />
      <DarkContact />
      <DarkFooter />
    </div>
  )
}