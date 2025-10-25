class FormValidate {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
  }
  validate() {
    //validate khi submit
    this.validateOnSubmit();
    //validate khi blur
    this.validateOnBlur();
  }

  validateOnSubmit() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.fields.forEach((field) => {
        const inputEl = this.form.querySelector(`#${field}`);
        this.validateField(inputEl);
      });
    });
  }

  validateOnBlur() {
    this.fields.forEach((field) => {
      const inputEl = this.form.querySelector(`#${field}`);
      inputEl.addEventListener("input", () => {
        this.validateField(inputEl);
      });
    });
  }

  validateField(field) {
    if (!field.value.trim()) {
      this.setStatus(field, `${field.id} cannot be blank`, "error");
    } else {
      this.setStatus(field, null, "success");
    }

    if (field.type === "email") {
      if (!field.value.includes("@")) {
        this.setStatus(field, "Please enter valid email address", "error");
      } else {
        this.setStatus(field, null, "success");
      }
    }

    if (field.id === "password_confirmation") {
      const passwordField = this.form.querySelector("#password");
      if (!field.value.trim()) {
        this.setStatus(field, `${field.id} required`, "error");
      } else if (field.value !== passwordField.value) {
        this.setStatus(field, "Password does not match", "error");
      } else {
        this.setStatus(field, null, "success");
      }
    }
  }

  setStatus(field, message, status) {
    message = message?.charAt(0).toUpperCase() + message?.slice(1);
    message = message?.replaceAll?.("_", " ");
    const fieldId = field.id;
    const fieldGroupEl = this.form.querySelector(`.js-${fieldId}`);

    //icon success
    const iconSuccessEl = fieldGroupEl.querySelector(".js-icon-success");

    //icon error
    const iconErrorEl = fieldGroupEl.querySelector(".js-icon-error");

    //error message
    const errorMessageEl = fieldGroupEl.querySelector(".js-error-message");

    if (status === "success") {
      iconErrorEl.classList.add("hidden");
      field.classList.remove("border-[red]");
      errorMessageEl.innerText = "";
      iconSuccessEl.classList.remove("hidden");
    }

    if (status === "error") {
      iconSuccessEl.classList.add("hidden");
      field.classList.add("border-[red]");
      iconErrorEl.classList.remove("hidden");
      errorMessageEl.innerText = message;
    }
  }
}
const formEl = document.querySelector(".js-form");
const fields = ["username", "email", "password", "password_confirmation"];

const validation = new FormValidate(formEl, fields);
validation.validate(); //Tự động xử lý
