// index.js

// Signup function
function signup(userName) {
  // existing users in the function scope (as requested)
  const users = ["alice", "bob", "charlie"];

  // check if user already exists (case-sensitive)
  if (users.includes(userName)) {
    return "User Already Regsistered, Please Login";
  }

  // add new user and return success message
  users.push(userName);
  return "Signup Sucessfull, Please Login";
}

// quick manual test
console.log(signup("bob"));      // "User Already Regsistered, Please Login"
console.log(signup("david"));    // "Signup Sucessfull, Please Login"


// index.js

// Signup function
function signup(userName) {
  const users = ["alice", "bob", "charlie"];
  if (users.includes(userName)) {
    return "User Already Regsistered, Please Login";
  }
  users.push(userName);
  return "Signup Sucessfull, Please Login";
}

// Login function
function login(userName, password) {
  const users = ["alice", "bob", "charlie"];
  // check user presence
  if (!users.includes(userName)) {
    return "User Not Found, Please Signup";
  }
  // check password
  if (password === "Emp@123") {
    return "Login Sucessfull...";
  } else {
    return "Wrong Password....";
  }
}

// quick manual tests
console.log(signup("bob"));      // "User Already Regsistered, Please Login"
console.log(signup("david"));    // "Signup Sucessfull, Please Login"

console.log(login("bob", "Emp@123"));   // "Login Sucessfull..."
console.log(login("bob", "wrong"));     // "Wrong Password...."
console.log(login("mike", "Emp@123"));  // "User Not Found, Please Signup"
