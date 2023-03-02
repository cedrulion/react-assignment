const navSlide= () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
//toggle nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
   });
    //animate links
    <nav> 
    <div class="logo">
        <h4>Nav</h4>
    </div>
    <ul class="nav-links">
        <li><a href="home.html">HOME</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Project</a></li>
    </ul>
    <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>

    </div></nav>
    <section>
    <div className="form">
    <label>Username </label>
      <input type="text" name="uname" required /><br />
      <label>Password </label>
      <input type="password" name="pass" required />
 </div>
    </section>
    <section  className='yay' >
      <h1> yay</h1>
      
    </section>

}
    navSlide();