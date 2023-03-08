import React from 'react'

// Import the stylesheet here 
import '../Styles/Grid.css'; 



function Grid() {
  return (
  
    <div classNameName="container">
    
    <div classNameName='media'>
      {/* Add in the header here  */}
    
    {/* Add ion the image container here */}
    <div classNameName='img'>
    {/* Add in the image here  */}
    <img src="http://placehold.it/250x250" alt="placeholder"></img>

    </div>
    
    {/* Add in the Title here  */}
    <h2>This is the title</h2>
    
    
    {/* Add in the content paragraph here  */}
      <div classNameName="content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ullam ducimus id ex, optio tempore qui ut quidem nostrum eligendi corporis perspiciatis dicta sunt modi eos at ipsa? Nemo quisquam fuga in earum consectetur doloribus maiores ratione illum obcaecati beatae rerum, impedit repellat esse ipsam totam dolores autem animi facere.
        
        
      </p>
      </div>
      
      
      
      
      
    <footer classNameName="footer">
        Footer goes here 
        
    </footer>
    </div>
    
    
    {/* Add in the second section in here  */}
    
    
    {/* START OF SECOND SECTION  */}
    
    <div classNameName=" media media-flip">
      {/* Add in the header here  */}
    
    {/* Add ion the image container here */}
    <div classNameName='img'>
    {/* Add in the image here  */}
    <img src="http://placehold.it/250x250" alt="placeholder"></img>

    </div>
    
    {/* Add in the Title here  */}
    <h2>This is the title</h2>
    
    
    {/* Add in the content paragraph here  */}
      <div classNameName="content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ullam ducimus id ex, optio tempore qui ut quidem nostrum eligendi corporis perspiciatis dicta sunt modi eos at ipsa? Nemo quisquam fuga in earum consectetur doloribus maiores ratione illum obcaecati beatae rerum, impedit repellat esse ipsam totam dolores autem animi facere.
        
        
      </p>
      </div>
      
      
      
      
      
    <footer classNameName="footer">
        Footer goes here 
        
    </footer>
    </div>
    
    
    {/* Add in the Third Section here  */}
    
    
    
    
    {/* THE THIRD SECTION GOES HERE  */}
    
    
    
    {/* This section has nested items  */}
    
    <div className="media">
  <h2 className="title">This is my title</h2>

  <div className="img">
    <img src="http://placehold.it/250x250" alt="Placeholder"/>
  </div>

  <div className="content">

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.
      Praesent quis risus id dolor venenatis condimentum.</p>
  </div>

  <div className="footer">
    footer here
  </div>

  <div className="media">
    <h2 className="title">This is my title</h2>

    <div className="img">
      <img src="http://placehold.it/250x250" alt="Placeholder"/>
    </div>

    <div className="content">

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.
        Praesent quis risus id dolor venenatis condimentum.</p>
    </div>

    <div className="footer">
      footer here
    </div>

    <div className="media">
      <h2 className="title">This is my title</h2>

      <div className="img">
        <img src="http://placehold.it/250x250" alt="Placeholder"/>
      </div>

      <div className="content">

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.
          Praesent quis risus id dolor venenatis condimentum.</p>
      </div>

      <div className="footer">
        footer here
      </div>

    </div>

  </div>

</div>

<div className="media img-flexie">

  <div className="img">
    <img src="http://placehold.it/250x250" alt="Placeholder"/>
  </div>
  <h2 className="title">Both my columns flex</h2>
  <div className="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis condimentum.</p>
  </div>
  <div className="footer">
    An optional footer goes here.
  </div>
</div>

<div className="media media-flip img-flexie">

  <div className="img">
    <img src="http://placehold.it/250x250" alt="Placeholder"/>
  </div>
  <h2 className="title">Both my columns flex</h2>
  <div className="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis condimentum.</p>
  </div>
  <div className="footer">
    An optional footer goes here.
  </div>
</div>
    
    
    </div>
  )
}

export default Grid
