
import type { ReactNode } from 'react'
import { Logo } from '@components/icons'


export interface FrameworkLogoProps {
  name: string;
  logo: ReactNode;
  link?: string;
}

export const FrameworkLogo = ({
  name,
  logo,
  link,
}: FrameworkLogoProps) => {
  return (
    <a
      className='
        inline-flex flex-row items-center w-auto
        px-6 py-4 gap-3 md:px-8 md:gap-3 select-none
      '
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      style={{
        fontFamily: `Inter,'Hevetica Neue',Helvetica,apple-system,sans-serif`,
      }}
    >
      <span
        className='flex justify-center items-center w-8 h-8 [&>svg]:max-w-full [&>svg]:max-h-full'
      >
        {logo}
      </span>
      <span
        className='text-gray-900 dark:text-gray-100 font-medium text-lg'
      >
        {name}
      </span>
    </a>
  )
}


export const FrameworkLogos = ({ reversed }: { reversed?: boolean }) => {
  const frameworks: FrameworkLogoProps[] = [
    {
      logo: (<Logo.Vitejs />),
      name: 'Vite',
    },
    {
      logo: (<Logo.Nextjs />),
      name: 'Next.js',
    },
    {
      logo: (<Logo.Webpack className='scale-125' />),
      name: 'Webpack',
    },
    {
      logo: (<Logo.Rspack className='scale-110' />),
      name: 'Rspack',
    },
    {
      logo: (<Logo.Umijs />),
      name: 'Umi.js',
    },
    {
      logo: (<Logo.Icejs className='scale-125' />),
      name: 'ice.js',
    },
    {
      logo: (<Logo.VSCode />),
      name: 'VS Code',
    },
    {
      logo: (<Logo.WebStorm />),
      name: 'WebStorm',
    },
    {
      logo: (<Logo.Neovim />),
      name: 'Neovim',
    },
    {
      logo: (
        <Logo.CodeSandbox
          className='text-[#161614] dark:text-[#ddd]'
        />
      ),
      name: 'CodeSandbox',
    },
    {
      logo: (<Logo.StackBlitz />),
      name: 'StackBlitz',
    },
    {
      logo: (
        <Logo.GitHub
          className='text-[#161614] dark:text-[#eee]'
        />
      ),
      name: 'GitHub Codespaces',
    },
  ]

  if (reversed) {
    frameworks.reverse()
  }

  const logos = frameworks.map(({
    name,
    logo,
    link,
  }) => (
    <FrameworkLogo
      key={name}
      logo={logo}
      name={name}
      link={link}
    />
  ))

  return <>{logos}</>
}
