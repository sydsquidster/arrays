var array = document.body.querySelector(".array");

var warriors = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
]

for(var i=0; i<warriors.length; i++){
    var ele = document.createElement("div");
    var nameEle = document.createElement("h2");
    var damageele = document.createElement("h4");
    var healthele = document.createElement("h4");
    var warriorele = document.createElement("h4");
    nameEle.innerHTML = "Name: " +warriors[i].name;
    damageele.innerHTML = "Damage: " +warriors[i].damage;
    healthele.innerHTML = "Health: " +warriors[i].health;


    if(warriors[i].damage>=2 && warriors[i].health>=10 && warriors[i].warrior===true){
        ele.appendChild(nameEle);
        ele.appendChild(damageele);
        ele.appendChild(healthele);
        array.appendChild(ele);
        if(warriors[i].name.includes("a")){
            ele.style.color = "red"}

    }


};