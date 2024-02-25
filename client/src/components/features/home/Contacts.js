import React, { useContext } from "react";
import ContactContext from "../../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filteredContacts } = contactContext;

  return (
    <>
      {filteredContacts && filteredContacts.length > 0 ? (
        filteredContacts.map((data) => (
          <ContactItem
            key={data.id}
            id={data.id}
            name={data.name}
            email={data.email}
            phone={data.phone}
            relation={data.relation}
          />
        ))
      ) : contacts && contacts?.length ? (
        contacts?.map((data) => (
          <ContactItem
            key={data._id}
            id={data._id}
            name={data.name}
            email={data.email}
            phone={data.phone}
            relation={data.relation}
          />
        ))
      ) : (
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            fontSize: "14px",
            marginTop: "20px",
          }}
        >
          No contacts found...
        </h4>
      )}
    </>
  );
};

export default Contacts;
