//console.log(firebase)

var dbDivision = firebase.database().ref('Dvision')

var divisionList = []

dbDivision.on('child_added', function (getData) {
    var abc = getData.val()
    divisionList.push(abc)
    fillDivisionDDL()
})

function fillDivisionDDL() {
    //console.log(divisionList)
    var opt = []
    for (i = 0; i < divisionList.length; i++) {
        opt.push('<option value=' + divisionList[i]['Key'] + '>' + divisionList[i]['DivsionName'] + '</opton>')
    }

    var ddldivision = document.getElementById('ddlDivsion')
    ddldivision.innerHTML = opt
}

function onChangeDivision() {
    //console.log('fired')
    fillDistrict()
}

var dbDistrict = firebase.database().ref('District')


var districtList = []

function fillDistrict() {
    var opt=[]
        
    var ddlDistrict = document.getElementById('ddlDistrict')
    ddlDistrict.innerHTML = opt

    var ddlDivision = document.getElementById('ddlDivsion')
    var divisionKey = ddlDivision.options[ddlDivision.selectedIndex].value
      
    districtList=[]
   
    dbDistrict.orderByChild('DivisionKey').equalTo(divisionKey).on('child_added', function (getData) {
        console.log('yes')
        var abc = getData.val()
        //console.log(abc)
        
         districtList.push(abc)
         //console.log(districtList)

         
         fillDistrictDDL()
    })

    //fillDistrictDDL()
    //console.log(divisionKey)
}

function fillDistrictDDL(){
    var opt = []
    //console.log(districtList)
    
    for (i = 0; i < districtList.length; i++) {
        opt.push('<option value=' + districtList[i]['key'] + '>' + districtList[i]['District'] + '</opton>')
    }

    var ddlDistrict = document.getElementById('ddlDistrict')
    ddlDistrict.innerHTML = opt
}

var dbTown = firebase.database().ref('Town')
//function ObjectTown(Key,town)

//var dbTown=firebase.database().ref("town")
function ObjectTown(key, townname, town, division, district) {
    this.key = key
    this.Townname = townname
    this.town = town
    this.division = division
    this.district = district
}




function submitTown() {
    var key = dbTown.push().key
    var townname = document.getElementById("townname").value
//    var ObjectTown = new obje
}