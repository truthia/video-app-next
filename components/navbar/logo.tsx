import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const LogoContainer= styled.div`
    cursor: pointer;
    user-select:none;
`
const Text1= styled.span`
    font-size:48px;
    color: rgba(255,255,255,0.6);
`
const Text2= styled.span`
    font-size:36px;
    color: rgba(35,116,255,1);
    font-weight: bold;
`
const Logo = () => {
    return (
        <Link href="/">
            <LogoContainer >
            <Text1>JP</Text1>
            <Text2>AREA</Text2>
            </LogoContainer>
        </Link>
    )
}

export default Logo
