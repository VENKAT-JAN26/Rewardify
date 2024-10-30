// import { useLocation, useNavigate } from 'react-router-dom';
// import styles from './index.module.css';
// const StoreDataNav=()=>{
//     const navigate=useNavigate();
//     const location=useLocation();
//     const storeinfocircle=location.pathname === '/storeCreation' ? styles.circle_green:styles.circle;
//     const storedoccircle=location.pathname === '/storeCreation/storedocs'? styles.circle_green:styles.circle;
//     const storeagreecircle=location.pathname === '/storeCreation/storeAgeement'? styles.circle_green:styles.circle;

//     return(
//         <div className={styles.store_create_form_navigator}>
//             <div >
//                     <div className={storeinfocircle}/>
//                     <hr className={styles.dotted_line}/>
//             </div>
//             <div onClick={(e)=>navigate('/storeCreation')}>
//                     <h6>Step 1</h6>
//                     <h4>Store Information</h4>
//                     <p>Owner name , Store location, Store address</p>
//                     <hr className={styles.solid_line} />
//             </div>
//             <div>
//                     <div className={storedoccircle}/>
//                     <hr className={styles.dotted_line}/>
//             </div>
//             <div onClick={(e)=>navigate('/storeCreation/storedocs')}>
//                     <h6>Step 2</h6>
//                     <h4>Store Document</h4>
//                     <p>GSTIN Number , PAN Number, Bank details</p>
//                     <hr className={styles.solid_line} />
//             </div> 
//             <div>
//                     <div className={storeagreecircle}/>
//                     <hr className={styles.dotted_line}/>
//             </div>
//             <div onClick={(e)=>navigate('/storeCreation/storeAgeement')}>
//                     <h6>Step 3</h6>
//                     <h4>Agreement</h4>
//                     <p>REWARDIFY partner Agreement</p>
//                     <hr className={styles.solid_line}/>
//             </div>  
//         </div>
//     )
// }
// export default StoreDataNav;

// import { useLocation, useNavigate } from 'react-router-dom';
// import styles from './index.module.css';

// const StoreDataNav = () => {
//     const navigate = useNavigate();
//     const location = useLocation();

//     // Define the path for each step
//     const steps = [
//         { path: '/storeCreation', label: 'Store Information', description: 'Owner name, Store location, Store address' },
//         { path: '/storeCreation/storedocs', label: 'Store Document', description: 'GSTIN Number, PAN Number, Bank details' },
//         { path: '/storeCreation/storeAgeement', label: 'Agreement', description: 'REWARDIFY partner Agreement' },
//     ];

//     // Determine the current step index
//     const currentIndex = steps.findIndex(step => step.path === location.pathname);

//     return (
//         <div className={styles.store_create_form_navigator}>
//             {steps.map((step, index) => {
//                 const isCurrentOrPast = index <= currentIndex; // Check if the step is current or past
//                 const circleClass = isCurrentOrPast ? styles.circle_green : styles.circle; // Set circle color based on current/past step

//                 return (
//                     <div key={step.path}>
//                         <div className={circleClass} />
//                         {index < steps.length - 1 && <hr className={styles.dotted_line} />} {/* Only show dotted line between steps */}
//                         <div onClick={() => navigate(step.path)}>
//                             <h6>Step {index + 1}</h6>
//                             <h4>{step.label}</h4>
//                             <p>{step.description}</p>
//                             <hr className={styles.solid_line} />
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default StoreDataNav;

// import { useLocation, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import styles from './index.module.css';

// const StoreDataNav = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activePath, setActivePath] = useState(location.pathname);

//   // Update the active path when the location changes
//   useEffect(() => {
//     console.log("Current Path:", location.pathname); // Debugging log
//     setActivePath(location.pathname);
//   }, [location]);

//   // Conditionally apply styles based on the current path
//   const storeinfocircle = activePath === '/storeCreation' ? styles.circle_green : styles.circle;
//   const storedoccircle = activePath === '/storeCreation/storedocs' ? styles.circle_green : styles.circle;
//   const storeagreecircle = activePath === '/storeCreation/storeAgreement' ? styles.circle_green : styles.circle;

//   return (
//     <div className={styles.store_create_form_navigator}>
//       {/* Step 1 */}
//       <div>
//         <div className={storeinfocircle} />
//         <hr className={styles.dotted_line} />
//       </div>
//       <div onClick={() => navigate('/storeCreation')}>
//         <h6>Step 1</h6>
//         <h4>Store Information</h4>
//         <p>Owner name, Store location, Store address</p>
//         <hr className={styles.solid_line} />
//       </div>

