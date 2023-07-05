import { useState } from 'react'
import NestedSidebarDark from './NestedSidebarDark'
import NestedSidebar from './NestedSidebar'

type SidebarProps = {
  width: number
}

export default function Sidebar(props: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true)
  const toggleSidbar = () => {
      setIsOpen(!isOpen)
  }
  
  return (
    <NestedSidebarDark
      width={props.width}
      toggleSidbar={toggleSidbar} />
  )
}
