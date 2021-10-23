 
// FETCHING ALL THE COMMENTS DATA.
//================================
const fetchComments = async() =>{
      let data = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
      let comments = await data.json();
      return comments; 
      
  };

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

  
  // FETCHES INDIVIDUAL COMMENTS DIRECTLY VIA THE API.
  //==================================================
const fetchComment = async (id)=>{
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      let comment = await data.json();
      return  comment;

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
 console.log(comment);
}

//ACTIVATION/CALLING THE FINAL FUNCTIONS.
//==================================
 commentDisp(3);
 displayData(1);
