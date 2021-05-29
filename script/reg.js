var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
    }
  }

$(function(){

    $('#nexttab1').click(function(e){
        e.preventDefault();
        $('#myTab a[href="#ai"]').tab('show');
    })

})
$(function(){

  $('#nexttab2').click(function(e){
      e.preventDefault();
      $('#myTab a[href="#qw"]').tab('show');
  })

})

$(function(){

  $('#nexttab3').click(function(e){
      e.preventDefault();
      $('#myTab a[href="#du"]').tab('show');
  })

})

function formValidation(oEvent) { 
  oEvent = oEvent || window.event;
  var txtField = oEvent.target || oEvent.srcElement; 
  
  var t1ck=true;
  var msg=" ";
  if(document.getElementById("validationCustom01").value.length < 3 )
  { t1ck=false; msg = msg + "Your name should be minimun 3 char length";}
  if(!document.getElementById("r1").checked && !document.getElementById("r2").checked)
  { t1ck=false;msg = msg + " Select your Gender";}
  if(document.getElementById("s1").value.length < 3 )
  { t1ck=false;msg = msg + " Select one of the games ";}
  if(!document.getElementById("c1").checked )
  { t1ck=false;msg = msg + " You must agree to terms & conditions ";}
  
  //alert(msg + t1ck);
  
  if(t1ck){document.getElementById("nexttab1").disabled = false; }
  else{document.getElementById("nexttab1").disabled = true; }
  } 



// function AddressInfo(f) {
//   if(f.billingtoo.checked == true) {
//     f.caddress.value = f.paddress.value;
//     f.ccity.value = f.pcity.value;
//     f.cstate.value = f.pstate.value;
//     f.cpincode.value = f.ppincode.value;
//   }
// }  





// $(function(){
//   ("#billingtoo").click(function(){
//     if($(this).is(':checked')){     
//     var caddress=$("#caddress").val();
//     $("#paddress").val(paddress);
//    }
//   });
// });




// function setBillingAddress() {
//   var homeAddress = document.getElementById('homeaddress');
//   var billingAddress = document.getElementById('billingaddress');
//   var homePostalCheck = document.getElementById('homepostalcheck');
//   if (homePostalCheck.checked == true) {
//     billingAddress.value = homeAddress.value;
//     billingAddress.disabled = true;
//   } else {
//     billingAddress.disabled = false;
//   }
// }

// var SameAsAbove = {
//   init: function(){
//     var homePostalCheck = document.getElementById('homepostalcheck');
//     Core.addEventListener(homePostalCheck, 'click', setBillingAddress);
//   }
// }

// Core.start(SameAsAbove);




// var loadFile = function(event) {
//   var image = document.getElementById('output');
// 	image.src = URL.createObjectURL(event.target.files[0]);
// };


// function readURL(input) {
//   if (input.files && input.files[0]) {
//       var reader = new FileReader();

//       reader.onload = function (e) {
//           $('#blah')
//               .attr('src', e.target.result)
//               .width(150)
//               .height(200);
//       };

//       reader.readAsDataURL(input.files[0]);
//   }
// }


// $(function () {
//   $(":file").change(function () {
//       if (this.files && this.files[0]) {
//           var reader = new FileReader();
//           reader.onload = imageIsLoaded;
//           reader.readAsDataURL(this.files[0]);
//       }
//   });
// });

// function imageIsLoaded(e) {
//   $('#myImg').attr('src', e.target.result)
//   .width(200);
// };


