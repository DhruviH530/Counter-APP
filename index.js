const countval = document.querySelector('#counter');

// getelement by id bi use thay ////

// const countval =   document.getElementById('counter');

function increment (){
    // string value convert in integer 
        let value = parseInt(countval.innerText);
        // get the value from UI
        value = value +1;
        // update the value 
        countval.innerText = value;


};

function decrement (){
         // string value convert in integer 
         let value = parseInt(countval.innerText);
         // get the value from UI
         value = value - 1;
         // update the value 
         countval.innerText = value;

};
