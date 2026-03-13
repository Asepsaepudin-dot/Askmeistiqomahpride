let knowledgeBase = JSON.parse(localStorage.getItem("aiKnowledge")) || [

"Islam adalah agama rahmatan lil alamin",

"Sholat adalah tiang agama",

"Istiqomah berarti konsisten dalam kebaikan"

];

function simpanKnowledge(){

localStorage.setItem("aiKnowledge", JSON.stringify(knowledgeBase));

}
