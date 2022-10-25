import { Component } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { HiLockClosed } from "react-icons/hi";
import styles from "../../../styles/Home.module.css";

let userInput = {
  email: "",
  password: "",
};

class LoginForm extends Component {
  state: any = { userInput, disable: true };

  validDetails = () => {
    const { userInput } = this.state;

    const regExp = "[a-zA-Z0-9_.+-]+@+[a-z]+[.]+[a-z]+";

    const emailAddress = userInput.email.match(regExp);
    const password = userInput.password !== "";

    if (emailAddress && password) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  };

  valueChanged = (event: any) => {
    const { userInput } = this.state;
    const userData = event.target.value;
    const inputName = event.target.name;

    switch (inputName) {
      case "email":
        this.setState(
          { userInput: { ...userInput, email: userData } },
          this.validDetails
        );
        break;
      case "password":
        this.setState(
          { userInput: { ...userInput, password: userData } },
          this.validDetails
        );
        break;

      default:
        break;
    }
  };

  formSubmitted = (event: any) => {
    event.preventDefault();

    // const { userInput } = this.state;

    // const isValid = this.validateForm();

    const user = {
      email: "",
      password: "",
    };

    this.setState({ userInput: user, disable: true });

    // if (isValid) {
    //   this.setState({ userInput: user, errorMsg: false });
    // } else {
    //   this.setState({ errorMsg: true });
    // }
  };

  render() {
    const { disable, userInput } = this.state;

    const loginBtn = disable ? styles.loginBtnDisabled : styles.loginBtn;

    return (
      <div className={styles.bg}>
        <div className={styles.form_container}>
          <h1 className={styles.fatCatHeading}>Fatcat</h1>
          <p className={styles.para}>Empowering Educational Technology.</p>
          <button type="button" className={styles.btn}>
            Read More
          </button>
        </div>

        <form className={styles.form} onSubmit={this.formSubmitted}>
          <h1 className={styles.greetHeading}>Hello Again!</h1>
          <p className={styles.paragraph}>Welcome Back</p>

          <div className={styles.inputBg}>
            <AiOutlineMail className={styles.icons} />
            <input
              autoComplete="off"
              name="email"
              onChange={this.valueChanged}
              value={userInput.email}
              className={styles.input}
              type="email"
              placeholder="Email Address"
            />
          </div>

          <div className={styles.inputBg}>
            <HiLockClosed className={styles.icons} />
            <input
              name="password"
              value={userInput.password}
              onChange={this.valueChanged}
              className={styles.input}
              type="password"
              placeholder="Password"
            />
          </div>

          {/* {errorMsg && (
            <p className={styles.error}>*All fields are required.</p>
          )} */}

          <button disabled={disable} type="submit" className={loginBtn}>
            Login
          </button>

          <button type="button" className={styles.forgot}>
            Forgot password
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
