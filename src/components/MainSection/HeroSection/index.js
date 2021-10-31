import React from 'react'
import {HeroSectionWrapper, Container, TextSection} from "./styles.js"
// also add in what order. order:1 etc...
function contentBlock  ({lightBg, lightText, headline, descriptionOne, descriptionTwo, img, alt, imgStart}) {
    return (
        <HeroSectionWrapper lightBg={lightBg}> 
            <Container imgStart={imgStart}>
                <embed style={{width:"600px",maxWidth:"100%",   verticalAlign: "middle"}} src={img} alt={alt} />
                <TextSection lightText={lightText}>
                <h3>{headline}</h3>
                <p><i class="fas fa-hand-holding-usd"></i> {descriptionOne}</p>
                <p><i class="fas fa-hand-holding-usd"></i> {descriptionTwo}</p>
                </TextSection>
            </Container>
        </HeroSectionWrapper>
    )
}

export default contentBlock
