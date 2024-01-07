import { Link } from "react-router-dom";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import { ContactComponent } from "./StyleComponent/Contact.styled";
import { CategoryScale } from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import {
  getContact,
  resetMessage,
  resetError,
  statusContact,
  deleteContact,
} from "../../store/contactReducer";
import Alert from "../../components/Alert/Alert";
import { IoCheckmarkCircle, IoCloseCircleSharp } from "react-icons/io5";
Chart.register(CategoryScale);

const Data = () => {
  const dispatch = useDispatch();
  const { contact, message, error } = useSelector((state) => state.contact);
  const [alert, setAlert] = useState(null);
 
  const showAlert = (icon, type, message) => {
    setAlert({
      icon: icon,
      title: type,
      text: message,
    });

    setTimeout(() => {
      setAlert(null);
      dispatch(resetMessage());
      dispatch(resetError());
    }, 3000);
  };
  
  useEffect(() => {
    if (message) {
      showAlert(<IoCheckmarkCircle />, "Success", message);
    }
    if (error) {
      showAlert(<IoCloseCircleSharp />, "Error", error);
    }
    dispatch(getContact());
  }, [dispatch, message, error]);

  const statusHandler = (id, status) => {
    dispatch(statusContact(id, status));
  };

  const delContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Alert alert={alert} />

      <ContactComponent>
        <h1>User Contact</h1>

        <div className="contact">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {contact &&
                contact.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.message}</td>
                      <td>
                        <Link
                          to="#"
                          className={`statusBtn ${
                            item.status === "Unread" ? "danger" : "primary"
                          }`}
                          onClick={() => statusHandler(item._id, item.status)}
                        >
                          {item.status}
                        </Link>

                        <Link
                          to="#"
                          className="statusBtn danger"
                          onClick={() => delContact(item._id)}
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </ContactComponent>
    </>
  );
};

const ContactList = () => {
  return <AdminSidebar component={Data()} />;
};

export default ContactList;
