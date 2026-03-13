async function kirim(){

let input=document.getElementById("userInput").value;

let chat=document.getElementById("chatBox");

chat.innerHTML+=`<p><b>Anda:</b> ${input}</p>`;

let context=knowledgeBase.join("\n");

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

{role:"system",content:context},

{role:"user",content:input}

]

})

});

let data=await response.json();

let reply=data.choices[0].message.content;

chat.innerHTML+=`<p><b>AI:</b> ${reply}</p>`;

}

function tambahKnowledge(){

let text=document.getElementById("knowledgeInput").value;

knowledgeBase.push(text);

simpanKnowledge();

alert("Pengetahuan ditambahkan");

}
