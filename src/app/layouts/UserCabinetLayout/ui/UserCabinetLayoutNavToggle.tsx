import { ArrowLeftLine, ArrowRightLine } from '@rsuite/icons'
import { Navbar, Nav } from 'rsuite'

interface UserCabinetLayoutNavTogglePropsType {
  expand: boolean
  onChange: () => void
  className: string
}

export const UserCabinetLayoutNavToggle = ({
  expand,
  onChange,
  className,
}: Partial<UserCabinetLayoutNavTogglePropsType>) => {
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
