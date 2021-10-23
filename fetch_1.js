 //DOM COMPONENTS FETCH
 //======================
 const paragraph = document.querySelector('.paragraph');
 const heading = document.querySelector('.heading');
//  const id =document.querySelector('.id').value;


// FETCHING ALL THE COMMENTS DATA.
//================================
const fetchComments = async() =>{
      let data = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
      let comments = await data.json();
      return comments; 
      
  };

  // FETCHES INDIVIDUAL COMMENTS DIRECTLY VIA THE API.
  //==================================================
const fetchComment = async (id)=>{
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      let comment = await data.json();
      return  comment;

}

// SIEVING THE DATA BY THE VIRTUE OF THE USER ID.
//==================================================

const dataByUserId = async (userId) => {
     
    let allData  = await fetchComments();
    allData  =  allData.filter((comment)=>{
        if (comment.userId === userId){
            let comments = comment

            return  comments  ;
        }
       
    })

    return  allData ;  
    
} 



  
  

// FUNCTION TO DISPLAY THE USER DATA.
//===================================
 const displayData = async (id) =>{
     let data = await dataByUserId(id);
     console.log(data);
 }

// FUNCTION TO DISPLAY A SINGLE COMMENT.
//==========================================

let commentDisp =async (id)=>{
 let comment = await fetchComment(id);
 heading.innerHTML = comment.title;
 paragraph.innerHTML = comment.body;
}

//ACTIVATION/CALLING THE FINAL FUNCTIONS.
//==================================

//  displayData(1);


//ALERT FUNCTION TO GET THE ID
//=============================
const promptBox = ()=>{
    const promptVal = prompt('Input the comment Id');
    commentDisp(promptVal);

}

//FUNCTION TO DISPLAY THE COMMENT ON THE SCREEN
//==================================================

 document.addEventListener("DOMContentLoaded", ()=>{

    promptBox();

 });