import Padjit from './assets/Padjit.jpg'
import Randjit from "./assets/Randjit.jpg"
import Boco from "./assets/Boco.jpg"
import Qoqo from "./assets/Qoqo.jpg"
function Cards(){
    return(
        <div id="container">
        <h1 id="devH1">Our Developers</h1>
        <div className="dev-cards">
        <div className="dev-card">
            <img src={Randjit} alt="Randjit" />
            <h3>Randjit</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem animi 
                voluptatibus voluptates nihil laudantium veniam fugiat, facere ducimus 
                possimus quis minus. Quibusdam repellendus eligendi, iure aspernatur
                dignissimos nesciunt atque quaerat?
            </p>
        </div>
        <div className="dev-card">
            <img src={Padjit} alt="Padjit" />
            <h3>Padjit</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem animi 
                voluptatibus voluptates nihil laudantium veniam fugiat, facere ducimus 
                possimus quis minus. Quibusdam repellendus eligendi, iure aspernatur dignissimos nesciunt atque quaerat?
            </p>
            </div>
            <div className="dev-card">
            <img src={Boco} alt="Boco" />
            <h3>Boco</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem animi 
                voluptatibus voluptates nihil laudantium veniam fugiat, facere ducimus 
                possimus quis minus. Quibusdam repellendus eligendi, iure aspernatur dignissimos nesciunt atque quaerat?
            </p>
        </div>
        <div className="dev-card">
            <img src={Qoqo} alt="Qoqo" />
            <h3>Qoqo</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem animi 
                voluptatibus voluptates nihil laudantium veniam fugiat, facere ducimus 
                possimus quis minus. Quibusdam repellendus eligendi, iure aspernatur dignissimos nesciunt atque quaerat?
            </p>
        </div>
        </div>
        </div>
    );
}
export  default Cards;