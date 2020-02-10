import React from 'react'
import styled from 'styled-components'
import Logo from '../../logo/Logo'

import Container from '../../../HOC/layout/elements/Container'

const FixedWrapper = styled.div`
position: fixed;
background-color: var(--color-main);
padding: 0rem 2rem;
top:0;
left:0;
width:100%;
height: 6rem;
`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
`

const Navbar = () => {
    return (
        <FixedWrapper>
            <Container>
                <Wrapper>
                    <Logo />
                    <nav>
                        <ul>
                            <li>Home</li>
                        </ul>
                    </nav>
                </Wrapper>
            </Container>
        </FixedWrapper>
    )
}

export default Navbar
