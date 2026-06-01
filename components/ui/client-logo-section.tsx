import Image from 'next/image'
import { Sparkles } from './sparkles'

const clientLogos = [
  { id: 'HA', src: '/client_logo/logo_HA.png', alt: 'Hospital Authority' },
  { id: 'HHS', src: '/client_logo/logo_HHS.png', alt: 'Heep Hong Society' },
  { id: 'IMDA', src: '/client_logo/logo_IMDA.png', alt: 'Infocomm Media Development Authority' },
  { id: 'NCSS', src: '/client_logo/logo_NCSS.jpg', alt: 'National Council of Social Service' },
  { id: 'PYNEH', src: '/client_logo/logo_PYNEH.png', alt: 'Pamela Youde Nethersole Eastern Hospital' },
  { id: 'SKH', src: '/client_logo/logo_SKH.png', alt: 'Hong Kong Sheng Kung Hui' },
  { id: 'SKH2', src: '/client_logo/logo_SKH2.png', alt: 'Hong Kong Sheng Kung Hui logo' },
  { id: 'SW', src: '/client_logo/logo_SW.png', alt: 'Social Welfare Department' },
  { id: 'TAIPo', src: '/client_logo/logo_Tai_Po.png', alt: 'Tai Po logo' },
  { id: 'THK', src: '/client_logo/logo_THK.png', alt: 'THK Moral Society' },
  { id: 'Union', src: '/client_logo/logo_Union.png', alt: 'Alice Ho Miu Ling Nethersole Hospital' },
]

export function ClientLogoSection() {
  return (
    <section className="section section-light">
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 px-6 py-10 shadow-sm shadow-slate-200/20 backdrop-blur-sm sm:px-10">
        <Sparkles
          color="#6fbee9"
          background="transparent"
          opacity={0.24}
          opacitySpeed={2}
          speed={0.45}
          size={2}
          className="pointer-events-none absolute inset-0 opacity-80"
        />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-5">
          <div className="text-center">
            <p className="section-label">Trusted across sectors</p>
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
              Trusted by leading organizations in education, health and social service.
            </h2>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
            {clientLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center rounded-2xl bg-slate-50 p-3 shadow-sm shadow-slate-200/30"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="h-16 w-auto object-contain"
                  priority={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
