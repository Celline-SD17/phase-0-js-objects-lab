//Write your code here

const attendee = { 

 attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
}
console.log(attendee)



function logAttendeeName(attendee){
  //function logs attendee name
console.log(attendee.name)
}



function logTicketPrice(attendee){
  //function logs ticket price
console.log(attendee.ticketPrice)
}




function updateTicketType(attendee, newTicketType){
  //function updates ticketType property
  attendee.ticketType = "General"

}


function updateTicketPrice(attendee, newTicketType){
//function updates ticket price
attendee.ticketPrice = 200
}


function removeEventProperty(attendee){
  //function removes event property
  delete attendee.event; 
}



function addCheckedInProperty(attendee){
  //adds a new property
  attendee.checkedIn = true

}
addCheckedInProperty(attendee)
console.log(attendee)

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};