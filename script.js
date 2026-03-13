async function kirim(){

let input=document.getElementById("userInput").value;
let chat=document.getElementById("chatBox");

chat.innerHTML+=`<p><b>Anda:</b> ${input}</p>`;

let context=knowledgeBase.join("\n");

try{

let response=await fetch("https://api.openai.com/v1/responses",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer "+API_KEY
},

body:JSON.stringify({

model:"gpt-4.1-mini",

input:[
{
role:"system",
content:"AI Islami bernama Al Istiqomah"
},
{
role:"system",
content:context
},
{
role:"user",
content:input
}

]

})

});

let data=await response.json();

console.log(data);

let reply=data.output[0].content[0].text;

chat.innerHTML+=`<p><b>AI:</b> ${reply}</p>`;

}catch(error){

chat.innerHTML+=`<p><b>AI:</b> Terjadi error: ${error}</p>`;

}

}
