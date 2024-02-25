import React, { useContext, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/auth/authContext";
import ContactContext from "../../../context/contact/contactContext";
import Search from "../../common/Search";
import Layout from "../../ui/Layout";
import Contacts from "./Contacts";
import ContactForm from "./Form";

const HomeDefault = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { getAllContacts } = useContext(ContactContext);

  const { loadUser, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      loadUser();
      getAllContacts();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <Layout>
      <Row>
        <Col>
          <ContactForm />
        </Col>
        <Col>
          <Search />
          <Contacts />
        </Col>
      </Row>
    </Layout>
  );
};

export default HomeDefault;
