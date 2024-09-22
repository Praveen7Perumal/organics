let praveen=document.getElementById("jee");
  let jeevitha= () =>
  {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
  };
  praveen.addEventListener("click",jeevitha);