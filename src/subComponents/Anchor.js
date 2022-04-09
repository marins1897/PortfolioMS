import React, { useRef } from 'react';
import { useEffect } from 'react'
import styled from 'styled-components';
import { Anchor, Link } from '../components/AllSvgs';
import { mediaQueries } from "../components/Themes";

const Container = styled.div` 
position:relative;
${mediaQueries(40)`
    
display:none;

`};
`

const PreDisplay = styled.div`
position: absolute;
top: 0;
right: 2rem;
`

const Slider = styled.div`
position: fixed;
top: 0;
right: 2rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
transform: translateY(-100%);

.chain{
    transform: rotate(135deg);
}
`




const AnchorComponent = (props) => {
    const ref = useRef(null);
    const hiddenRef = useRef(null);

    useEffect(() => {
       const scrollHandler = () => {

        let scrollPosition = window.pageYOffset;
        let windowSize = window.innerHeight;
        let bodyHeight = document.body.offsetHeight;

        let diff = Math.max(bodyHeight - (scrollPosition + windowSize));

        let diffP = (diff * 100) / (bodyHeight - windowSize);

        ref.current.style.transform = `translateY(${-diffP}%)`;

        if(window.pageYOffset) {
            hiddenRef.current.style.display = 'none'
        }else{
            hiddenRef.current.style.display = 'block'
        }
       }

       window.addEventListener('scroll', scrollHandler)

       return () => window.removeEventListener('scroll', scrollHandler)

    }, [])

    return (
        <Container>

            <PreDisplay ref={hiddenRef} className='hidden'>
                    <Anchor width={70} height={70} fill='currentColor' />
            </PreDisplay>

            <Slider ref={ref}>
                {
                    [...Array(props.numbers)].map((x, id) => {
                        return <Link 
                        key={id} 
                        width={25} 
                        height={25} 
                        fill='currentColor' 
                        className='chain' />
                    })
                }
          <Anchor width={70} height={70} fill='currentColor' />
            </Slider>
        </Container>
    )

};

export default AnchorComponent;