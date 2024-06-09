import  './Nav.css'

function Nav() {
  return (
    <div className='head'>
        <ul className="navbar">
            <li><a href="">Home</a></li>
            <li><a href="">Card</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Products</a></li>

        </ul>
        <ul className="nav-right">
            <li><a href=""><button>log in</button></a></li>
            <li><a href=""><button>Sign in</button></a></li>

        </ul>
      
    </div>
  )
}

export default Nav
