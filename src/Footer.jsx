function Footer(){
    return (
        <footer>
            <div className="footerBtns">               
            <ul className="footerNav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <p>&copy; {new Date().getFullYear()} The Funny Website</p>
            </div>
            <div className="footerEmail">
                <h2>Contact Us:</h2>
                <input type="email" placeholder="Your email" name="" id=""/>
                <input type="submit" name="" id="" />
            </div>
        </footer>
    );
}
export default Footer