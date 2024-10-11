import { forwardRef } from 'react'

import { type NavLinkProps, NavLink as BaseNavLink } from 'react-router-dom'

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, children, ...rest }, ref) => {
    return (
      <BaseNavLink ref={ref} to={to} {...rest}>
        {children}
      </BaseNavLink>
    )
  }
)
