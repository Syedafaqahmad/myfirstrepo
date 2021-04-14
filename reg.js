//console.log(firebase)
var dbDivsion=firebase.database().ref('Dvision')

function ObjectDivision(key,divisionName){
    this.Key=key
    this.DivsionName=divisionName
}

function submitDivsion(){
    var objectdivsion=new ObjectDivision()
    var key=dbDivsion.push().key
    var divisionName=document.getElementById('txtDivsion').value 

    objectdivsion.Key=key
    objectdivsion.DivsionName = divisionName

    dbDivsion.child(key).set(objectdivsion)
}