//       {/* Step 2 */}
//       <div>
//         <div className={storedoccircle} />
//         <hr className={styles.dotted_line} />
//       </div>
//       <div onClick={() => navigate('/storeCreation/storedocs')}>
//         <h6>Step 2</h6>
//         <h4>Store Document</h4>
//         <p>GSTIN Number, PAN Number, Bank details</p>
//         <hr className={styles.solid_line} />
//       </div>

//       {/* Step 3 */}
//       <div>
//         <div className={storeagreecircle} />
//         <hr className={styles.dotted_line} />
//       </div>
//       <div onClick={() => navigate('/storeCreation/storeAgreement')}>
//         <h6>Step 3</h6>
//         <h4>Agreement</h4>
//         <p>REWARDIFY Partner Agreement</p>
//         <hr className={styles.solid_line} />
//       </div>
//     </div>
//   );
// };

// export default StoreDataNav;

// import { useLocation, useNavigate } from 'react-router-dom';
// import styles from './index.module.css';

// const StoreDataNav = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Update circle styles based on the current page and progression
//   const storeinfocircle =
//     location.pathname === '/storeCreation' ||
//     location.pathname === '/storeCreation/storedocs' ||
//     location.pathname === '/storeCreation/storeAgreement'
//       ? styles.circle_green
//       : styles.circle;

//   const storedoccircle =
//     location.pathname === '/storeCreation/storedocs' ||
//     location.pathname === '/storeCreation/storeAgreement'
//       ? styles.circle_green
//       : styles.circle;

//   const storeagreecircle =
//     location.pathname === '/storeCreation/storeAgreement'
//       ? styles.circle_green
//       : styles.circle;

//   return (
//     <div className={styles.store_create_form_navigator}>
//       {/* Step 1 */}
//       <div>
//         <div className={storeinfocircle} />
//         <hr className={styles.dotted_line} />
//       </div>
//       <div onClick={() => navigate('/storeCreation')}>
//         <h6>Step 1</h6>
//         <h4>Store Information</h4>
//         <p>Owner name, Store location, Store address</p>
//         <hr className={styles.solid_line} />
//       </div>

//       {/* Step 2 */}
//       <div>
//         <div className={storedoccircle} />
//         <hr className={styles.dotted_line} />
//       </div>
//       <div onClick={() => navigate('/storeCreation/storedocs')}>
//         <h6>Step 2</h6>
//         <h4>Store Document</h4>
//         <p>GSTIN Number, PAN Number, Bank details</p>
//         <hr className={styles.solid_line} />
//       </div>

//       {/* Step 3 */}
//       <div>
//         <div className={storeagreecircle} />
//         <hr className={styles.dotted_line} />
//       </div>
//       <div onClick={() => navigate('/storeCreation/storeAgreement')}>
//         <h6>Step 3</h6>
//         <h4>Agreement</h4>
//         <p>REWARDIFY Partner Agreement</p>
//         <hr className={styles.solid_line} />
//       </div>
//     </div>
//   );
// };

// export default StoreDataNav;

import { useLocation, useNavigate } from 'react-router-dom';
import styles from './index.module.css';

const StoreDataNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Conditionally apply green color to circles based on the current path
  const storeinfocircle =
    location.pathname === '/storeCreation' ||
    location.pathname === '/storeCreation/storedocs' ||
    location.pathname === '/storeCreation/storeAgreement'
      ? styles.circle_green
      : styles.circle;

  const storedoccircle =
    location.pathname === '/storeCreation/storedocs' ||
    location.pathname === '/storeCreation/storeAgreement'
      ? styles.circle_green
      : styles.circle;

  const storeagreecircle =
    location.pathname === '/storeCreation/storeAgreement'
      ? styles.circle_green
      : styles.circle;

  return (
    <div className={styles.store_create_form_navigator}>
      {/* Step 1 */}
      <div>
        <div className={storeinfocircle} />
        <hr className={styles.dotted_line} />
      </div>
      <div onClick={() => navigate('/storeCreation')}>
        <h6>Step 1</h6>
        <h4>Store Information</h4>
        <p>Owner name, Store location, Store address</p>
        <hr className={styles.solid_line} />
      </div>

      {/* Step 2 */}
      <div>
        <div className={storedoccircle} />
        <hr className={styles.dotted_line} />
      </div>
      <div onClick={() => navigate('/storeCreation/storedocs')}>
        <h6>Step 2</h6>
        <h4>Store Document</h4>
        <p>GSTIN Number, PAN Number, Bank details</p>
        <hr className={styles.solid_line} />
      </div>

      {/* Step 3 */}
      <div>
        <div className={storeagreecircle} />
        <hr className={styles.dotted_line} />
      </div>
      <div onClick={() => navigate('/storeCreation/storeAgreement')}>
        <h6>Step 3</h6>
        <h4>Agreement</h4>
        <p>REWARDIFY Partner Agreement</p>
        <hr className={styles.solid_line} />
      </div>
    </div>
  );
};

export default StoreDataNav;


