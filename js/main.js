// this programming pattern we are using here, is called a module.
// this is a module pattern, also caled an IIFE
// Also called, an Immediately Invoked Function Expression


(() => {
    // this is a Javascript comment
    console.log('fired! javascript is working!');

    //console.log is like print("some text") in Python
})();



(() => {
    // this is a JavaScript comment
    console.log('fired! javascript is working!');

    const icons = document.querySelectorAll('svg');
    console.log(icons); 
    
   
    icons[0].addEventListener('click', function onClick() {
      console.log(this.id);
    });
    
    for (const icon of icons) {
      icon.addEventListener('click', function onClick() {
        console.log(this.id);
      });
    }
})();