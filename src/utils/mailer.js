import emailjs from "@emailjs/browser";

export function openMail(mail) {
  return new Promise((resolve, reject) => {
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        mail,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        (res) => {
          resolve(res);
        },
        (error) => {
          reject(error);
        }
      );
  });
}

export function openSocial(link) {
  window.open(link);
}

export function navigate(id) {
  window.location.href = id;
}
