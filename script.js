// 🔐 Protect pages (redirect if not logged in)
if(localStorage.getItem("loggedIn") !== "true" &&
   !window.location.href.includes("login.html")) {
    window.location.href = "login.html";
}

// 👋 Show name on home page
window.onload = function() {
    var name = localStorage.getItem("studentName");
    if(name && document.getElementById("nameDisplay")){
        document.getElementById("nameDisplay").innerText = name;
    }
};

// ✅ Login function (user enters own name)
function login() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if(name === "" || password === ""){
        alert("Please enter name and password");
        return;
    }

    // save user data
    localStorage.setItem("studentName", name);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("loggedIn", "true");

    window.location.href = "home.html";
}

// 🚪 Logout
function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

function register(eventName) {
    let events = JSON.parse(localStorage.getItem("events")) || [];

    if(events.includes(eventName)){
        alert("✅ Already registered!");
        return;
    }

    events.push(eventName);
    localStorage.setItem("events", JSON.stringify(events));

    alert("🎉 Registered for " + eventName);
}
// 🌙 Dark mode toggle
function toggleDark(){
    document.body.classList.toggle("dark");
}
function searchEvents() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let title = card.innerText.toLowerCase();
        card.style.display = title.includes(input) ? "block" : "none";
    });
}
// show profile name
window.onload = function() {
    var name = localStorage.getItem("studentName");

    if(name){
        document.getElementById("nameDisplay") &&
        (document.getElementById("nameDisplay").innerText = name);

        document.getElementById("profileName") &&
        (document.getElementById("profileName").innerText = name);

        document.getElementById("profileNameBox") &&
        (document.getElementById("profileNameBox").innerText = name);
    }
};

// toggle dropdown
function toggleProfile(){
    let box = document.getElementById("profileBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
}