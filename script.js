 const addbutton=document.getElementById('btn1');
 const addbutton2=document.getElementById('btn2');
 const addbutton3=document.getElementById('btn3');
 const addbutton4=document.getElementById('btn4');
 const input1 =document.getElementById('input1');
 const input2 =document.getElementById('input2');
 const input3 =document.getElementById('input3');
 const input4 =document.getElementById('input4');
 const form=document.querySelector('form');
 const ul1=document.getElementById('ul1');
 const fin=document.getElementById('termine');
 const ul2=document.getElementById('ul2');
 const ul3=document.getElementById('ul3');
 const ul4=document.getElementById('ul4');
 let tab=[];

 function todo(src){
   // console.log("tes!!");
   // console.log( src.parentElement);
   if(src.checked){
    src.parentElement.style.backgroundColor="red";
    src.parentElement.style.textDecoration="line-through";
 }else{
    src.parentElement.style.backgroundColor="white";
    src.parentElement.style.textDecoration="none";
 }
 }
 function termine( result){
   const span=result.parentElement.getElementsByTagName("span")[0];
  //  console.log(span);
   const contenu= span.innerText;
   const li = document.createElement('li');
   li.innerHTML = `
      <div>
             <input type="checkbox" onclick="todo(this)">
             <span class="ml-4" > ${contenu} </span>
             <button onclick="listt(this)" class="bg-gray-400 w-20 rounded-md ml-6"><ion-icon name="trash"></ion-icon></button>
               <span class="inline-block cursor-pointer bg-yellow-400 rounded-md ml-8 w-20" onclick="termine(this)">terminée</span>
       </div>
     `;
 fin.appendChild(li); 
 result.parentElement.remove();
 }
  function listt(supprimer){
 supprimer.parentElement.remove();
  }
 addbutton.addEventListener('click', (e) => {
     e.preventDefault();
  if(input1.value != ""){
    
     
     //   console.log(tab);
     const li = document.createElement('li');
           li.innerHTML = `
              <div>
                     <input type="checkbox" onclick="todo(this)">
                     <span class="ml-4" > ${input1.value} </span>
                     <button onclick="listt(this)" class="bg-gray-400 w-20 rounded-md ml-6"><ion-icon name="trash"></ion-icon></button>
                       <span class="inline-block cursor-pointer bg-yellow-400 rounded-md ml-8 w-20" onclick="termine(this)">terminée</span>
               </div>
             `;
        ul1.appendChild(li);  
   //   for( i=0;i<tab.length;i++){
   //      console.log(tab[i]);
   //   //   li.innerText=tab[i];
       
   //   }
    // tab.shift(input.value);
    input1.value="";
 
  }
 

 });
  addbutton2.addEventListener('click', (e) => {
   e.preventDefault();
if(input2.value != ""){
   //   console.log(tab);
   const li = document.createElement('li');
         li.innerHTML = `
            <div>
                   <input type="checkbox" onclick="todo(this)">
                   <span class="ml-4" > ${input2.value} </span>
                   <button onclick="listt(this)" class="bg-gray-400 w-20 rounded-md ml-6"><ion-icon name="trash"></ion-icon></button>
                     <span class="inline-block cursor-pointer bg-yellow-400 rounded-md ml-8 w-20" onclick="termine(this)">terminée</span>
             </div>
           `;
      ul2.appendChild(li);  
 //   for( i=0;i<tab.length;i++){
 //      console.log(tab[i]);
 //   //   li.innerText=tab[i];
     
 //   }
  // tab.shift(input.value);
  input2.value="";
}
});

addbutton3.addEventListener('click', (e) => {
   e.preventDefault();
if(input3.value != ""){
   //   console.log(tab);
   const li = document.createElement('li');
         li.innerHTML = `
            <div>
                   <input type="checkbox" onclick="todo(this)">
                   <span class="ml-4" > ${input3.value} </span>
                   <button onclick="listt(this)" class="bg-gray-400 w-20 rounded-md ml-6"><ion-icon name="trash"></ion-icon></button>
                     <span class="inline-block cursor-pointer bg-yellow-400 rounded-md ml-8 w-20" onclick="termine(this)">terminée</span>
             </div>
           `;
      ul3.appendChild(li);  
 //   for( i=0;i<tab.length;i++){
 //      console.log(tab[i]);
 //   //   li.innerText=tab[i];
     
 //   }
  // tab.shift(input.value);
  input3.value="";

}

});
let phrase;
addbutton4.addEventListener('click', (e) => {
   e.preventDefault();
   
const valeur4=input4.value;
const regex2 = /^[\s]*$/
if(regex2.test(valeur4)){
 phrase = valeur4.replace(regex2,"");
}else{
   phrase=valeur4.trim();
}
   
//  console.log(regex2.test(phrase));
// // const regex1 = /\s/g
// regex1.test(valeur4)
// // 
// // console.log(valeur4.replace(regex1,""));
if(phrase != ""){
  
   
   //   console.log(tab);
   const li = document.createElement('li');
         li.innerHTML = `
            <div>
                   <input type="checkbox" onclick="todo(this)">
                   <span class="ml-4" > ${phrase} </span>
                   <button onclick="listt(this)" class="bg-gray-400 w-20 rounded-md ml-6"><ion-icon name="trash"></ion-icon></button>
                     <span class="inline-block cursor-pointer bg-yellow-400 rounded-md ml-8 w-20" onclick="termine(this)">terminée</span>
             </div>
           `;
      ul4.appendChild(li);  
 //   for( i=0;i<tab.length;i++){
 //      console.log(tab[i]);
 //   //   li.innerText=tab[i];
     
 //   }
  // tab.shift(input.value);
  valeur4="";

}

});
// ------------------------------------------------------------------
//  function getTodoOnTodo(todo){
//    console.log(todo);
//  };
//  div.addEventListener('click',() =>{
// getTodoOnTodo()
//  });

// const addbutton = document.getElementById('btn1');
// const input = document.querySelector('input[type=text]');
// const form = document.querySelector('form');
// const ul = document.querySelector('ul');
// let tab = [];
// let i;

// addbutton.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (input.value != "") {
//         tab.push(input.value);
//         input.value = "";
//         console.log(tab);

//         // Efface le contenu de ul avant de réajouter les éléments
//         ul.innerHTML = '';

//         for (i = 0; i < tab.length; i++) {
//             console.log(tab[i]);
//             const li = document.createElement('li');
//             li.innerHTML = `
//                 <div>
//                     <input type="radio">
//                     <span>${tab[i]}</span>
//                     <ion-icon name="trash"></ion-icon>
//                 </div>
//             `;
//             ul.appendChild(li);
//             li.addEventListener('click', () => {
//                 li.style.background = "red";
//             });
//         }

//         tab.shift();
//     }
// });
