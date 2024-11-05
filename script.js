function sendMessage(event) {
    event.preventDefault();

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const message = document.querySelector("#message");

    const oldErrors = document.querySelectorAll(".error");
    oldErrors.forEach(error => error.remove());

    let isValid = true;

    if (name.value === "") {
        const p = document.createElement("p");
        p.setAttribute("class", "error text-red-500 text-sm mt-1");
        p.innerHTML = "Nama harus diisi!";
        name.parentElement.appendChild(p);
        isValid = false;
    }

    if (email.value === "") {
        const p = document.createElement("p");
        p.setAttribute("class", "error text-red-500 text-sm mt-1");
        p.innerHTML = "Email harus diisi!";
        email.parentElement.appendChild(p);
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        const p = document.createElement("p");
        p.setAttribute("class", "error text-red-500 text-sm mt-1");
        p.innerHTML = "Format email tidak valid!";
        email.parentElement.appendChild(p);
        isValid = false;
    }

    if (phone.value === "") {
        const p = document.createElement("p");
        p.setAttribute("class", "error text-red-500 text-sm mt-1");
        p.innerHTML = "Nomor HP harus diisi!";
        phone.parentElement.appendChild(p);
        isValid = false;
    } else if (!/^[0-9]{10,15}$/.test(phone.value)) {
        const p = document.createElement("p");
        p.setAttribute("class", "error text-red-500 text-sm mt-1");
        p.innerHTML = "Nomor HP harus berupa angka dengan panjang 10-15 digit!";
        phone.parentElement.appendChild(p);
        isValid = false;
    }

    if (message.value === "") {
        const p = document.createElement("p");
        p.setAttribute("class", "error text-red-500 text-sm mt-1");
        p.innerHTML = "Pesan harus diisi!";
        message.parentElement.appendChild(p);
        isValid = false;
    }

    if (isValid) {
        const url = "https://api.whatsapp.com/send?phone=6285158276955&text=halo%20Akira!%0Asaya%20*" + name.value + "*%0Aemail%20saya%20*" + email.value + "*%0Anomor%20saya%20*" + phone.value + "*%2C%0A%0A*" + message.value + "*";
        window.open(url);
    }
}
