import React, { createContext, FC, useContext } from 'react'
import { useContacts } from '~/utils/actions/contact'
import { INode } from '~/utils/types/Contact'

interface IContext {
  gastroData: { node?: INode | undefined }[] | undefined
  gastroCount?: number
  specData: { node?: INode | undefined }[] | undefined
  specCount?: number
  isLoading: boolean
}

const Context = createContext<IContext>({
  gastroData: undefined,
  gastroCount: 0,
  specData: undefined,
  specCount: 0,
  isLoading: true,
})

export const PeopleProvider: FC = ({ children }) => {
  const { data: mitonGastro, isLoading } = useContacts()

  const gastroData = mitonGastro?.ceosConnection?.edges
  const gastroCount = mitonGastro?.ceosConnection?.aggregate.count
  const specData = mitonGastro?.specialistsConnection?.edges
  const specCount = mitonGastro?.specialistsConnection?.aggregate.count

  const exposed = {
    gastroData,
    gastroCount,
    specData,
    specCount,
    isLoading,
  }

  return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export const usePeople = () => useContext(Context)
