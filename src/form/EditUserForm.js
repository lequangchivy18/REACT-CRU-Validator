import { useEffect, useState } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.user);

  const [formErrors, setFromErrors] = useState({});

  useEffect(() => {
    setUser(props.user);
  }, [props]);

  useEffect(() => {
    if (
      formErrors.username === null &&
      formErrors.email === null &&
      formErrors.phone === null &&
      formErrors.message === null &&
      formErrors.birthDay === null &&
      formErrors.Gender === null
    ) {
      setUser(user);
      props.updateUser(user, user.index);
    }
    // console.log(user);
    // console.log(formErrors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);
  return (
    <form
      className="w-25"
      onSubmit={(event) => {
        event.preventDefault();
        setFromErrors(props.validateInput(user));
        if (
          formErrors.username !== "" ||
          formErrors.email !== "" ||
          formErrors.phone !== "" ||
          formErrors.message !== "" ||
          formErrors.birthDay !== "" ||
          formErrors.Gender !== ""
        ) {
          return;
        }
        if (
          formErrors.username == null &&
          formErrors.email == null &&
          formErrors.phone == null &&
          formErrors.message == null &&
          formErrors.birthDay === null &&
          formErrors.Gender === null
        ) {
          props.updateUser(user, user.index);
        }
      }}
    >
      <div className="form-group mb-0">
        <label htmlFor="name">Your Name</label>
        <input
          className="form-control"
          id="name"
          type="text"
          placeholder="Your Name"
          name="username"
          value={user.username}
          onChange={props.handleInputChange}
        />
        <p className="text-danger">{formErrors.username}</p>
      </div>
      <div className="form-group mb-0">
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          id="email"
          type="email"
          placeholder="Your Email"
          name="email"
          value={user.email}
          onChange={props.handleInputChange}
        />
        <p className="text-danger">{formErrors.email}</p>
      </div>
      <div className="form-group mb-0">
        <label htmlFor="email">Phone Number</label>
        <input
          className="form-control"
          id="phone"
          type="text"
          placeholder="Your Phone Number"
          name="phone"
          value={user.phone}
          onChange={props.handleInputChange}
        />
        <p className="text-danger">{formErrors.phone}</p>
      </div>
      <div className="form-group mb-0">
        <label htmlFor="BirthDay">BirthDay</label>
        <input
          className="form-control"
          id="BirthDay"
          type="Date"
          placeholder="Your diachi"
          name="BirthDay"
          value={user.BirthDay}
          onChange={props.handleInputChange}
        />
      </div>{" "}
      <div className="form-group mb-0 mt-2">
        Gender
        <div
          onChange={props.handleInputChange}
          className="d-flex align-content-center justify-content-center"
          style={{ gap: "5px" }}
        >
          <div>
            <label for="male">Male</label>{" "}
            <input
              id="male"
              type="radio"
              value="Male"
              name="Gender"
              checked={user.Gender === "Male"}
            />
          </div>
          <div>
            <label for="female">Female</label>{" "}
            <input
              id="female"
              type="radio"
              value="Female"
              name="Gender"
              checked={user.Gender === "Female"}
            />
          </div>
          <div>
            <label for="other">Other</label>{" "}
            <input
              id="other"
              type="radio"
              value="Other"
              name="Gender"
              checked={user.Gender === "Other"}
            />
          </div>
        </div>
        <p className="text-danger">{formErrors.Gender}</p>
      </div>
      <div className="form-group mb-0">
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control"
          id="message"
          placeholder="Your Message"
          name="message"
          value={user.message}
          onChange={props.handleInputChange}
          rows="3"
        />
        <p className="text-danger">{formErrors.message}</p>
      </div>
      <button className="btn btn-primary">Update user</button>{" "}
      <button className="btn btn-danger" onClick={props.cancelUpdate}>
        Cancel
      </button>
    </form>
  );
};
export default EditUserForm;
