async function fetchUsers() {
  const userList = document.getElementById("userList");
  userList.innerHTML = "Loading users...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Network response was not ok");

    const users = await response.json();

    userList.innerHTML = ""; 

    users.forEach(user => {
      const div = document.createElement("div");
      div.className = "user-card";
      div.innerHTML = `
        <strong>Name:</strong> ${user.name}<br>
        <strong>Email:</strong> ${user.email}<br>
        <strong>Address:</strong> ${user.address.suite}, ${user.address.street}, ${user.address.city} - ${user.address.zipcode}
      `;
      userList.appendChild(div);
    });
  } catch (error) {
    userList.innerHTML = `<p style="color:red;">Failed to Fetch.</p>`;
    console.error("Fetch error:", error);
  }
}

window.addEventListener("load", fetchUsers);
