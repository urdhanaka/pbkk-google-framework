const form = document.getElementById("registrationForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxo5D8xPmTCD3hm6HCugV9tTY2GP83SItNXDzSoHxlfuO6kRQl-C_E2GoZUGn9DnXoEHA/exec",
      {
        method: "POST",
        body: new FormData(form),
      },
    );

    const data = await response.json();

    if (data.result === "success") {
      alert("Registrasi berhasil. Terima kasih sudah mendaftar.");
      window.location.reload();
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    console.log(JSON.stringify(error));
    console.error("Error! Something's wrong", JSON.stringify(error));
    alert("Registrasi Gagal!! Silahkan coba lagi.");
  }
});
