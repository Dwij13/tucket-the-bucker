var bucketList = []
// var listcontainer= document.getElementById("list-container")
var listcontainer= document.querySelector("#list-container")

function addValues(){
  console.log("Button clicked");
  var value = document.getElementById("input-field").value
  // console.log("value: ", value);
  bucketList.push(value)
  displayList()
}

function displayList(){
  
  listcontainer.innerHTML=""


  for(let i = 0 ;i<bucketList.length;i++){
    var li= document.createElement("li")
    li.innerHTML= bucketList[i]+"</button><button class=\"tick\" onclick=\"remove("+i+")\">✔️</button>"
    li.className="list"
    listcontainer.append(li)    
  }
}

function reset(){
  bucketList=[]
  displayList()
}

function strikeThrough(element){
  var element = listcontainer.childNodes[i].childNodes[0];
  element.innerHTML="<s>"+element.innerHTML+"</s>"
}

function remove(i){
  bucketList.splice(i,1)
  displayList()
}

