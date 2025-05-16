import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-database.js";

 const firebaseConfig = {
    apiKey: "AIzaSyDb8AbodnmdskahrwDWe-i0sUKqaRyq0xg",
    authDomain: "firedb-37764.firebaseapp.com",
    projectId: "firedb-37764",
    storageBucket: "firedb-37764.firebasestorage.app",
    messagingSenderId: "292571814199",
    appId: "1:292571814199:web:055e232acd146e391b62b2",
    measurementId: "G-0BKWQRJCGV",
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase();

  // Validate helper
  function validateForm(formID) {
    const form = document.getElementById(formID);
    form.classList.add("was-validated");
    return form.checkValidity();
  }

  // Handle login
  function validateLoginForm() {
    if (validateForm("loginForm")) {
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      console.log("Đăng nhập:", email, password);
      swal("Thông báo", "Login thành công (demo)", "success");
    }
  }

  // Handle register
  function validateRegisterForm() {
    if (validateForm("registerForm")) {
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;

      // Gửi lên Firebase
      set(ref(db, "Register/" + email.replace(".", "_")), {
        email: email,
        password: password,
      })
        .then(() => {
          swal("Thành công!", "Đăng ký thành công!", "success");

          // Chuyển sang tab login
          const loginTab = new bootstrap.Tab(document.querySelector("#login-tab"));
          loginTab.show();

          // Reset form
          document.getElementById("registerForm").reset();
          document.getElementById("registerForm").classList.remove("was-validated");
        })
        .catch((error) => {
          swal("Lỗi!", "Không thể đăng ký!", "error");
          console.error(error);
        });
    }
  }

  // Bắt sự kiện submit
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    validateLoginForm();
  });

  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    validateRegisterForm();
  });