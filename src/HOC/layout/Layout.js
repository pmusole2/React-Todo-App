import React from 'react'
import Navbar from '../../components/navigation/Navbar/Navbar'
import styled from 'styled-components'
import SideDrawer from '../../components/navigation/SideDrawer/SideDrawer'

const MainWrapper = styled.div`
    width:100%;
    min-height: calc(100vh - 6rem);
    margin-top: 6rem;
`

const Layout = ({children}) => (
    <>
        <Navbar />
        <SideDrawer />
        <MainWrapper>
            {children}
        </MainWrapper>
    </>
)

export default Layout