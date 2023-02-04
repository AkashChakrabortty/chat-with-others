import React, { useContext } from 'react';
import { userInfo } from '../../context/AuthProvider';

const Device = () => {
   const { logout } = useContext(userInfo);

    const handleLogout = () => {
      logout();
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
              <tr>
                <td>Chrome</td>
                <td>Windows 10</td>
                <td>4/12/12</td>
              </tr>

              <tr>
                <td>Chrome</td>
                <td>Windows 10</td>
                <td>4/12/12</td>
              </tr>

              <tr>
                <td>Chrome</td>
                <td>Windows 10</td>
                <td>4/12/12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Device;