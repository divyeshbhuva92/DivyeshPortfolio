function scrollTosummary() {
  document.querySelector("#summary").scrollIntoView({ behavior: "smooth" });
}

const about = document.getElementById("about");
about.addEventListener("click", scrollTosummary);

function scrollToskills() {
  document.querySelector("#skill").scrollIntoView({ behavior: "smooth" });
}

const skills = document.getElementById("skills");
skills.addEventListener("click", scrollToskills);

function scrollTocontact() {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
}

const connect = document.getElementById("connect");
connect.addEventListener("click", scrollTocontact);

const mode = document.getElementById("mode");
const bgimg = document.getElementById("bgimg");
const text = document.getElementsByTagName("p");
const contact = document.getElementById("contact");
const social = document.getElementById("social");
const profilepic = document.getElementById("profilepic");

var darkmode = true;

mode.addEventListener("click", () => {
  if (darkmode == true) {
    mode.innerHTML = `<img src="./images/moon.svg" alt="">`;
    bgimg.innerHTML = `<img src="./images/light.png" class="bgimg" alt="" srcset="">`;
    contact.innerHTML = `<div class="footericonbox">
<img src="./images/email-ROUND.svg" alt="" class="h-10">
<p class="footericontext">dev92bhuva@gmail.com</p>
</div>
<div class="footericonbox">
<img src="./images/CALL.svg" alt="" class="h-10">
<p class="footericontext">+91 92767 03503</p>
</div>
<div class="footericonbox">
<img src="./images/WHATSAP-ROUND.svg" alt="" class="h-10">
<p class="footericontext">+91 73833 86381</p>
</div>`;
    social.innerHTML = `<div class="footericonbox">
<img src="./images/linkedin-ROUND.svg" alt="" class="h-10">
<p class="footericontext">divyesh-bhuva-0266b710a</p>
</div>
<div class="footericonbox">
<img src="./images/github.svg" alt="" class="h-10">
<p class="footericontext">+91 92767 03503</p>
</div>
<div class="footericonbox">
<img src="./images/LOCATION-ROUND.svg" alt="" class="h-10">
<p class="footericontext">SURAT, GUJARAT, INDIA</p>
</div>`;
    profilepic.innerHTML = `<div
class="h-60 w-60 border-4 border-gray-700 rounded-full border-dotted flex justify-center items-center">
<img src="/images/DEV.jpeg" alt="img" class="h-52 rounded-full ">
</div>`;
    for (i = 0, len = text.length; i < len; i++) {
      text[i].style.color = "rgb(36, 36, 36)";
    }
    darkmode = false;
  } else {
    mode.innerHTML = `<img src="./images/sun-white.svg" alt="">`;
    bgimg.innerHTML = `<img src="./images/dark.png" class="bgimg" alt="" srcset="">`;
    contact.innerHTML = `<div class="contact" id="contact">
    <div class="footericonbox">
        <img src="./images/email-ROUND-white.svg" alt="" class="h-10">
        <p class="footericontext">dev92bhuva@gmail.com</p>
    </div>
    <div class="footericonbox">
        <img src="./images/CALL-white.svg" alt="" class="h-10">
        <p class="footericontext">+91 92767 03503</p>
    </div>
    <div class="footericonbox">
        <img src="./images/WHATSAP-ROUND-white.svg" alt="" class="h-10">
        <p class="footericontext">+91 73833 86381</p>
    </div>`;
    social.innerHTML = `<div class="footericonbox">
    <img src="./images/linkedin-ROUND-white.svg" alt="" class="h-10">
    <p class="footericontext">divyesh-bhuva-0266b710a</p>
</div>
<div class="footericonbox">
    <img src="./images/github-white.svg" alt="" class="h-10">
    <p class="footericontext">+91 92767 03503</p>
</div>
<div class="footericonbox">
    <img src="./images/LOCATION-ROUND-white.svg" alt="" class="h-10">
    <p class="footericontext">SURAT, GUJARAT, INDIA</p>
</div>`;
    profilepic.innerHTML = `<div
class="h-60 w-60 border-4 border-cyan-700 rounded-full border-dotted flex justify-center items-center">
<img src="/images/DEV.jpeg" alt="img" class="h-52 rounded-full ">
</div>`;
    for (i = 0, len = text.length; i < len; i++) {
      text[i].style.color = "#f1f1f1";
    }
    darkmode = true;
  }
});
