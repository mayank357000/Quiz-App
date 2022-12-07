const correctAnswers=['B','B','B','B'];
const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let score=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value]
    
    //check answers
    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index])
        score+=25;
    });
    // window.scroll(0,0);
    scroll(0,0);
    result.classList.remove("d-none");

    //creating animation for score%
    let output=0;
    let timer=setInterval(()=>{
      result.querySelector('span').textContent=`${output}%`;
      if(output===score)
      {
        clearInterval(timer);
      }else{
        output++;
      }
    },25);
    console.log(score);
});


//window our global object

// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// window.console.log(document.querySelector('form'));

// window.setTimeout(()=>{ //fire only once
//  //do something
// },3000);