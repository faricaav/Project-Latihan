import React from 'react';
import {Carousel} from 'react-bootstrap'; 
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
        padding-left:10%;
        padding-top:30px;
    `
    const TextH3 = styled.h3`
        text-black
    `
    const Paragraph = styled.p`
        text-black
    `
export default function Dashboard(props){
    // const user = useLocation();
    // const fullName = user?.state?.fullName;
    return(
        <Container>
            <div role="heading" aria-level="2" className='card w-50 mt-5 shadow p-2 mb-1 rounded'>
            <h2 className="my-2 mt-2">{props.greetings} 👋</h2>
            </div>
            <br></br>
            <Carousel role="carousel">
            <Carousel.Item>
                <img
                height="500"
                width="800"
                className="d-block"
                src={props.image1}
                alt="First slide"
                />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Carousel.Caption className='bg-white mt-5'>
                <h3 className='text-black'>{props.text1}</h3>
                <p className='text-black'>{props.paragraph1}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                height="500"
                width="800"
                className="d-block"
                src={props.image2}
                alt="Second slide"
                />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Carousel.Caption className='bg-white mt-5'>
                <h3 className='text-black'>{props.text2}</h3>
                <p className='text-black'>{props.paragraph2}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                height="500"
                width="800"
                className="d-block mb-5"
                src={props.image3}
                alt="Third slide"
                />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Carousel.Caption className='bg-white mt-5'>
                <TextH3>{props.text3}</TextH3>
                <Paragraph>{props.paragraph3}</Paragraph>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </Container>
    );
}