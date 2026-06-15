import { useEffect, useState } from 'react';

const Fullname = () => {
    const [fName] = useState('Hamid');
    const [lName] = useState('Sheikh');

    // const [fullName, setFullName] = useState('');
    // useEffect(() => {
    //     setFullName(fName + ' ' + lName);
    // }, [fName, lName]);
    const fullName = fName + ' ' + lName;

    return (
        <div>
            <h3>{fullName}</h3>
        </div>
    );
};

export default Fullname;
