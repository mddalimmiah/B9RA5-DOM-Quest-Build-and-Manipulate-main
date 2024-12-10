// console.log('blog connected');

document.getElementById('home').addEventListener('keyenter', function(){
    window.location.href='/index.html';
  })

  function getInputFieldById(id){
    const inputField=document.getElementById(id);
    return inputField;
  }

  const inputField=document.getElementById('input-comment');
  const commentContainer=document.getElementById('comment-container');
  inputField.addEventListener('keypress', function(event){
    if(event.key==='Enter'){

        const p=document.createElement('p');
        const newComment=inputField.value;
        p.innerText=newComment;

        const commentContainer=document.getElementById('comment-container');
        commentContainer.appendChild(p);
        inputField.value='';
        
    }
  });

//   getInputFieldById('input-comment2').addEventListener('keypress', function(event){
    
//     if(event.key==='Enter'){
//         const inputValue=getInputFieldById('input-comment2').value;
//         const p=document.createElement('p');
//         p.innerText=inputValue;
//         const commentContainer2=document.getElementById('comment-container');
//         commentContainer2.appendChild(p);
//         inputValue='';
//     }
//   });


// comment 2

const inputField2=document.getElementById('input-comment2');
const commentContainer2=document.getElementById('comment-container2');
inputField2.addEventListener('keypress', function(event){
  if(event.key==='Enter'){

      const p=document.createElement('p');
      const newComment=inputField2.value;
      p.innerText=newComment;

      const commentContainer2=document.getElementById('comment-container');
      commentContainer2.appendChild(p);
      inputField2.value='';
      
  }
});