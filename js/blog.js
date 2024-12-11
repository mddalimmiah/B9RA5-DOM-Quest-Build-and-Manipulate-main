console.log('blog connected');

document.getElementById('home').addEventListener('click', function(){
    window.location.href='/index.html';
  });



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



const inputField2=document.getElementById('input-comment2');
const commentContainer2=document.getElementById('comment-container2');
inputField2.addEventListener('keypress', function(event){
  if(event.key==='Enter'){

      const p=document.createElement('p');
      const newComment=inputField2.value;
      p.innerText=newComment;

      const commentContainer2=document.getElementById('comment-container2');
      commentContainer2.appendChild(p);
      inputField2.value='';
      
  }
});
// comment 3
const inputField3=document.getElementById('input-comment3');
const commentContainer3=document.getElementById('comment-container3');
inputField3.addEventListener('keypress', function(event){
  if(event.key==='Enter'){

      const p=document.createElement('p');
      const newComment=inputField3.value;
      p.innerText=newComment;

      const commentContainer3=document.getElementById('comment-container3');
      commentContainer3.appendChild(p);
      inputField2.value='';
      
  }
});
// comment 4
const inputField4=document.getElementById('input-comment4');
const commentContainer4=document.getElementById('comment-container4');
inputField4.addEventListener('keypress', function(event){
  if(event.key==='Enter'){

      const p=document.createElement('p');
      const newComment=inputField4.value;
      p.innerText=newComment;

      const commentContainer4=document.getElementById('comment-container4');
      commentContainer4.appendChild(p);
      inputField4.value='';
      
  }
});