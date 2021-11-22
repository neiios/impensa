import React from 'react'
import {ContainerOne, ContainerTwo, ContainerThree} from './Styles.js'
const ContentContainer = (Component,props) => {
    return (
        <Component>
                {props.children}
        </Component>
    )
}

export const MidContainer =  (props) => ContentContainer (ContainerOne, props);
export const SmallContainer =  (props) => ContentContainer (ContainerTwo, props);
export const WideContainer =  (props) => ContentContainer (ContainerThree, props);