import React from 'react';

const Device = () => {
    return (
      <div className="flex h-screen items-center">
        <div className="w-10/12 mx-auto border h-fit p-3">
          <table class="table-auto w-full text-center">
            <thead className='border'>
              <tr>
                <th>Browser</th>
                <th>OS</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chrome</td>
                <td>Windows 10</td>
                <td>4/12/12</td>
                <td>
                  <button type="submit" className="border p-2 rounded">
                    Remove
                  </button>
                </td>
              </tr>
             
              <tr>
                <td>Chrome</td>
                <td>Windows 10</td>
                <td>4/12/12</td>
                <td>
                  <button type="submit" className="border p-2 rounded">
                    Remove
                  </button>
                </td>
              </tr>
             
              <tr>
                <td>Chrome</td>
                <td>Windows 10</td>
                <td>4/12/12</td>
                <td>
                  <button type="submit" className="border p-2 rounded">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Device;