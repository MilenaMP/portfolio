export default function BrowserMockup({
    image,
    title,
    url
}){
    return(
        <div className="browser">
            <div className="browser-top">
                    <div className="browser-buttons">

                        <span></span>
                        <span></span>
                        <span></span>

                        </div>

                        <p>{url}</p>

                        </div>

                        <img 
                        src={image} 
                        alt={title} 
                        className="project-image" 
                        />
                            
                        </div>    
    )
}