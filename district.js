var dbDivsion=firebase.database().ref('Dvision')

var divisionList=[]   //Array 

//Event fired when ever a new item will add in firebase Division table
// jb b firebase pr ak new item ya new division add hoga to ye event auto fired hoga
dbDivsion.on('child_added',function(getData){
    var abc=getData.val()
    //console.log(abc)
    divisionList.push(abc)
    fillDivisionDDL()
}
)
function fillDivisionDDL(){
    console.log(divisionList)
    var opt=[]

    for(i=0; i<divisionList.length; i++){
        opt.push('<option value=' + divisionList[i]['Key'] + '>' + divisionList[i]['DivsionName'] + '</opton>')
    }
   
    var ddlDivsion=document.getElementById('ddlDivsion')
    ddlDivsion.innerHTML=opt
    }




var dbDistrict=firebase.database().ref('District')
//Constructor of District
function ObjectDistrct(key,divisionKey,division,district){
    this.Key=key
    this.DivisionKey=divisionKey
    this.Division=division
    this.District=district
}

function submitDistrict(){
    //get firebase new key to savae a new object
    var key=dbDistrict.push().key
    
    //get key of Divsion from select of division value
    var ddlDivsion=document.getElementById('ddlDivsion')
    var divisionKey = ddlDivsion.options[ddlDivsion.selectedIndex].value 
    var divsioson =  ddlDivsion.options[ddlDivsion.selectedIndex].text
    var district = document.getElementById('txtDistrict').value 

    var ojbectDistrict =new  ObjectDistrct(key,divisionKey,divsioson,district)

    dbDistrict.child(key).set(ojbectDistrict)

}










