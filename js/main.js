
let guest_number_adult = 0;
let guest_number_child = 0;
let guest_number_infant = 0;
let guest_number_pet = 0;
function guest_number_increase(type) {
    if (type === "adult") {
        guest_number_adult = guest_number_adult + 1;
        $("#guest-adult").html(guest_number_adult);
    }
    else if (type === "child") {
        guest_number_child = guest_number_child + 1;
        $("#guest-child").html(guest_number_child);
    }
    else if (type === "infant") {
        guest_number_infant = guest_number_infant + 1;
        $("#guest-infant").html(guest_number_infant);
    }
    else if (type === "pet") {
        guest_number_pet = guest_number_pet + 1;
        $("#guest-pet").html(guest_number_pet);
    }
    $("#numbers_of_guest").html(`(` + guest_number_adult + ` guests,` + guest_number_child + ` child,` + guest_number_infant + ` infants,` + guest_number_pet + ` pets)`)
}
function guest_number_decrease(type) {
    if (type === "adult") {
        if (guest_number_adult <= 0) {
            guest_number_adult = 0
        } else {
            guest_number_adult = guest_number_adult - 1;
            $("#guest-adult").html(guest_number_adult);
        }
    }
    else if (type === "child") {
        if (guest_number_child <= 0) {
            guest_number_child = 0
        } else {
            guest_number_child = guest_number_child - 1;
            $("#guest-child").html(guest_number_child);
        }
    }
    else if (type === "infant") {
        if (guest_number_infant <= 0) {
            guest_number_infant = 0
        } else {
            guest_number_infant = guest_number_infant - 1;
            $("#guest-infant").html(guest_number_infant);
        }
    }
    else if (type === "pet") {
        if (guest_number_pet <= 0) {
            guest_number_pet = 0
        } else {
            guest_number_pet = guest_number_pet - 1;
            $("#guest-pet").html(guest_number_pet);
        }
    }
    $("#numbers_of_guest").html(`(` + guest_number_adult + ` guests,` + guest_number_child + ` child,` + guest_number_infant + ` infants,` + guest_number_pet + ` pets)`)
}