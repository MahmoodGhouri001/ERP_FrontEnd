import React from 'react';
import './Profile.css';
import {links, inputs} from '../pages/ProfileDetails';
import profile from '../media/profile.jpg';
import ProfileInputs from '../components/Profile_Inputs'
import { HiDocumentText, HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from 'react-router-dom';
export default function Profile() {
    return (
        <>
        <div className="Profile-container">       
            <div className="client-area">
            <div className="client-heading">
                <div className="title">
                <Link to="/">
                   <i className="left-arrow"><HiOutlineArrowLeft/></i></Link><label className="label-top">Client Profile</label> 
                </div>
                </div>
                <div className="img-card">
                    <div className="img">
                        <img src={profile} alt="" />
                    </div>
                    <h2>Mohammed Arshad</h2>
                </div>
                <div className="employee-container">
                    <div className="title">
                        <h3>Employee details</h3>
                    </div>
                    <div className="employee-details">

                        <div className="employee-key">
                       
                            <label>Job Title :</label>
                            <label>Deparment :</label>
                            <label>Business Unit :</label>
                            <label>Reporting To :</label>
                            <label>Employee No :</label>
                        </div>
                        <div className="employee-value">
                            <label>React Developer</label>
                            <label>Full Stack Developer</label>
                            <label>Meta Inc</label>
                            <label>Mahmood Ghouri</label>
                            <label>235879</label>
                        </div>
                    </div>

                </div>
                <div className="personal-container">
                    <div className="title">
                        <h3>Personal details</h3>
                    </div>
                    <div className="personal-details">
                        <div className="personal-key">
                            <label>Email :</label>
                            <label>Phone Number :</label>
                            <label>Date of Birth :</label>
                            <label>Home address :</label>
                            <label>Marital status :</label>
                        </div>
                        <div className="personal-value">
                            <label>mohdarshad102me@gmail.com</label>
                            <label>+91 9182631746</label>
                            <label>02/06/1995</label>
                            <label>Hyderabad, Telangana</label>
                            <label>Un-Married</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-area">
                <div className="profile-menu">
                    <div className="menu-items">
                        {links.map((links, index) =>
                            <Link key={index} path={links.path} className="current">
                                <li>{links.name}</li>
                            </Link>
                        )}
                    </div>
                </div>
                <div className="latest-task">
                    <div className="task-heading">
                        <div><h2>Latest Task</h2></div>
                        <div>Show all</div>
                    </div>
                    <div className="task-content">
                        {inputs.map((inputs, index) =>
                            <ProfileInputs
                                key={index}
                                type={inputs.type}
                                value={inputs.value}
                                name={inputs.name}
                                date={inputs.date}
                            />
                        )}

                    </div>
                </div>
                <div className="documents-and-notes">
                    <div className="document-heading">
                        <div><h2>Documents</h2></div>
                        <div>Show all</div>
                    </div>
                    <div className="document-area">
                        <div className="document-card">
                            <div className="document-details">
                                <div className="document-icon">
                                    <i className="icon-doc"><HiDocumentText /></i>
                                </div>
                                <div className="document-content">
                                    <h4>Client Intake Form</h4>
                                    <p>Submitted on 19 Nov, 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className="document-card">
                            <div className="document-details">
                                <div className="document-icon">
                                    <i className="icon-doc"><HiDocumentText /></i>
                                </div>
                                <div className="document-content">
                                    <h4>Education Documents</h4>
                                    <p>Submitted on 19 Nov, 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className="document-card">
                            <div className="document-details">
                                <div className="document-icon">
                                    <i className="icon-doc"><HiDocumentText /></i>
                                </div>
                                <div className="document-content">
                                    <h4>Company Policy Certificate</h4>
                                    <p>Submitted on 19 Nov, 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className="document-card">
                            <div className="document-details">
                                <div className="document-icon">
                                    <i className="icon-doc"><HiDocumentText /></i>
                                </div>
                                <div className="document-content">
                                    <h4>Client Intake Form</h4>
                                    <p>Submitted on 19 Nov, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="notes-container">
                        <div className="notes-heading">
                            <div><h2>Notes</h2></div>
                            <div>Show all</div>
                        </div>
                        <div className="notes-area">
                            <div className="note-card">
                                <div className="note-details">
                                    <div className="title">
                                        <h3>What is Lorem Ipsum?</h3>
                                    </div>
                                    <div className="content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    </div>
                                </div>
                            </div>    
                            <div className="note-card">
                                <div className="note-details">
                                    <div className="title">
                                        <h3>What is Lorem Ipsum?</h3>
                                    </div>
                                    <div className="content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    </div>
                                </div>
                            </div>   
                            <div className="note-card">
                                <div className="note-details">
                                    <div className="title">
                                        <h3>What is Lorem Ipsum?</h3>
                                    </div>
                                    <div className="content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    </div>
                                </div>
                            </div>                                                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
