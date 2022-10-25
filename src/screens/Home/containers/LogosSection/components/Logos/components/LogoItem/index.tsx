import Link from 'next/link'
import React, { FC } from 'react'
import { Image } from '~/components/Image'
import { LogosText } from '~/components/Typography'
import { LogoContent } from './styled'

export interface ILogosProps {
  label: string
  logoUrl: string
  href: string
}

export const LogoItem: FC<ILogosProps> = ({ href, logoUrl, label }) => (
  <Link href={href ?? '/'} passHref>
    <a rel="noopener noreferrer" target="_blank">
      <LogoContent>
        <Image imageSrc={logoUrl} width={40} height={40} alt={label} />
        <LogosText logoItem>{label}</LogosText>
      </LogoContent>
    </a>
  </Link>
)
