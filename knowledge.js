let knowledgeBase = JSON.parse(localStorage.getItem("aiKnowledge")) || [
"Islam adalah agama rahmatan lil alamin",
"Istiqomah berarti konsisten dalam kebaikan",
"Sholat adalah tiang agama"
];

function simpanKnowledge(){
localStorage.setItem("aiKnowledge", JSON.stringify(knowledgeBase));
}
