function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "vipshakh";
    const templateID = "template_n9una78";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Sizning xabaringiz muvaffaqiyatli yuborildi!");
  
      })
      .catch(err=>console.log(err));
  
  }


