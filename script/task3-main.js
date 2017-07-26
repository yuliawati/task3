
var members = data.results[0].members;


var totalMembers = {
    "R": [],
    "I": [],
    "D": []
}
$.each(members, function(i, member) {
    totalMembers[member.party].push(member);
})

$(".totalDemocrats").append("<td>" +  totalMembers.D.length + "</td>")

$(".totalRepublicans").append("<td>" + totalMembers.R.length + "</td>")

$(".totalIndependents").append("<td>" +  totalMembers.I.length + "</td")


//mancari % voted party 
function getAverageVotesForParty(partyMembers) {
    var loyaltyPercentages = 0;
    $.each(partyMembers, function(i, partyMember) {

        loyaltyPercentages = loyaltyPercentages + parseFloat(partyMember.votes_with_party_pct)
    })
    console.log("loyaltyPercentages", loyaltyPercentages);
    console.log("partyMembers.length", partyMembers.length);
    console.log(loyaltyPercentages/partyMembers.length)


    return Math.floor(loyaltyPercentages / partyMembers.length * 100) / 100 + "%"
}
//$(".totalDemocratsPercentage").text(getAverageVotesForParty(totalMembers.D))
$(".totalDemocrats").append("<td>" +  getAverageVotesForParty(totalMembers.D) + "</td>")

//mancari %v voted party republicans 

//$(".totalRepublicansPercentage").text(getAverageVotesForParty(totalMembers.R))
$(".totalRepublicans").append("<td>" + getAverageVotesForParty(totalMembers.R) + "</td>")

//mancari %v voted party Independents

// $(".totalIndependentsPercentage").text(getAverageVotesForParty(totalMembers.I))
$(".totalIndependents").append("<td>" + getAverageVotesForParty(totalMembers.I) + "</td>")








// #4
// get the bottom 10% of loyalty
// Loyalty party


function getLeastLoyalPartyMembers(percentage, members) {
    members = members.sort(function(member1, member2) {
        return parseFloat(member1.votes_with_party_pct) - parseFloat(member2.votes_with_party_pct);
    })
    return getPercentageOfMembers(percentage, members);
}

function getMostLoyalPartyMembers(percentage, members) {
    members = members.sort(function(member1, member2) {
        return parseFloat(member2.votes_with_party_pct) - parseFloat(member1.votes_with_party_pct);
    })
    return getPercentageOfMembers(percentage, members);
}

function getPercentageOfMembers(percentage, partyMembers) {
    var partyMembersNeeded = Math.ceil(partyMembers.length * percentage)
    var selectedPartyMembers = []
    var i = 0;
    while (selectedPartyMembers.length < partyMembersNeeded) {
        selectedPartyMembers.push(partyMembers[i]);
        if (partyMembers[i].votes_with_party_pct == partyMembers[i + 1].votes_with_party_pct) {
            partyMembersNeeded++;
        }
        i++;
    }
    return selectedPartyMembers;
}

//PARTY LOYALTY

var mostLoyal = getMostLoyalPartyMembers(0.1, members);
var leastLoyal = getLeastLoyalPartyMembers(0.1, members);

// mencari Least Loyal Party
$.each(leastLoyal, function(i,members){
    var fullName = members.first_name + " " + (members.middle_name || " ") + " " + members.last_name;
    var tr = $('<tr>');
    var link = $('<a>').attr('href',members.url).attr('target','_blank').text(fullName) 
    $ ("<td>").append(link).appendTo(tr);
    $ ('<td>').text(members.total_votes).appendTo(tr);
    $ ('<td>').text(members.votes_with_party_pct + " %").appendTo(tr);

$('#leastLoyal tbody').append(tr);
});

// mencari most Loyal Party
$.each(mostLoyal, function(i,members){
    var fullName = members.first_name + " " + (members.middle_name || " ") + " " + members.last_name;
    var tr = $('<tr>');
    var link = $('<a>').attr('href',members.url).attr('target','_blank').text(fullName) 
    $ ("<td>").append(link).appendTo(tr);
    $ ('<td>').text(members.total_votes).appendTo(tr);
    $ ('<td>').text(members.votes_with_party_pct + " %").appendTo(tr);

$('#mostLoyal tbody').append(tr);

});


//ATTENDANCE

function getLeastEngagedMembers(percentage, members) {
    members = members.sort(function(member1, member2) {
        return parseFloat(member1.missed_votes_pct) - parseFloat(member2.missed_votes_pct);
    })
    return getPercentageOfMembers(percentage, members);
}

function getMostEngagedMembers(percentage, members) {
    members = members.sort(function(member1, member2) {
        return parseFloat(member2.missed_votes_pct) - parseFloat(member1.missed_votes_pct);
    })
    return getPercentageOfMembers(percentage, members);
}

var leastEngaged = getLeastEngagedMembers(0.1,members);
var mostEngaged = getMostEngagedMembers(0.1,members);

// mencari Least Engaged Attendance

$.each(leastEngaged, function(i,members){
    var fullName = members.first_name+" "+(members.middle_name || "")+" "+ members.last_name;
    var tr = $("<tr>");
    var link = $('<a>').attr('href',members.url).attr('target','_blank').text(fullName) 
    /*line diatas "link" ini utk create link of each name member , create jquery 
    ($ sign with a bracket (sign of link), then 'attr' dimana  didalamnya adalah root untuk mendapatkan 
    nama link, then 'attr' dgn sign --> target, _blank agar bisa dibuka di tab/window baru lalu tujuan nama yang akan di link fullName)*/
    $ ("<td>").append(link).appendTo(tr);
    $ ("<td>").text(members.total_votes).appendTo(tr);
    $ ("<td>").text(members.missed_votes_pct+" %").appendTo(tr);

$('#leastEngaged tbody').append(tr);
});


// mencari Most Engaged Attendance

$.each(mostEngaged, function(i,members){
    var fullName = members.first_name+" "+(members.middle_name || "")+" "+ members.last_name;
    var tr = $("<tr>");
    var link = $('<a>').attr('href',members.url).attr('target','_blank').text(fullName) 
    $ ("<td>").append(link).appendTo(tr);
    $ ("<td>").text(fullName).appendTo(tr);
    $ ("<td>").text(members.total_votes).appendTo(tr);
    $ ("<td>").text(members.missed_votes_pct+" %").appendTo(tr);

$('#mostEngaged tbody').append(tr);
});




















