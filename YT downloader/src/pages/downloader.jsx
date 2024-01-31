import { useState } from "react"
import { grab } from "../api/downloader-api"
import windows from "../assets/windows.svg";
import android from "../assets/android.svg";
import apple from "../assets/apple.svg";
import linux from "../assets/linux.svg";

export const Download = () => {
    const [link, setLink] = useState("")
    const [container, setContainer] = useState([])
    const fetchLink = (e) => {
        const url = e.target.value
        setLink(url)
    }
    const getLinks = async () => {
        try {
            const result = await grab(link);
            setContainer(result);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <>
            <div className="downloader">
                <div className="input">
                    <input type="text" placeholder="Paste your link here" onChange={(e) => {fetchLink(e)}}/>
                    <button onClick={() => {getLinks(link)}}><b>Get Links</b></button>
                </div>
                <div className="links-container">
                    {container && container.picture &&
                        <div className="image">
                            <img src={container.picture} alt="thumbnail for your video" className="thumbnail" />
                        </div>
                    }
                    <div className="title">
                        {container && container.title &&
                            <h2>{container.title}</h2>
                        }
                    </div>
                    <div className="links">
                        {container && container.links && container.links.map((link) => (
                            <div className="downloads">
                                <h2>{link.quality}</h2>
                                <a href={link.link} className="link"><button className="download-button">download</button></a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="support">
                    <h3>Supported Platforms</h3>
                    <div className="images">
                        <div className="image">
                            <img  src={windows} alt="dcsd" className="img"/>
                        </div>
                        <div className="image">
                            <img  src={android} alt="dcsd" className="img" /> 
                        </div>
                        <div className="image">
                            <img  src={apple} alt="dcsd" className="img"/>
                        </div>
                        <div className="image">
                            <img  src={linux} alt="dcsd" className="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 