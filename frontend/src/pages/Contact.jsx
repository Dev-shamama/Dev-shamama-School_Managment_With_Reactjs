import { ContactContainer } from "./StyleComponent/Auth.styled";
import {
  Form,
  Input,
  InputGroup,
  InputIcon,
  TextArea,
} from "../components/Styles/style-input-component/Input.styled";
import {
  IoCheckmarkCircle,
  IoCloseCircleSharp,
  IoMailOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { Button } from "../components/Styles/style-button-component/Button";
import Footer from "../components/Layout/Footer";
import contactImage from "../assets/img/c.svg";
import { useState } from "react";
import Alert from "../components/Alert/Alert";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (icon, type, message) => {
    setAlert({
      icon: icon,
      title: type,
      text: message,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const ContactSubmitHandle = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/viewer/contact`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      }
    );
    const result = await response.json();
    setLoading(false);
    if (result.success === true) {
      showAlert(<IoCheckmarkCircle />, "Success", result.message);
    } else {
      showAlert(<IoCloseCircleSharp />, "Error", result.message);
    }
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <Alert alert={alert} />

      <ContactContainer>
        <div className="contactBox">
          <div className="imgBox">
            <img src={contactImage} alt="" />
          </div>
          <div className="contactBoxLayer">
            <Form onSubmit={ContactSubmitHandle}>
              <h1>Get In Touch</h1>
              <InputGroup>
                <InputIcon>
                  <IoPersonOutline />
                </InputIcon>
                <Input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Enter Your Name"
                />
              </InputGroup>

              <InputGroup>
                <InputIcon>
                  <IoMailOutline />
                </InputIcon>
                <Input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter Your Email"
                />
              </InputGroup>

              <InputGroup>
                <TextArea
                  rows={10}
                  placeholder="Enter a some message with reach in us"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></TextArea>
              </InputGroup>
              <Button type="submit" disabled={loading ? true : false}>
                {loading ? "loading..." : "Submit"}
              </Button>
            </Form>
          </div>
        </div>
      </ContactContainer>
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Contact;
