async function kirim(){

let input=document.getElementById("userInput").value;
let chat=document.getElementById("chatBox");

chat.innerHTML+=`<p><b>Anda:</b> ${input}</p>`;

try{

let response=await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer "+API_KEY
},

body:JSON.stringify({
model:"gpt-4o-mini",
messages:[
{role:"system",content:"AI Islami bernama Al Istiqomah"},
{role:"user",content:input}
]
})

});

let data=await response.json();

console.log(data);

if(data.choices){

let reply=data.choices[0].message.content;

chat.innerHTML+=`<p><b>AI:</b> ${reply}</p>`;

}else{

chat.innerHTML+=`<p><b>AI:</b> Error: ${JSON.stringify(data)}</p>`;

}

}catch(error){

chat.innerHTML+=`<p><b>AI:</b> Tidak bisa terhubung</p>`;

}

}
