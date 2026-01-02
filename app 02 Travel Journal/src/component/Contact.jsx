import "./Contact.css";

function Contact({ img, name, mail, phone }) {
  // console.log(props);

  return (
    <>
      <div className="card contact-card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="Card" />

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">📧 - {mail}</p>
          <p className="card-text">📞 - {phone}</p>
          <a href="#" className="btn btn-primary">
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
