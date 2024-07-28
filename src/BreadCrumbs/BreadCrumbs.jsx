import styled from "styled-components"

/* eslint-disable react/prop-types */
const BreadCrumbs = ({children}) => 
{
    return <nav aria-label="BreadCrumb"><BreadList>{children}</BreadList></nav>
}

const BreadList = styled.ol`
padding:0;
margin:0;
list-style-type:none;
`



export default BreadCrumbs