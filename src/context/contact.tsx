import React, { createContext, FC, useContext } from 'react'
import { useMediaMiton } from '~/utils/actions/contact'
import { INode } from '~/utils/types/Contact'

interface IContext {
  media: { node?: INode | undefined }[] | undefined
}

const Context = createContext<IContext>({
  media: undefined,
})

export const ContactProvider: FC = ({ children }) => {
  const { data } = useMediaMiton()

  const media = data?.mediaSpecConnection.edges

  const exposed = {
    media,
  }

  return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export const useMedia = () => useContext(Context)
