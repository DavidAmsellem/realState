import "./Navbar.scss"


function Navbar(){
return (
<nav>
    <div className="left">
        <a href="/" className="logo">
            <img src="/logo2.png" alt="logo" />
           
        </a>
        <a href="/">Home</a>
        <a href="/">Quienes somos</a>
        <a href="/">Contacto</a>
       
    </div>
    <div className="right">
        <a href="/">Sign in</a>
        
        <a href="/" className="register">Sign up</a>
    </div>

</nav>
)

}

export default Navbar;