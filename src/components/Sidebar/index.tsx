import { useState } from 'react'
import NestedSidebarDark from './NestedSidebarDark'

type SidebarProps = {
  width: number
  height?: string
}

export default function Sidebar(props: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true)
  const toggleSidbar = () => {
      setIsOpen(!isOpen)
  }
  
  return (
    <NestedSidebarDark
      width={props.width}
      height={props.height}
      toggleSidbar={toggleSidbar} />
  )
}
