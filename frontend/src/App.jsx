import { useState } from 'react';
import { ContactProvider, useContact } from './context/ContactContext';
import Header from './components/Header/index.jsx';

import ContactForm from './components/ContactForm/index.jsx';
import ContactsList from './components/ContactsList/index.jsx';
import Pagination from './components/Pagination/index.jsx';

const AppContent = () => {
  const [theme, setTheme] = useState('light');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

  const {
    filteredContacts,
    loading,
    error,
    currentPage,
    totalPages,
    totalContacts,
    fetchContactsFromAPI,
    createContactFromAPI,
    deleteContactFromAPI,
    deleteAllContactsFromAPI,
  } = useContact();

  // Toggle dark theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') document.body.classList.add('dark')
    else document.body.classList.remove('dark')
  };

  // Handler for form submission
  const handleFormSubmit = async (contactData) => {
    const result = await createContactFromAPI(contactData);
    if (result.success) {
      setShowForm(false);
      setFormData({});
    } else {
      alert(result.error);
    }
  };

  // Contact Deletion Handler
  const handleDelete = async (id) => {
    const result = await deleteContactFromAPI(id);

    if (!result.success) {
      alert(result.error);
    }
  };

  // Delete All Contacts Handler
  const handleDeleteAll = async () => {
    if (window.confirm('Are you sure you want to delete all contacts? This action cannot be undone.')) {
      const result = await deleteAllContactsFromAPI();

      if (!result.success) {
        alert(result.error);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col" data-theme={theme}>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        searchTerm=""
        setSearchTerm={() => { }}
      />

      <main className="flex-grow bg-gray-200 dark:bg-gray-600 py-6">
        <div className="container mx-auto">
          <div className="contacts-container">

            {showForm && (
              <ContactForm
                onSubmit={handleFormSubmit}
                onCancel={() => {
                  setShowForm(false);
                  setFormData({});
                }}
                initialData={formData}
                theme={theme}
              />
            )}

            <ContactsList
              contacts={filteredContacts}
              totalContacts={totalContacts}
              onDeleteAll={handleDeleteAll}
              onDelete={handleDelete}
              loading={loading}
              error={error}
              setShowForm={setShowForm}
              theme={theme}
            />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={fetchContactsFromAPI}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <ContactProvider>
      <AppContent />
    </ContactProvider>
  );
}

export default App;
