import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
display: flex;
height: 100%;
`

const A = styled.a`

display: flex;
text-transform: uppercase;
align-items: center;
border-bottom: 2px solid transparent;
font-size: 1.2rem;
padding: 1rem;
margin: 0 1rem;
font-weight: 400;
color: (--color-white);
transition: all 0.2s;
&:hover {
    border-bottom: 2px solid (--color-white);
}

`

const NavItem = ({link, children}) => {
    return (
        <Li>
            <a href={link}>{children}</a>
        </Li>
    )
}

export default NavItem
