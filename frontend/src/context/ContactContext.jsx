import { createContext, useContext, useState, useEffect } from 'react';
import {fetchContacts, createContact, deleteContact, deleteAllContacts} from '../api/contactService';

const ContactContext = createContext(null);

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalContacts, setTotalContacts] = useState(0);

  // Fetch contacts from API
  const fetchContactsFromAPI = async (page = 1, limit = 10) => {
    try {
      setLoading(true);
      const response = await fetchContacts(page, limit);
      setContacts(response.data.contacts);
      setCurrentPage(response.data.pagination.currentPage);
      setTotalPages(response.data.pagination.totalPages);
      setTotalContacts(response.data.pagination.totalContacts);
      setError(null);
    } catch (err) {
      setError('Failed to fetch contacts');
      console.error('Error fetching contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  // Create new contact
  const createContactFromAPI = async (contactData) => {
    try {
      const response = await createContact(contactData);
      setContacts(prev => [response.data, ...prev]);
      setTotalContacts(prev => prev + 1);
      return { success: true, data: response.data };
    } catch (err) {
      if (err.response && err.response.status === 409) {
        return { success: false, error: 'Contact with this email or phone already exists' };
      }
      return { success: false, error: 'Failed to create contact' };
    }
  };

  // Delete contact
  const deleteContactFromAPI = async (id) => {
    try {
      await deleteContact(id);
      setContacts(prev => prev.filter(contact => contact.id !== id));
      setTotalContacts(prev => prev - 1);
      return { success: true };
    } catch (err) {
      return { success: false, error: 'Failed to delete contact' };
    }
  };

  // Delete all contacts
  const deleteAllContactsFromAPI = async () => {
    try {
      await deleteAllContacts();
      setContacts([]);
      setTotalContacts(0);
      setCurrentPage(1);
      setTotalPages(1);
      return { success: true };
    } catch (err) {
      return { success: false, error: 'Failed to delete all contacts' };
    }
  };

  // Filter contacts based on search term
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  );

  // Load contacts on mount
  useEffect(() => {
    fetchContactsFromAPI();
  }, []);

  const value = {
    contacts,
    filteredContacts,
    loading,
    error,
    currentPage,
    totalPages,
    totalContacts,
    searchTerm,
    setSearchTerm,
    fetchContactsFromAPI,
    createContactFromAPI,
    deleteContactFromAPI,
    deleteAllContactsFromAPI,
  };

  return (
    <ContactContext.Provider value={value}>
      {children}
    </ContactContext.Provider>
  );
};
