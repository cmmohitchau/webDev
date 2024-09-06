import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="https://www.svgrepo.com/show/117153/wave.svg" alt="wave" />
      </div>
      <ul className="sidebar-list">
        <li>
          <a href="#">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-users" aria-hidden="true"></i>
            <span>Team</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-folder" aria-hidden="true"></i>
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            <span>Calendar</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-file" aria-hidden="true"></i>
            <span>Documents</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-pie-chart" aria-hidden="true"></i>
            <span>Reports</span>
          </a>
        </li>
        <li>
          <span className="sidebar-title">Your teams</span>
        </li>
        <li>
          <a href="#">
            <span className="sidebar-team-icon">H</span>
            <span>Heroicons</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="sidebar-team-icon">T</span>
            <span>Tailwind Labs</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="sidebar-team-icon">W</span>
            <span>Workcation</span>
          </a>
        </li>
      </ul>
      <div className="sidebar-footer">
        <a href="#">
          <i className="fa fa-cog" aria-hidden="true"></i>
          <span>Settings</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
