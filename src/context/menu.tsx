import React, { createContext, FC, useContext, useState } from 'react'

interface IContext {
  isOpen: boolean
  toggleMenu: VoidFunction
  isSubMenuOpen: boolean
  toggleSubMenu: VoidFunction
}

const Context = createContext<IContext>({
  isOpen: false,
  toggleMenu: () => {
    /**/
  },
  isSubMenuOpen: false,
  toggleSubMenu: () => {
    /**/
  },
})

export const MenuProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen)
  }

  const exposed = {
    isOpen,
    toggleMenu,
    isSubMenuOpen,
    toggleSubMenu,
  }

  return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export const useToggleMenu = () => useContext(Context)
