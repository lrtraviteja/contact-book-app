const ContactItem = ({ contact, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${contact.name}?`)) {
      onDelete(contact.id);
    }
  };

  return (
    <div className="contact-item">
      <div className="contact-info">
        <div className="contact-avatar">
          <span className="contact-initial">
            {contact.name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <h3 className="contact-name">
            {contact.name}
          </h3>
          <p className="contact-email">
            {contact.email}
          </p>
          <p className="contact-phone">
            {contact.phone}
          </p>
        </div>
      </div>
      <button
        onClick={handleDelete}
        className="delete-btn"
        title="Delete contact"
      >
        <span className="delete-icon">🗑️</span>
      </button>
    </div>
  );
};

export default ContactItem;
