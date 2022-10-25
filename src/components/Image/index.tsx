import NextImage from 'next/image'
import React, { FC } from 'react'
import { StyledDiv } from './styled'

interface IImageProps {
  imageSrc: string
  width: number
  height: number
  alt?: string
}

export const Image: FC<IImageProps> = ({ imageSrc, width, height, alt }) => (
  <StyledDiv>
    <NextImage
      alt={alt}
      src={imageSrc}
      width={width}
      height={height}
      priority
      layout="responsive"
    />
  </StyledDiv>
)
