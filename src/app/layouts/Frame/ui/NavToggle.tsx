import { ArrowLeftLine, ArrowRightLine } from '@rsuite/icons'
import { Navbar, Nav } from 'rsuite'

interface NavToggleProps {
  expand: boolean
  onChange: () => void
  className: string
}

export const NavToggle = ({
  expand,
  onChange,
  className,
}: Partial<NavToggleProps>) => {
  return (
    <Navbar appearance='subtle' className={className}>
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
