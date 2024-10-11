import { ArrowLeftLine, ArrowRightLine } from '@rsuite/icons'
import { Navbar, Nav } from 'rsuite'

interface NavToggleProps {
  expand?: boolean
  onChange?: () => void
}

export const NavToggle = ({ expand, onChange }: NavToggleProps) => {
  return (
    <Navbar appearance='subtle' className='nav-toggle'>
      <Nav pullRight>
        <Nav.Item
          onClick={onChange}
          style={{ textAlign: 'center' }}
          icon={expand ? <ArrowLeftLine /> : <ArrowRightLine />}
        />
      </Nav>
    </Navbar>
  )
}
