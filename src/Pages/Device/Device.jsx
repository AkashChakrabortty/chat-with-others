import React, { useContext, useEffect, useState } from 'react';
import { userInfo } from '../../context/AuthProvider';

const Device = () => {
   const { logout ,user} = useContext(userInfo);
    const [devicesInfo, setDevicesInfo] = useState([]);
useEffect(() => {
  fetch(`http://localhost:5000/getDeviceInfo/${user.email}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setDevicesInfo(data);
    });
}, [user]);
    const handleLogout = () => {
      //delete customer device info
      fetch(`http://localhost:5000/deleteDeviceInfo/${user.email}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
            logout();
        });
    
    };
    
    return (
      <div className="flex h-screen items-center">
        <div className="w-10/12 mx-auto border h-fit p-3">
          <button
            type="submit"
            className="border p-2 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
          <table className="table-auto w-full text-center">
            <thead className="border">
              <tr>
                <th>Browser</th>
                <th>OS</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
            {devicesInfo.map(deviceInfo => {return (
              <tr key={deviceInfo._id}>
                <td>{deviceInfo.browser}</td>
                <td>{deviceInfo.os}</td>
                <td>{deviceInfo.date}</td>
              </tr>
            );})}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Device;