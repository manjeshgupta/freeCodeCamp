function generatePassword(passwordLength){
  const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for(let i = 0; i < passwordLength; i++){
    let indexed = Math.floor(Math.random() * char.length);
    password += char[indexed];
  }
  return password;
}
let password = generatePassword(12);
console.log("Generated password:"+  password);
