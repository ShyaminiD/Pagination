/*fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
.then(data => data.json())
.then(users => loadList(users,currentpage))*/

async function getUsers(){
    const data = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
    const users = await data.json();
    console.log(users);
    loadList(users,currentPage);
  }
  
   getUsers(currentPage);
  var currentPage = 1;
  


var pagTable = document.createElement("table");
pagTable.setAttribute("id","myTable");

var row1 = document.createElement("tr");
row1.setAttribute("class","headRow");

var tabHead = document.createElement("th");
tabHead.append(row1);
var th1 = document.createElement("th");
th1.innerText = "Id";
var th2 = document.createElement("th")
th2.innerText = "Name";
var th3 = document.createElement("th")
th3.innerText = "Email";
row1.append(th1, th2, th3);
pagTable.append(row1);
document.body.append(pagTable);

var allButtons = document.createElement("div");
allButtons.setAttribute("class","alltheButtons");
var divButtons = document.createElement("div");
divButtons.innerHTML = `<button onclick="firstPage()">First</button>
      <button onclick= "nextPage()">Next</button>`;
      divButtons.style.gap = "0px";
      allButtons.append(divButtons); 
      //document.body.append(divButtons);   
 for(var j=2 ;j<=10;j++)
  {
      
     var pagButton= document.createElement("div");
     pagButton.innerHTML =`<button onclick= "onPage(value)" value = "${j}" >${j}</button>`
     allButtons.append(pagButton);
    
      
 }
 var pagButtonlast= document.createElement("div");
 pagButtonlast.innerHTML=  `<button onclick= "lastPage()">Last</button>`
 allButtons.append(pagButtonlast);
// document.body.append(pagButtonlast);
document.body.append(allButtons);



function loadList(users, currentPage,numberPerPage) {

     var numberPerPage = 10;
     var begin = ((currentPage - 1) * numberPerPage);
     var end = begin + numberPerPage;
   
     pageList = users.slice(begin, end);
     numberOfPages = Math.ceil(users.length/numberPerPage);
     console.log(numberOfPages);
     console.log(pageList);
  
     buildTable(pageList);

    }


    function buildTable(pageList) {
  
        for (var i= 0;i<pageList.length;i++)
         {
             
         
         var pagRow = document.createElement('tr');
         

         pagTable.append(pagRow);
         

       
           var td1 = pagRow.insertCell(0);
           var td2 = pagRow.insertCell(1);
           var td3 = pagRow.insertCell(2);
            
           td1.innerHTML = pageList[i].id;
           td2.innerHTML = pageList[i].name;
           td3.innerHTML = pageList[i].email;
         }
         
         
       }
       
    
     function deleteRows(){
       var tableHeaderRowCount = 1;
      var rowCount = pagTable.rows.length;
       for(var k=1;k< rowCount; k++)
       {
        pagTable.deleteRow(tableHeaderRowCount);
       }
     }
   
 function firstPage() {
    
    deleteRows();
 
    currentPage = 1;
    console.log(currentPage);
    getUsers(currentPage);
    return currentPage;
  
}
 
function nextPage() {
    
    deleteRows();
    currentPage += 1;
    getUsers(currentPage);
}

function onPage(value) {
    
    deleteRows();
    currentPage = 0;
    currentPage += parseInt(value);
    getUsers(currentPage);

}


function lastPage() {
  deleteRows();
    currentPage = numberOfPages;
    getUsers(currentPage);
}








