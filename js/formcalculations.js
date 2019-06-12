/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/
 
 //Set up an associative array 
 //The keys represent the MPR values
 //The value represents the number used in the calculation
 //We use this this array when the user selects an MPR value from the form
 var mprValues= new Array();
 mprValues["2800"]=.25;
 mprValues["2400/2500"]=.23;
 mprValues["2200"]=.2;
 mprValues["1900"]=.18;
 mprValues["1500"]=.21;
 mprValues["1200 Carbon"]=.25;
 mprValues["1200D"]=.23;
 mprValues["1200"]=.19;
 
	

//This function finds the MPR value based on the 
//drop down selection
function getValueFromMPR()
{
    var MPRNumber=0;
    //Get a reference to the form id="pressureDropForm"
    var theForm = document.forms["pressureDropForm"];
    //Get a reference to the select id="mpr"
     var selectedMPR = theForm.elements["mpr"];
     
    //set selectedMPR equal to value user chose
    MPRNumber = mprValues[selectedMPR.value];

    //finally we return MPRNumber
    return MPRNumber;
}
        
function calculateCFMValues()
{
    var CFM3 = document.getElementById("length")
}


function calculateTotal()
{
    var CFM3 = 0;
    
    //Here we get the pressure drop values by calling our function
    var cakePrice = getCakeSizePrice() + getFillingPrice() + candlesPrice() + insciptionPrice();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the Cake $"+cakePrice;

}