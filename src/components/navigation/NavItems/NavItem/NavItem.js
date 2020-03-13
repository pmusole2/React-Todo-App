import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Li = styled.li`
display: flex;
height: 100%;
`

const StyledNavLink = styled(NavLink)`
display: flex;
text-transform: uppercase;
align-items: center;
border-bottom: ${props => props.mobile ? '1px solid transparent' : '1px solid transparent'};
font-size: 1.2rem;
padding: 1rem;
margin: ${props => props.mobile ? '1rem' : '1.5rem'};
font-weight: 400;
color: var(--color-white);
transition: all 0.2s;
cursor: pointer;
&:hover {
    border-bottom: ${props => props.mobile ?
    '1px solid var(--color-white)' :
    '1px solid var(--color-white)'};
}

&.active {
    border-bottom: ${props => props.mobile ? '1px solid var(--color-white)' : '2px solid var(--color-white);'};
}
`

const NavItem = ({link, children, mobile, clicked}) => {
    return (
        <Li>
            <StyledNavLink exact onClick={clicked} activeClassName="active" mobile={mobile} to={link}>{children}</StyledNavLink>
        </Li>
    )
}

export default NavItem
