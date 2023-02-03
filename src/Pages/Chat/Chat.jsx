import React from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {
    return (
      <div className="flex h-screen items-center">
        <div className="w-1/2 mx-auto border h-fit p-3">
          <div className="message border p-3">
            <p>Akash Chakrabortty</p>
            <p>Who are You?</p>
          </div>
          <div className="message border my-2 p-3">
            <p>Md Rakib Khane</p>
            <p>Your team mate.</p>
          </div>
          <div className="sent text-right">
            <div className="input">
              <input type="text" name="text" className="border" />
            </div>
            <div className="btn my-2 flex justify-end gap-2">
              <button type="submit" className="border p-2 rounded">
                Submit
              </button>
              <button type="submit" className="border p-2 rounded">
                Refresh
              </button>
            </div>
          </div>
          <br />
          <div className="text-end">
            <Link className="border p-2 rounded" to="/device">
              Device
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Chat;