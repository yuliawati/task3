/*
console.log (data);

console.log (data.results[0].members);

var membersList = data.results[0].members;


var table = '';
var states = [];
var parties = []



for (var i = 0; i<membersList.length; i++) {
      /* keep looping from the member*/

   /*   var member =membersList[i];
      var fullname = member.first_name+(member.middle_name||" ")+member.last_name; 


      /* += untuk mempengaruhi data table yang akan terisi di '' */
      /* to create list data and to insert to the table */
     /* table += '<tr>';
      table += '<td>';   
      table += '<a href= "'+member.url+' " target=_blank>'+fullname+'</a>';
      table += '</td>';
      table += '<td>'+ member.party + '</td>';
      table += '<td class="state">'+ member.state + '</td>';
      table += '<td>'+ member.seniority + '</td>';
      table += '<td>'+ member.votes_with_party_pct + '%' + '</td>';
      table += '</tr>';

if (states.indexOf(member.state)==-1){
      states.push(member.state)
}

}
states.sort()

for (var i=0;i<states.length;i++){
      var state = states[i];
      $("#stateSelector").append("<option>"+state+"</option>")
}

/*rumus utk mensortir nama state*/
/*$("#stateSelector").change(function(){
/*lalu buat variable utk memilih state degn menggunankan 'this'*/
/*var chooseState=this.value;
/*lalu create rumus yg dibawa ini utk mencari setiap state yg akan berubah'*/
/*$("td.state").each (function () {
      var currentState = $(this).text();
if(currentState==chooseState){
      $(this).parent().show();
}else {
      $(this).parent().hide();
}
})
});


/*ini untuk buat filter dari checkbox*/
/*function updateParty (){
var parties = $("input[name='party-filter']:checked")
.map (function() {return $(this).val(); })
.get();
/*if you want to check the result in the console*/
/*console.log(party)


$('#senate-table tbody tr').each (function () {
      var party = $(this).find(".party").text ();
/*(x= adalah variable subject yang akan di cari/yang akan di select 'checked', y=adalah variable object keseluruhan yaitu Republican, Democrate, Independent */
     /* var partySelected = isIncluded (party, parties);
      $(this).toggle (partySelected);
      })
}

function isIncluded (x,y){
      return y.length===0 || y.indexOf(x) != -1 ;
}

$("input[name='party-filter']").on("change", updateParty);

document.getElementById("house-data").innerHTML = table;

console.log (data);


//untuk dapat data member, kita harus buat concole.log dari yang general dan buat titik sampe ke spesifiknya.//

console.log (data.results[0].members);

// buat nama utk mewakili pencarian data diatas yang lebih spesifik yaitu members: data result members contohnya: memberList
var membersList = data.results[0].members;

/*untuk membuat stp section di memberlist appears, tulis dgn rumus Loops (for)  sebutkan nama disetiap section
var 'nama section' = nama var dr pencarian data.. disetiap variable, lalu panggil consol.log*/

console.log (data);


//untuk dapat data member, kita harus buat concole.log dari yang general dan buat titik sampe ke spesifiknya.//

console.log (data.results[0].members);

// buat nama utk mewakili pencarian data diatas yang lebih spesifik yaitu members: data result members contohnya: memberList
var membersList = data.results[0].members;



var table = '';
var states =[];
var party = []


for (i = 0; i<membersList.length; i++) {
      /* keep looping from the member*/

      var member = membersList[i];
      var fullname = member.first_name+(member.middle_name||" ")+member.last_name; 


      /* += untuk mempengaruhi data table yang akan terisi di '' */
      /* to create list data and to insert to the table */
      table += '<tr>';
      table += '<td>';   
      table += '<a href= "'+member.url+' " target=_blank>'+fullname+'</a>';
      table += '</td>';
      table += '<td class="party">'+ member.party + '</td>';
      table += '<td class="state">'+ member.state + '</td>';
      table += '<td>'+ member.seniority + '</td>';
      table += '<td>'+ member.votes_with_party_pct + '%' + '</td>';
      table += '</tr>';



/*jika ingin menbuat list nama2 negara agar tidak terduplikat, 
if(condition){putinArray}==> if(not in Array){put in Array} rumusnya:
if.indexOf(namaparentnya.nama subject) , -1 : apabila ada item yg tidak tertulis dan itu artinya "True"
'push' artinya: adding the element ; 'sort' artinya mensortir */

      if(states.indexOf(member.state) == -1 ){
            states.push(member.state)
      } 

}

states.sort()

/*lalu buat rumus seperti ini, lalu dengan input jquery yaitu: $ sign (put the id from html dari kolom 'select') */
for (var i = 0; i<states.length; i++) {
var state = states[i];
$("#stateSelector").append("<option>"+ state +"</option>")
}




/*jika ingin mensortir nama state yang akan appear di table */

$("#stateSelector").change(function() {

/*buat variable: 'this'= adalah right klik lalu create a value*/
var chooseState = this.value;
/*lalu tulis $ dari table data dgn subject, kemudian tulis 'each' otomatis utk setiap negara yg di select */
$ ('td.state').each (function() {

/*buat variable: nama dari condition state yang di select, lalu $ sign */
var currentState = $(this).text();

/*buat variable: 'this'= adalah untuk meng right klik lalu create a value */
if(currentState==chooseState){

/*then create $ sign and "parent": adalah sumber dari si subject yg dituju, lalu do action "show" */

$(this).parent().show();
}
/*atau else kl setelah itu ingin menghilangkan */
else { 
$(this).parent().hide();
}
})
});



/*ini untuk buat filter dari checkbox*/
function updateParty (){
var parties = $("input[name='party-filter']:checked")
.map (function() {return $(this).val(); })
.get();
/*if you want to check the result in the console*/
console.log(party)


$('#congress-table tbody tr').each (function () {
      var party = $(this).find(".party").text ();
/*(x= adalah variable subject yang akan di cari/yang akan di select 'checked', y=adalah variable object keseluruhan yaitu Republican, Democrate, Independent */
      var partySelected = isIncluded (party, parties);
      $(this).toggle(partySelected);
      })
}

function isIncluded (x,y){
      return y.length===0 || y.indexOf(x) != -1 ;
}

$("input[name='party-filter']").on("change", updateParty);



document.getElementById("house-data").innerHTML = table;






