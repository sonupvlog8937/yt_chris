import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 border-t-[1px] border-gray-300 border-b-[1px]">
        <div className="container">
          <div className="flex item-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season styles, limited time
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex  items-center gap-3">
                <li className="list-none">
                    <Link to="/help-center" className="text-[13px] link font-[500] transition">Help Center</Link>
                    
                </li>
                <li>
                    <Link to="/order-tracking" className="text-[13px] link font-[500] transition">Order Tracking</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container flex items-center justify-between">
            <div className="col1">
                <Link className="" to={"/"}><img src="https://zeadaddy.vercel.app/images/logo.png" /></Link>
            </div>
            <div className="col2"></div>
            <div className="col3"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
