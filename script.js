function tampilData() {
    const SavedProfile = localStorage.getItem("profileData");
    const  profileData = SavedProfile ? JSON.parse(SavedProfile) : {
        name : "Rizki Hibatuloh",
        role: "Front End Designer",
        availability: "Fulltime",
        age: 21,
        location: "Jakarta",
        yoe: 2,
        email: "dinoxaurus@gmail.com"
    };
    document.getElementById("name").textContent = profileData.name;
    document.getElementById("role").textContent = profileData.role;
    document.getElementById("availability").textContent = profileData.availability;
    document.getElementById("age").textContent = profileData.age;
    document.getElementById("location").textContent = profileData.location;
    document.getElementById("yoe").textContent = profileData.yoe;
    document.getElementById("email").textContent = profileData.email;
}

tampilData();

//          Function untuk menampikan form edit 

document.getElementById("edit-btn").addEventListener("click", function() {
    document.getElementById("profile").style.display = "none";
    document.getElementById("profile-heading").style.display = "none";
    document.getElementById("form-section").style.display = "block";
    document.getElementById("form-heading").style.display = "flex";

    const profileData = JSON.parse(localStorage.getItem("profileData")) || {};

    document.getElementById("name-input").value = profileData.name || "";
    document.getElementById("role-input").value = profileData.role || "";
    document.getElementById("availability-input").value = profileData.availability || "";
    document.getElementById("age-input").value = profileData.age || "";
    document.getElementById("location-input").value = profileData.location || "";
    document.getElementById("yoe-input").value = profileData.yoe || "";
    document.getElementById("email-input").value = profileData.email || "";
});

document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault();
  

    const profileData = {
      name: document.getElementById("name-input").value,
      role: document.getElementById("role-input").value,
      availability: document.getElementById("availability-input").value,
      age: document.getElementById("age-input").value,
      location: document.getElementById("location-input").value,
      yoe: document.getElementById("yoe-input").value,
      email: document.getElementById("email-input").value
    };
  
    localStorage.setItem("profileData", JSON.stringify(profileData));

    window.location.reload();
  });
  