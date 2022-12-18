import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <div className="App">
     
      {/* NavBar code */}

   <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <div className="container-fluid">
      <a className="navbar-brand" href="#">W-A-S-D</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
           </li>

      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">Sign In</button>
      </form>
    </div>
  </div>
</nav>
      {/* End of NavBar code */}


      <div className="gaming-img">

      <Game
       link = "https://i.ibb.co/xGbkmWZ/Whats-App-Image-2022-12-18-at-13-41-28.jpg"
       gamelink = "https://hackathon-game.ashishmalla1.repl.co/"
       name= "Coffee with Mr.Blahaj"
       />

      <Game 
      link= "https://i.ibb.co/mF6Rkr2/image.png"
      gamelink = "https://heavyworthydeletion--yashwanthsai9.repl.co/"
      name= "Swimmy blahaj"
       />
       
      <Game 
      link= "https://i.ibb.co/Z8xVQwc/Whats-App-Image-2022-12-18-at-13-33-25.jpg"
      name= "Swimmy blahaj"
      />
       
      </div>
      
    </div>
  );
}

export default App;
