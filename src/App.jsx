import photo from './assets/photo.jpeg'
import './App.css'

function App() {
  return (
    <>
      <div className="main">
        <img src={photo} width="200"></img>
        <div className="div1">
          <h2>Hamsika Krishnan</h2>
          <h4 className="comm">Computer Science Student</h4>
          <p className='par'>I am curious about emerging technologies and passionate about photography.</p>
          <div>
            <button className='ala'><a href="https://www.linkedin.com/in/hamsika-krishnan-7a8391226/" className='al'>Linkedin</a></button>
            <button className='ala'><a href="https://twitter.com/HamsikaKrishnan" className='al'>Twitter</a></button>
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default App
