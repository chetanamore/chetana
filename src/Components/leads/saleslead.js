
// import React, { useState } from 'react';
// import '../leads/leads.css'

// const Saleslead = () => {
//   const [activePage, setActivePage] = useState(1);
//   const [activeTab, setActiveTab] = useState('New Lead');

//   const leads = [
//     { propertyName: 'Green Villa P.', referralName: 'Pratik Dhere', location: 'Kharadi, Pune', phoneNumber: '9130316771', status: 'Open' },
//     { propertyName: 'Sunshine Apartment', referralName: 'Riya Patel', location: 'Viman Nagar, Pune', phoneNumber: '9123456789', status: 'Open' },
//     { propertyName: 'Blue Moon Estate', referralName: 'Amit Shah', location: 'Baner, Pune', phoneNumber: '9876543210', status: 'Open' },
//     { propertyName: 'Rose Villa', referralName: 'Nina Mehta', location: 'Wakad, Pune', phoneNumber: '9988776655', status: 'Open' },
//   ];

//   const handlePageClick = (pageNumber) => {
//     setActivePage(pageNumber);
//     // Add logic here to display the corresponding leads based on the active page
//   };
//     const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//   };

//   return (
//     <div className="leads-container">
//       <h2 className='leads_head'>Your Leads:</h2>
//       <div className="tabs">
//       <button
//           className={`tab ${activeTab === 'New Lead' ? 'active' : ''}`}
//           onClick={() => handleTabClick('New Lead')}
//         >
//           New Lead (30)
//         </button>
//         <button
//           className={`tab ${activeTab === 'Follow Up' ? 'active' : ''}`}
//           onClick={() => handleTabClick('Follow Up')}
//         >
//           Follow Up
          
//         </button>
//         <button
//           className={`tab ${activeTab === 'Closed' ? 'active' : ''}`}
//           onClick={() => handleTabClick('Closed')}
//         >
//           Closed
//         </button>
//       </div>
//       <table className="leads-table">
//         <thead className='propert_Name'>
//           <tr>
//             <th>Property Name</th>
//             <th>Referral Name</th>
//             <th>Location / Area</th>
//             <th>Phone Number</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leads.map((lead, index) => (
//             <tr key={index}>
//               <td>{lead.propertyName}</td>
//               <td>{lead.referralName}</td>
//               <td><strong>{lead.location}</strong></td>
//               <td>{lead.phoneNumber}</td>
//               <td>
//                 <select className='open'>
//                   <option>{lead.status}</option>
//                   <option>Closed</option>
//                   <option>In Progress</option>
//                 </select>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="pagination">
//         <button className='privious_btn' onClick={() => handlePageClick(activePage - 1)} disabled={activePage === 1}>Previous</button>
//         {[1, 2, 3].map((pageNumber) => (
//           <button
//             key={pageNumber}
//             onClick={() => handlePageClick(pageNumber)}
//             className={activePage === pageNumber ? 'active' : ''}
//           >
//             {pageNumber}
//           </button>
//         ))}
//         <button className='next_btn' onClick={() => handlePageClick(activePage + 1)} disabled={activePage === 3}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Saleslead;



import React, { useState } from 'react';
import '../leads/leads.css';
import Modal from './Modal';

const Saleslead = () => {
  const [activePage, setActivePage] = useState(1);
  const [activeTab, setActiveTab] = useState('New Lead');
  const [showModal, setShowModal] = useState(false);

  const leads = [
    { propertyName: 'Green Villa P.', referralName: 'Pratik Dhere', location: 'Kharadi, Pune', phoneNumber: '9130316771', status: 'Open' },
    { propertyName: 'Sunshine Apartment', referralName: 'Riya Patel', location: 'Viman Nagar, Pune', phoneNumber: '9123456789', status: 'Open' },
    { propertyName: 'Blue Moon Estate', referralName: 'Amit Shah', location: 'Baner, Pune', phoneNumber: '9876543210', status: 'Open' },
    { propertyName: 'Rose Villa', referralName: 'Nina Mehta', location: 'Wakad, Pune', phoneNumber: '9988776655', status: 'Open' },
  ];

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
    // Add logic here to display the corresponding leads based on the active page
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName === 'Follow Up') {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="leads-container">
      <h2 className='leads_head'>Your Leads</h2>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'New Lead' ? 'active' : ''}`}
          onClick={() => handleTabClick('New Lead')}
        >
          New Lead (30)  
        </button>
        <button
          className={`tab ${activeTab === 'Follow Up' ? 'active' : ''}`}
          onClick={() => handleTabClick('Follow Up')}
        >
          Follow Up
        </button>
        <button
          className={`tab ${activeTab === 'Closed' ? 'active' : ''}`}
          onClick={() => handleTabClick('Closed')}
        >
          Closed
        </button>
      </div>
      <table className="leads-table">
        <thead className='propert_Name'>
          <tr>
            <th>Property Name</th>
            <th>Referral Name</th>
            <th>Location / Area</th>
            <th>Phone Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <tr key={index}>
              <td>{lead.propertyName}</td>
              <td>{lead.referralName}</td>
              <td><strong>{lead.location}</strong></td>
              <td>{lead.phoneNumber}</td>
              <td>
                <select className='open'>
                  <option>{lead.status}</option>
                  <option>Closed</option>
                  <option>In Progress</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button className='privious_btn' onClick={() => handlePageClick(activePage - 1)} disabled={activePage === 1}>Previous</button>
        {[1, 2, 3].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={activePage === pageNumber ? 'active' : ''}
          >
            {pageNumber}
          </button>
        ))}
        <button className='next_btn' onClick={() => handlePageClick(activePage + 1)} disabled={activePage === 3}>Next</button>
      </div>

      <Modal show={showModal} onClose={handleCloseModal}>
        <p className='para'>Input follow up of lead</p>
        <textarea className='text' rows="4" cols="50" defaultValue="Call Done, client visit at side in 2 days." />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <button className='cancel' onClick={handleCloseModal}>Cancel</button>
          <button className='done' onClick={handleCloseModal}>Done</button>
        </div>
      </Modal>
    </div>
  );
};

export default Saleslead;

