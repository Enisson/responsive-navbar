<div >
  
  # Hamburguer menu React Js

  This is a simple project I've made to show how a hamburger menu works in React Js. 

  ![navBar](https://user-images.githubusercontent.com/70671093/159998925-a8d68727-e0c0-4160-bcb1-6b94302ed25c.gif)

  ## The Project

  First, I created the project design on the figma platform

  ![image](https://user-images.githubusercontent.com/70671093/159999131-8608236f-b86e-4474-867f-eb18149b837c.png)
  
  ## How it works
  
  I created a folder in component where I will put the files that will be responsible for the menu 
  
  ![image](https://user-images.githubusercontent.com/70671093/160001235-6da46cce-2ccd-43b6-a7af-6253ea674173.png)
  
  In the NavLinks file I put the html of the navigation menu 
  
  ![image](https://user-images.githubusercontent.com/70671093/160006040-996b62ce-e5d5-4368-9dcc-61a91a221ca0.png)
  
  And I imported this file in both MobileNavigaiton and Navigation.
  the MobileNavigation file will be responsible for the mobile settings while the Navigation file will be responsible for the web settings.
  
  I import both Mobile Navigation and Navigation files in the Navbar file. The Navbar file will be responsible for rendering both.
  
  ![image](https://user-images.githubusercontent.com/70671093/160003159-fddd8646-0d6a-46f7-a383-4828aebb3275.png)
  
  ## Mobile Configuration
  
  In the MobileNavigation file I make use of useState which will tell me the state of the menu.
  
  ![image](https://user-images.githubusercontent.com/70671093/160004787-e5b4f7d3-4f7f-44bb-b585-4e932bbfe845.png)
  
  then I import the images that I will use for the hamburger menu. I created a click event that calls an anonymous function and changes between true and false each   time this event is called
  
  ![image](https://user-images.githubusercontent.com/70671093/160004907-65528315-600a-486e-80ca-eb2fc86012b2.png)
  
  I make use of the ternary operator to know if the menu is open or not. if true, show const closeIcon on screen and if false, show const hamburguerIcon instead.
  
  ![image](https://user-images.githubusercontent.com/70671093/160006897-2b6baceb-5560-47d6-9070-97ecbdfb655a.png)
  
  When the hamburger menu is activated, clicking on the navigation menus will not close the menu. To solve this problem I made use of props.
  I created a function called closeMobileMenu that will pass the value of open to false.
  
  ![image](https://user-images.githubusercontent.com/70671093/160009898-566b5248-5da8-4bbc-bb74-9a0097cd4bdd.png)
  
  And pass some parameters to the NavLinks file
  
  ![image](https://user-images.githubusercontent.com/70671093/160010081-aa4d7bc9-0588-4eeb-8d81-535738c252a3.png)
  
  And I pass these parameters through a click event inside the NavLinks file on each li.
  
  ![image](https://user-images.githubusercontent.com/70671093/160010585-16256aac-e1ec-4f82-99de-9ff651e22ec1.png)

  
</div>
