import { useState } from 'react'
import NestedSidebar from './NestedSidebar'
import NestedSidebarDark from './NestedSidebarDark'

type SidebarProps = {
  width: number
}

export default function Sidebar(props: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true)
  const toggleSidbar = () => {
      setIsOpen(!isOpen)
  }
  
  return (
    <NestedSidebarDark width={props.width} toggleSidbar={toggleSidbar} />
  )
}
