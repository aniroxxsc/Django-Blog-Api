import React from 'react';
import './blogdisplay.css';
 function blogdisplay(){
     return(
        <div className="blogdisplaying">
        <div className="blogdisplaying-appside">
              <div className="title-display">Title</div> 
              <div className="blogcontent-display">content</div>
              <div className="comment-section">comment-section</div>
        
    </div>
    <div className="blogdisplaying-formside">
              <div className="recent-post">Recent Posts</div>
    </div>
    
</div>
     );
 }
 export default blogdisplay;