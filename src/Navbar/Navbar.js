import React from 'react'
import styled from 'styled-components'
import Logo from '../logo/Logo'


const Wrapper = styled.div`
position: fixed;
display: flex;
justify-content: space-between;
background-color: var(--color-main);
padding: 0rem 2rem;
top:0;
left:0;
width:100%;
height: 6rem;
`

const Navbar = () => {
    return (
        <Wrapper>
            <Logo />
            <nav>
                <ul>
                    <li>Home</li>
                </ul>
            </nav>
        </Wrapper>
    )
}

export default Navbar
