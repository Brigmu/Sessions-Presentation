import React, { useState } from 'react';
import './styles.css';
import Navitem from '../../components/Navitem';
import { useHistory } from 'react-router-dom';

const ExplorePage = (props) => {
    const [telemetryClicked, setTelemetryClicked] = useState(false);
    const [selected, setSelected] = useState('Select search criteria')

    const handleNavClick = (e) => {
        const clicked = e.target.textContent;
        setSelected(clicked);
        setTelemetryClicked(false);
    }

    const history = useHistory();
    const handlePageReturn = () => {
        history.push('/');
    }

    const handleTelemetryClick = (e) => {
        setTelemetryClicked(true);
    }
    return (
        <div className='find-page'>
            <div className='container-white'>
                <div className='left-nav-wrapper'>
                    <div className='nav-btn'>
                        <button className='btn return-btn' onClick={handlePageReturn}>Find Another Session</button>
                    </div>
                    <Navitem handleNavClick={handleNavClick} selected={selected} text='Session Metadata' />
                    <Navitem handleNavClick={handleNavClick} selected={selected} text='Feature Gates' />
                    <Navitem handleNavClick={handleNavClick} selected={selected} text='Telemetry' />
                    <Navitem handleNavClick={handleNavClick} selected={selected} text='Diagnostic Logs' />
                    <Navitem handleNavClick={handleNavClick} selected={selected} text='Crash Data' />
                    <Navitem handleNavClick={handleNavClick} selected={selected} text='Error Tags' />
                </div>
                <div className='content-wrapper'>
                    <h1>{selected}</h1>
                    <hr></hr>
                    {selected === 'Session Metadata' ? 
                    <div className='metadata-wrapper'> 
                        <div className='metadata-labels'>
                            <h4>App:</h4>
                            <h4>Alias:</h4>
                            <h4>Audience:</h4>
                            <h4>Channel:</h4>
                            <h4>Country:</h4>
                            <h4>Duration:</h4>
                            <h4>Fork:</h4>
                            <h4>Platform:</h4>
                            <h4>Version:</h4>
                        </div>
                        <div className='metadata-info'>
                            <p>Excel</p>
                            <p>bananaman</p>
                            <p>Microsoft</p>
                            <p>CC</p>
                            <p>US</p>
                            <p>unknown</p>
                            <p>2008-Mar</p>
                            <p>Win32</p>
                            <p>16.0.3.1.22241</p>
                        </div>
                    </div> 
                    : selected === 'Feature Gates' ? 
                    <div className = 'featuregates-wrapper'>
                        <div className='content-col-1'>
                            <div className='title-col-1'>Feature Name</div>
                            <p>Microsoft.Office.Diagnostics.CrashRelief.Enabled</p>
                            <p>Microsoft.Office.Diagnostics.CrashRelief.Enabled</p>
                            <p>Microsoft.Office.Diagnostics.CrashRelief.Enabled</p>
                            <p>Microsoft.Office.Diagnostics.CrashRelief.Enabled</p>
                            <p>Microsoft.Office.Diagnostics.CrashRelief.Enabled</p>
                            <p>Microsoft.Office.Diagnostics.CrashRelief.Enabled</p>
                            <p>Microsoft.Office.Diagnostics.CrashRelief.Enabled</p>
                            <p>Microsoft.Office.Diagnostics.CrashRelief.Enabled</p>
                            <p>Microsoft.Office.Diagnostics.CrashRelief.Enabled</p>
                        </div>
                        <div className='content-col-2'>
                            <div className='title-col-2'>Feature Status</div>
                            <p>false</p>
                            <p>false</p>
                            <p>false</p>
                            <p>false</p>
                            <p>false</p>
                            <p>false</p>
                            <p>false</p>
                            <p>false</p>
                            <p>false</p>
                        </div>
                    </div>
                    : selected === 'Telemetry' ?
                    <div className='telemetry-wrapper'>
                        <div className='telemetry-left-col'>
                            <div className='telemetry-item' onClick={handleTelemetryClick}>
                                <p>23:01:21</p>
                                <p>CollabML.SharingSuggestionRequest</p>
                            </div>
                            <div className='telemetry-item' onClick={handleTelemetryClick}>
                                <p>23:01:21</p>
                                <p>CollabML.SharingSuggestionRequest</p>
                            </div>
                            <div className='telemetry-item' onClick={handleTelemetryClick}>
                                <p>23:01:21</p>
                                <p>CollabML.SharingSuggestionRequest</p>
                            </div>
                            <div className='telemetry-item' onClick={handleTelemetryClick}>
                                <p>23:01:21</p>
                                <p>CollabML.SharingSuggestionRequest</p>
                            </div>
                        </div>
                        {telemetryClicked ? 
                        <div className='telemetry-right-col'>
                            <div className='telemetry-item-right'>
                                <p className='telemetry-title'>Event_Name</p>
                                <p>Office.Excel.Command.Userdata</p>
                            </div>
                            <div className='telemetry-item-right'>
                                <p className='telemetry-title'>Event_ReceivedTime</p>
                                <p>7/12/2020 4:51:21 PM</p>
                            </div>
                            <div className='telemetry-item-right'>
                                <p className='telemetry-title'>Event_Time</p>
                                <p>7/12/2020 4:48:33 PM</p>
                            </div>
                            <div className='telemetry-item-right'>
                                <p className='telemetry-title'>Session_Id</p>
                                <p>b8549970-693f-4a0a-ae60-53b9ed64422a</p>
                            </div>
                            <div className='telemetry-item-right'>
                                <p className='telemetry-title'>Event_Sequence</p>
                                <p>1604</p>
                            </div>
                            <div className='telemetry-item-right'>
                                <p className='telemetry-title'>App_Branch</p>
                                <p>Fork</p>
                            </div>
                            <div className='telemetry-item-right'>
                                <p className='telemetry-title'>App_InstallType</p>
                                <p>3</p>
                            </div>
                            <div className='telemetry-item-right'>
                                <p className='telemetry-title'>App_Name</p>
                                <p>Excel</p>
                            </div>
                            <div className='telemetry-item-right'>
                                <p className='telemetry-title'>App_Platform</p>
                                <p>Win32</p>
                            </div>
                            <div className='telemetry-item-right'>
                                <p className='telemetry-title'>App_Version</p>
                                <p>16.0.3.1.22241</p>
                            </div>
                            <div className='telemetry-item-right'>
                                <p className='telemetry-title'>Client_Id</p>
                                <p>e842ccef-0cd4-4172-8483-43070966ae3a</p>
                            </div>
                            <div className='telemetry-item-right'>
                                <p className='telemetry-title'>Consent_ControllerTime</p>
                                <p>1/1/2020 1:22:30 PM</p>
                            </div>
                            <div className='telemetry-item-right'>
                                <p className='telemetry-title'>Consent_ControllerSource</p>
                                <p>4</p>
                            </div>
                        </div> 
                        : <> </>}
                    </div>
                    : selected === 'Diagnostic Logs' ? 
                    <div className='logs-container'>
                        <div className='logs-wrapper'>
                            <div className='logs-titles'>
                                <h4 className='logs-col-1'>Time</h4>
                                <h4 className='logs-col-2'>Process</h4>
                                <h4 className='logs-col-3'>Thread</h4>
                                <h4 className='logs-col-4'>Product</h4>
                                <h4 className='logs-col-5'>Category</h4>
                                <h4 className='logs-col-6'>EventID</h4>
                                <h4 className='logs-col-7'>Level</h4>
                                <h4 className='logs-col-8'>Message</h4>
                            </div>
                            <div className='logs-info'>
                                <p className='logs-col-1'>07/08/2020 21:21:30</p>
                                <p className='logs-col-2'>Excel (0x5999)</p>
                                <p className='logs-col-3'>1x51999</p>
                                <p className='logs-col-4'>Microsoft Excel</p>
                                <p className='logs-col-5'>Telemetry</p>
                                <p className='logs-col-6'>8573897b-14b0-4c79-938d-661bffbd3ee2</p>
                                <p className='logs-col-7'>Medium</p>
                                <p className='logs-col-8'>SendEvent 'EventName'.'Office'.Desktop.Userinfo.Floodgatecheck</p>
                            </div>
                            <div className='logs-info'>
                                <p className='logs-col-1'>07/08/2020 21:21:30</p>
                                <p className='logs-col-2'>Excel (0x5999)</p>
                                <p className='logs-col-3'>1x51999</p>
                                <p className='logs-col-4'>Microsoft Excel</p>
                                <p className='logs-col-5'>Telemetry</p>
                                <p className='logs-col-6'>8573897b-14b0-4c79-938d-661bffbd3ee2</p>
                                <p className='logs-col-7'>Medium</p>
                                <p className='logs-col-8'>SendEvent 'EventName'.'Office'.Desktop.Userinfo.Floodgatecheck</p>
                            </div>
                            <div className='logs-info'>
                                <p className='logs-col-1'>07/08/2020 21:21:30</p>
                                <p className='logs-col-2'>Excel (0x5999)</p>
                                <p className='logs-col-3'>1x51999</p>
                                <p className='logs-col-4'>Microsoft Excel</p>
                                <p className='logs-col-5'>Telemetry</p>
                                <p className='logs-col-6'>8573897b-14b0-4c79-938d-661bffbd3ee2</p>
                                <p className='logs-col-7'>Medium</p>
                                <p className='logs-col-8'>SendEvent 'EventName'.'Office'.Desktop.Userinfo.Floodgatecheck</p>
                            </div>
                            <div className='logs-info'>
                                <p className='logs-col-1'>07/08/2020 21:21:30</p>
                                <p className='logs-col-2'>Excel (0x5999)</p>
                                <p className='logs-col-3'>1x51999</p>
                                <p className='logs-col-4'>Microsoft Excel</p>
                                <p className='logs-col-5'>Telemetry</p>
                                <p className='logs-col-6'>8573897b-14b0-4c79-938d-661bffbd3ee2</p>
                                <p className='logs-col-7'>Medium</p>
                                <p className='logs-col-8'>SendEvent 'EventName'.'Office'.Desktop.Userinfo.Floodgatecheck</p>
                            </div>
                            <div className='logs-info'>
                                <p className='logs-col-1'>07/08/2020 21:21:30</p>
                                <p className='logs-col-2'>Excel (0x5999)</p>
                                <p className='logs-col-3'>1x51999</p>
                                <p className='logs-col-4'>Microsoft Excel</p>
                                <p className='logs-col-5'>Telemetry</p>
                                <p className='logs-col-6'>8573897b-14b0-4c79-938d-661bffbd3ee2</p>
                                <p className='logs-col-7'>Medium</p>
                                <p className='logs-col-8'>SendEvent 'EventName'.'Office'.Desktop.Userinfo.Floodgatecheck</p>
                            </div>
                            <div className='logs-info'>
                                <p className='logs-col-1'>07/08/2020 21:21:30</p>
                                <p className='logs-col-2'>Excel (0x5999)</p>
                                <p className='logs-col-3'>1x51999</p>
                                <p className='logs-col-4'>Microsoft Excel</p>
                                <p className='logs-col-5'>Telemetry</p>
                                <p className='logs-col-6'>8573897b-14b0-4c79-938d-661bffbd3ee2</p>
                                <p className='logs-col-7'>Medium</p>
                                <p className='logs-col-8'>SendEvent 'EventName'.'Office'.Desktop.Userinfo.Floodgatecheck</p>
                            </div>
                            <div className='logs-info'>
                                <p className='logs-col-1'>07/08/2020 21:21:30</p>
                                <p className='logs-col-2'>Excel (0x5999)</p>
                                <p className='logs-col-3'>1x51999</p>
                                <p className='logs-col-4'>Microsoft Excel</p>
                                <p className='logs-col-5'>Telemetry</p>
                                <p className='logs-col-6'>8573897b-14b0-4c79-938d-661bffbd3ee2</p>
                                <p className='logs-col-7'>Medium</p>
                                <p className='logs-col-8'>SendEvent 'EventName'.'Office'.Desktop.Userinfo.Floodgatecheck</p>
                            </div>
                        </div>
                    </div> : selected === 'Crash Data' ? 
                    <div className='crash-wrapper'>
                        <div className='crash-titles'>
                            <h4 className='crash-col-1'>Failure Name</h4>
                            <h4 className='crash-col-2'>Hits</h4>
                        </div>
                        <div className='crash-item'>
                            <a href='#' className='crash-col-1'>application_fault_124124_mso20win32client.idd!mso::user::tracediagnostics</a>
                            <p className='crash-col-2'>121</p>
                        </div>
                    </div>
                    : selected === 'Error Tags' ? 
                    <div className='error-wrapper'>
                        <div className='error-titles'>
                            <h4 className='error-col-1'>Category</h4>
                            <h4 className='error-col-2'>Tag</h4>
                        </div>
                        <div className='error-item'>
                            <p className='error-col-1'>Diagnostics Liblet</p>
                            <p className='error-col-2'>coj5s</p>
                        </div>
                        <div className='error-item'>
                            <p className='error-col-1'>Diagnostics Liblet</p>
                            <p className='error-col-2'>coj4q</p>
                        </div>
                        <div className='error-item'>
                            <p className='error-col-1'>Diagnostics Liblet</p>
                            <p className='error-col-2'>coj3y</p>
                        </div>
                        <div className='error-item'>
                            <p className='error-col-1'>Diagnostics Liblet</p>
                            <p className='error-col-2'>cot1s</p>
                        </div>
                        <div className='error-item'>
                            <p className='error-col-1'>Diagnostics Liblet</p>
                            <p className='error-col-2'>cot5l</p>
                        </div>
                        <div className='error-item'>
                            <p className='error-col-1'>Diagnostics Liblet</p>
                            <p className='error-col-2'>cl15f</p>
                        </div>
                    </div>
                    : <> </>}
                </div>
            </div>
        </div>
    )
}

export default ExplorePage;