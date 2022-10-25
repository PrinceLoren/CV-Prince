import { ILogosProps } from '~/screens/Home/containers/LogosSection/components/Logos/components/LogoItem'
import { ILogoN } from '~/utils/types/Logos'

interface ILogos {
  node: ILogoN
}

export const transformDataToLogos: (
  logos?: ILogos[]
) => ILogosProps[] | undefined = (logos) =>
  logos?.map((logo) => ({
    label: logo.node.companyName,
    logoUrl: logo.node.imageLogo.url,
    href: logo.node.companyLink,
  }))
