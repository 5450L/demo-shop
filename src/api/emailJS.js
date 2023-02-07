import emailjs from "@emailjs/browser";

export const sendEmail = (form) => {
  console.log(form);
  emailjs
    .sendForm(
      "demoshop_tsbfnrz",
      "template_lstgr0m",
      form.current,
      "L76KQ2ZDsK9Xw-Zhi"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
