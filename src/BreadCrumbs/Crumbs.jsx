/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from "styled-components";

const Crumbs = ({href,children}) => {

    return (
        <CrumbWrapper><CrumbLink href={href}>{children}</CrumbLink></CrumbWrapper>
    )
  
}
const CrumbWrapper = styled.li`
display:inline;
--spacing:12px;

    &:not(:first-of-type){
    margin-left:var(--spacing);

    &:before{
    content:'/';

    opacity:0.5;
    margin-right:var(--spacing);
    }
}
`
const CrumbLink = styled.a`
color:inherit;
text-decoration:none;
    
    &:hover{
    text-decoration:revert;
    }
`

export default Crumbs