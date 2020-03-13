import React from 'react'
import NavItem from './NavItem/NavItem'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
`

const Ul = styled.ul`
    display: flex;
    flex-direction: ${props => props.mobile ? 'column' : 'row'};
    align-items: center;
    height: 100;
`


const NavItems = ({mobile, clicked}) => {
    return (
        <Nav mobile={mobile}>
            <Ul mobile={mobile}>
                <NavItem clicked={clicked} mobile={mobile} link='/'>Home</NavItem>
                <NavItem clicked={clicked} mobile={mobile} link='todos'>Todos</NavItem>
                <NavItem clicked={clicked} mobile={mobile} link='/Contact'>Contact Us</NavItem>
            </Ul>
        </Nav>
    )
}

export default NavItems
