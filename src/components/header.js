export default function Header() {
    return (
      <section>
        <header class="header" id="header">
         <nav class="nav container">
            <a href="#home" class="nav__logo">
               <i class="ri-book-3-line"></i> logo
            </a>
            <div class="nav__menu">
               <ul class="nav__list">

                  <li class="nav__item">
                     <a href="#home" class="nav__link active-link">
                        <span>home</span>
                     </a>
                  </li>
                  
                  <li class="nav__item">
                     <a href="#service" class="nav__link">
                        <span>Service</span>
                     </a>
                  </li>

                  <li class="nav__item">
                     <a href="#featured" class="nav__link">
                        <span>Featured</span>
                     </a>
                  </li>


                  <li class="nav__item">
                     <a href="#aboutus" class="nav__link">
                        <span>About us</span>
                     </a>
                  </li>

                  <li class="nav__item">
                     <a href="#footer" class="nav__link">
                        <span>Contact</span>
                     </a>
                  </li>

               </ul>
            </div>
            <div class="nav__actions">
               <i class="ri-search-line search-button" id="search-button"></i>
               <i class="ri-moon-line change-theme" id="theme-button"></i>
            </div>
         </nav>
      </header>
      </section>
    )
  }
  