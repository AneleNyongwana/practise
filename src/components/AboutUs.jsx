import React from 'react'
import lady from '../assets/images/lady.jpg'


const AboutUs = () => {
  return (
    <div>
        <div className="experience section">
            <div className="container">
                <div className="experience_content">
                    <div className="info box">
                         <div className="title">
                            <h1>About</h1>
                        </div>
                        <p>
                            We specialise exclusively in recruitment for the Stockbroking, Asset<br />
                            Management, Hedge Funds, Wealth Managers, Dealing Rooms<br />
                            (Banks), Private Equity Funds and related services industry.<br /><br />
                        </p>
                        <p>
                            The founders have a combined 55 years of working experience as<br /> 
                            Stockbrokers/Fund Managers, with an extensive industry network and<br />
                            excellent understanding of the industry's skills needs.<br /><br />
                        </p>
                        <p>
                            We offer a personalised service to both job seekers and employers.<br /> 
                            We are able to do this as we understand the industry intimately and<br />
                            that we recruit and focus on the specific industry only.<br /><br />
                        </p>
                        <p>
                            Our Servicers include interviewing, screening, referencing and<br /> 
                            researching, matching, and placement which is built on a foundation of<br />
                            trust and in-depth understanding of both the client and candidate's<br />
                            needs, values and requirements.<br />
                        </p>
                        <div className="buttons">
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                    <div className="lady box">
                       <div className="image">
                            <img src={lady} alt="" className="ladyImage" />
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
