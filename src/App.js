import "./App.css";
import React, { useEffect, useState } from "react";
import EditUserForm from "./form/EditUserForm";

import {
  emailValidator,
  phoneValidator,
  textAlphabetValidator,
  birthDayValidator,
  genderValidator
} from "./Validate";

function App() {
  const usersData = [
    {
      index: 1,
      username: "LeVy",
      phone: "1234567891",
      BirthDay: "2020-10-20",
      Gender: "Male",
      email: "leqquang@gmail.com",
      message: "hello vy",
    },
    {
      index: 2,
      username: "Haayy",
      phone: "1234567891",
      BirthDay: "2020-10-20",
      Gender: "Female",
      email: "Haahu@gmail.com",
      message: "hello Hungda",
    },
  ];

  const [users, setUsers] = useState(usersData);

  const initialValues = {
    index: null,
    username: "",
    phone: "",
    BirthDay: "",
    Gender: "",
    email: "",
    message: "",
  };

  // const isave = {
  //   username: "",
  //   email: "",
  // };

  const [user, setUser] = useState(initialValues);

  const [formErrors, setFromErrors] = useState({});

  const [isEdit, setIsEdit] = useState(false);

  const [itemEdits, setItemEdits] = useState([]);

  // const [itemSave, setItemSave] = useState(isave);
  // console.log(itemSave);
  //TODO:

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
      addUser(user);
    }

    // console.log(users);
    // console.log(formErrors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  const addUser = (user) => {
    user.index = users.length + 1;
    setUsers([...users, user]);
    setUser({
      index: null,
      username: "",
      phone: "",
      BirthDay: "",
      Gender: "",
      email: "",
      message: "",
    });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const updateUser = (updatedUser, indexU) => {
    setIsEdit(false);
    setUsers(users.map((user) => (user.index === indexU ? updatedUser : user)));
    setUser({
      index: null,
      username: "",
      phone: "",
      BirthDay: "",
      Gender: "",
      email: "",
      message: "",
    });
  };

  const cancelUpdate = () => {
    setIsEdit(false);
    setUser({
      index: null,
      username: "",
      phone: "",
      BirthDay: "",
      Gender: "",
      email: "",
      message: "",
    });
  };

  const handleEdit = (value) => {
    setIsEdit(true);
    setUser({
      index: value.index,
      username: value.username,
      phone: value.phone,
      BirthDay: value.BirthDay,
      Gender: value.Gender,
      email: value.email,
      message: value.message,
    });
  };

  const handleCheckEdit = (index) => {
    setItemEdits((prev) => {
      const isChecked = itemEdits.includes(index);
      if (isChecked) {
        return itemEdits.filter((itemIndex) => itemIndex !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const validateInput = (input) => {
    const errors = {};
    errors.username = textAlphabetValidator(input.username);
    errors.message = textAlphabetValidator(input.message);
    errors.email = emailValidator(input.email);
    errors.phone = phoneValidator(input.phone);
    errors.birthDay = birthDayValidator(input.BirthDay);
    errors.Gender = genderValidator(input.Gender);
    return errors;
  };

  const handleDelete = (deleteIndex) => {
    const Items = users.filter((user) => {
      return user.index !== deleteIndex;
    });
    setUsers(Items);
  };
  return (
    <div
      className="container border mt-4 p-3 d-flex justify-content-center align-content-center"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
        borderRadius: "4px",
        gap: "15px",
      }}
    >
      {isEdit ? (
        <EditUserForm
          cancelUpdate={cancelUpdate}
          user={user}
          updateUser={updateUser}
          validateInput={validateInput}
          handleInputChange={handleInputChange}
        />
      ) : (
        <form
          className="w-25"
          onSubmit={(event) => {
            event.preventDefault();
            setFromErrors(validateInput(user));
            if (
              formErrors.username !== "" ||
              formErrors.email !== "" ||
              formErrors.phone !== "" ||
              formErrors.message !== "" ||
              formErrors.birthDay !== "" ||
              formErrors.Gender !==""
            ) {
              return;
            }
            if (
              formErrors.username === null &&
              formErrors.email === null &&
              formErrors.phone === null &&
              formErrors.message === null &&
              formErrors.birthDay === null &&
              formErrors.Gender === null
            ) {
              addUser(user);
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
            <p className="text-danger">{formErrors.phone}</p>
          </div>
          <div className="form-group mb-0">
            <label htmlFor="BirthDay">BirthDay</label>
            <input
              className="form-control"
              id="BirthDay"
              type="Date"
              placeholder="Your BirthDay"
              name="BirthDay"
              value={user.BirthDay}
              onChange={handleInputChange}
            />
            <p className="text-danger">{formErrors.birthDay}</p>
          </div>
          <div className="form-group mb-0 mt-2">
        Gender
        <div
          onChange={handleInputChange}
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
            />
          </div>
          <div>
            <label for="female">Female</label>{" "}
            <input
              id="female"
              type="radio"
              value="Female"
              name="Gender"
              
            />
          </div>
          <div>
            <label for="other">Other</label>{" "}
            <input
              id="other"
              type="radio"
              value="Other"
              name="Gender"
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
              onChange={handleInputChange}
              rows="3"
            />
            <p className="text-danger">{formErrors.message}</p>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      )}

      <table
        className="table table-bordered table-sm mt-2 w-75 h-50 overflow-auto"
        style={{ overflowY: "auto", height: "300px" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>BirthDay</th>
            <th>Gender</th>
            <th>Message</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((value) =>
            itemEdits.includes(value.index) ? (
              <tr key={value.index}>
                <td>
                  <input
                    value={value.username}
                    // onChange={(e) => {
                    //   if (e.target.value) {
                    //     setItemSave((prev)=>{
                    //       return { ...prev, username: e.target.value, email: "" }
                    //     });
                    //   }
                    // }}
                  />
                </td>
                <td>
                  <input
                    value={value.email}
                    // onChange={(e) => {
                    //   if (e.target.value) {
                    //     setItemSave((prev)=>{
                    //       return { ...prev, username: "", email: e.target.value }
                    //     });
                    //   }
                    // }}
                  />
                </td>
                <td>{value.phone}</td>
                <td>{value.BirthDay}</td>
                <td>{value.Gender}</td>
                <td>{value.message}</td>
                <td className="text-center">
                  <i
                    className="fa-solid fa-check btn-info p-1 btn-action"
                    onClick={() => {
                      handleCheckEdit(value.index);
                    }}
                  ></i>
                </td>
              </tr>
            ) : (
              <tr key={value.index}>
                <td>{value.username}</td>
                <td>{value.email}</td>
                <td>{value.phone}</td>
                <td>{value.BirthDay}</td>
                <td>{value.Gender}</td>
                <td>{value.message}</td>
                <td className="text-center">
                  <i
                    className="fa-solid fa-pencil btn-info p-1 btn-action"
                    onClick={() => {
                      handleEdit(value);
                      handleCheckEdit(value.index);
                    }}
                  ></i>
                  <i
                    className="fa-solid fa-trash-can btn-danger p-1 btn-action"
                    onClick={() => handleDelete(value.index)}
                  ></i>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
