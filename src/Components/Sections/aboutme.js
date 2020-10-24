import React from 'react'
import '../../myCSS/aboutme.css';

class AboutMe extends React.Component {
    
    render() {
        const yourBit="Im a software engineer based in London \n\n and focus on building web apps for all your digital needs"
        return (
            <div id='aboutMeContainer'>
                <p>
                    Hi, I'm   
                </p>
                <h1>
                    Keemo,
                </h1>
                <h1>
                    and I build things online
                </h1>
                {yourBit}
            </div>
        )
    }
}

export default AboutMe;