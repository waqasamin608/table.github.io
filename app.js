var list1 = document.getElementById("list1");

function Table(){
    var list_Tag = document.createElement("li")
    list1.appendChild(list_Tag)
    var span1 = document.createElement("span")
    var span1Text = document.createTextNode("name")
    span1.appendChild(span1Text)
    list_Tag.appendChild(span1)

    var span2 = document.createElement("span")
    var span2Text = document.createTextNode("Age")
    span2.appendChild(span2Text)
    list_Tag.appendChild(span2)
    
    var AddArrowBtn = document.createElement("button")
    var AddArrowBtnText = document.createTextNode("Add row")
    AddArrowBtn.appendChild(AddArrowBtnText)
    AddArrowBtn.setAttribute("onclick","AddRows()")
    list_Tag.appendChild(AddArrowBtn)
    console.log(AddArrowBtn)
}


var list = document.getElementById("list");




function AddRows(){
  


    // Li Tag Created 

    var li = document.createElement("li");
   list.appendChild(li)
   li.setAttribute("class","ForFlex")

//    Two input Tag Create into Li tag 

   var input1 = document.createElement("input")
   input1.placeholder = "First Name"
   li.appendChild(input1)

   var input2 = document.createElement("input");
   li.appendChild(input2)
   input2.placeholder = "Second Name"
//    Create a Remove Button 

   var removeBtn = document.createElement("button")
   var removeTxt = document.createTextNode("Remove")
   removeBtn.appendChild(removeTxt)
   li.appendChild(removeBtn)
  removeBtn.setAttribute("class","RemoveBtn1")
   removeBtn.setAttribute("onclick","removeFullList(this)")


}
// Remove Button Function

function removeFullList(e){
    e.parentNode.remove()
    console.log();
}