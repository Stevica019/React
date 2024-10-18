function Footer(){
    return (
        <footer>
            <div className="pSite">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil possimus rem cum soluta a vero ad eveniet magni iusto, necessitatibus commodi ut? Quidem vel similique saepe quae dolor exercitationem!</p>               
            <p>&copy; {new Date().getFullYear()} The Funny Website</p>
            </div>
            <div className="footerBtn">
            <ul className="footerNav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>
        </footer>
    );
}
export default Footer