import React from 'react';
import {Carousel} from 'react-bootstrap'; 
import { useLocation, useParams } from 'react-router-dom';

export default function Dashboard(props){
    const user = useLocation();
    const fullName = user?.state?.fullName;
    return(
        <div style={{paddingLeft:"10%", paddingTop:"30px"}}>
            <div className='card w-50 mt-5 shadow p-2 mb-1 rounded'>
            <h2 className="my-2 mt-2">{props.greetings} {fullName} 👋</h2>
            </div>
            <br></br>
            <Carousel>
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
                <h3 className='text-black'>{props.text3}</h3>
                <p className='text-black'>{props.paragraph3}</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
}