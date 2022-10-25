import React, { FC } from 'react'
import { SpaceProps } from 'styled-system'
import { Button } from '~/components/Button'
import { ForewordText } from '~/components/Typography'
import { IDataLinks } from '../data'
import { CompanyLinksWrapper, InlineAnchor } from './styled'

interface IProps {
  data: IDataLinks[]
}
/* eslint-disable */
export const CompanyLinks: FC<IProps & SpaceProps> = ({ data, ...props }) => (
  <CompanyLinksWrapper {...props}>
    {data.map((links, index) => (
      <ul key={index}>
        <li>
          <ForewordText mt="2.4rem" mb="0.8rem" color="black">
            {links.company}
          </ForewordText>
        </li>
        {links.buttons.map((buttons) => (
          <li key={buttons.label}>
            <InlineAnchor
              href={buttons.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button mb="0.4rem" inverse label={buttons.label} />
            </InlineAnchor>
          </li>
        ))}
      </ul>
    ))}
  </CompanyLinksWrapper>
)
/* eslint-enable */
