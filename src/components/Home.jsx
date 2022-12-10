import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
function Home() {
  return (
   <>
     <div className='home' id='home'>
        <main>
            <h1>TechStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" srcset="" />
        <div>
        <p>
            We are your one and only solution to the tech problems
            you face everyday . We are leading tech company
            whose aim is to increase the
             problem solving ability in children.
        </p>
    </div>
    </div>
    <div className="home3" id='about'>
        <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus rerum porro enim eveniet ab praesentium voluptatem repellat odit ullam autem deserunt eius sequi, vel aut error fuga dolor eaque! Sunt?</p>
        </div>
    
    </div>
    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div 
                    style={{animationDelay:"3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div 
                    style={{animationDelay:"2s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div 
                    style={{animationDelay:"1s"}}>
                    <AiFillYoutube/>
                    <p>YouTube</p>
                </div>
                <div 
                    style={{animationDelay:"0.6s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
   </>

  )
}

export default Home