import React from 'react'
import styled from 'styled-components'



const LogoWrapper = styled.div`
    padding: 1rem;
    color: var(--color-white);
    font-size: 1.2rem;
`

const Logo = () => {
    return (
        <LogoWrapper>
            Todo App
        </LogoWrapper>
    )
}

export default Logo
