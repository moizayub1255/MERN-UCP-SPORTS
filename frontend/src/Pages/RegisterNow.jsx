import React, { useState } from 'react';
import { Button, Form, Row, Col, Container, Image } from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
// import Headandfoot from '../Layout/Headandfoot';
import "../Styles/RegisterNow.css";
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const RegisterNow = () => {
    const [gender, setGender] = useState('');
    const [kitSize, setKitSize] = useState('');
    const [selectedGames, setSelectedGames] = useState([]);
    const [details, setDetails] = useState({ name: '', fatherName: '', mobileNumber: '', program: '', class: '', roll: '' });
    const [selectedHouse, setSelectedHouse] = useState('');

    
    const handleSelect = (house) => {
        setSelectedHouse(house);
    };

    const handleGameSelection = (game) => {
        if (!gender) {
            showError('Please select your gender before choosing games.');
            return;
        }
        if (selectedGames.includes(game)) {
            setSelectedGames(selectedGames.filter(g => g !== game));
        } else if (selectedGames.length < 3) {
            setSelectedGames([...selectedGames, game]);
        } else {
            showError('You can only select up to 3 games.');
        }
    };

    const showError = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
        });
    };

    const showSuccess = (message) => {
        toast.success(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
        });
    };

    const handleDownload = async () => {
        try {
            if (!details.name || !details.fatherName || !details.mobileNumber || !gender || !kitSize || !selectedHouse) {
                showError('Please fill all the required fields before registering.');
                return;
            }
    
            const formElement = document.getElementById('registration-form');
            if (!formElement) {
                showError('Form not found!');
                return;
            }
    
            const canvas = await html2canvas(formElement, {
                scale: 2, 
                useCORS: true, 
            });
    
            const imgData = canvas.toDataURL('image/png');
    
            
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth(); 
            const pdfHeight = pdf.internal.pageSize.getHeight();
    
            const imgProps = canvas.width / canvas.height; // Aspect ratio
            const imgHeight = pdfWidth / imgProps; // Calculate height to maintain ratio
    
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight); // Dynamically adjust to fit A4
            pdf.save('registration-form.pdf');
    
            showSuccess('Registration form downloaded successfully!');
        } catch (error) {
            console.error('Error generating PDF:', error);
            showError('An error occurred while generating the PDF.');
        }
    };
    


    return (
        <div>
            <ToastContainer/>
            <Container className="mt-5 mb-5 p-4" id="registration-form" style={{ border: '1px solid black', borderRadius: '8px', maxWidth: '900px' }}>
            <div className="text-center">
                    <Row>
                        <Col><Image src="pgclogo.png" height="160" width={200} /></Col>
                        <Col><Image src="logo.jpg" height="120" /></Col>
                        <Col><Image src="ucplogo.png" height="120" /></Col>
                    </Row>
                    <h2 className="text-center mt-4">UCP GAME-ON 2025 SPORTS REGISTRATION FORM</h2>
                    <hr />
                    <Row className="m-3">
                        <Col><Image src="warriors.png" height="100" width="100" /></Col>
                        <Col><Image src="jaguars.png" height="100" width="100" /></Col>
                        <Col><Image src="hawks.png" height="100" width="100" /></Col>
                        <Col><Image src="gladiators.png" height="100" width="100" /></Col>
                        <Col><Image src="falcons.png" height="100" width="100" /></Col>
                    </Row>
                    <p className="text-center">
                        Please complete this form if you would like to compete in the PGC GAME-ON 2025. Please note
                        completion of this form does not guarantee team selection. Final teams are at the discretion of the
                        House In-charge.
                    </p>
                </div>

                <Form>
                    <h5 className="mt-4">Participant Details</h5>
                    <div style={{ border: '1px solid black', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                    <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Control
                                         style={{
                                            border: 'none', 
                                            borderBottom: '2px solid #000',  
                                            borderRadius: '0'  
                                        }}
                                        placeholder="Name"
                                        value={details.name}
                                        onChange={(e) => setDetails({ ...details, name: e.target.value })}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                         style={{
                                            border: 'none', 
                                            borderBottom: '2px solid #000',  
                                            borderRadius: '0'  
                                        }}
                                        placeholder="Father's Name"
                                        value={details.fatherName}
                                        onChange={(e) => setDetails({ ...details, fatherName: e.target.value })}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                         style={{
                                            border: 'none', 
                                            borderBottom: '2px solid #000',  
                                            borderRadius: '0'  
                                        }}
                                        placeholder="Program"
                                        value={details.program}
                                        onChange={(e) => setDetails({ ...details, program: e.target.value })}
                                    />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row className='mt-2'>
                                <Col >
                                    <Form.Control
                                         style={{
                                            border: 'none', 
                                            borderBottom: '2px solid #000',  
                                            borderRadius: '0'  
                                        }}
                                        placeholder="Class"
                                        value={details.class}
                                        onChange={(e) => setDetails({ ...details, class: e.target.value })}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                         style={{
                                            border: 'none', 
                                            borderBottom: '2px solid #000',  
                                            borderRadius: '0'  
                                        }}
                                        placeholder="Roll"
                                        value={details.roll}
                                        onChange={(e) => setDetails({ ...details, roll: e.target.value })}
                                    />
                                </Col>
                                <Col>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-success dropdown-toggle "
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {selectedHouse || 'Select House'}
                                        </button>
                                        <ul className="dropdown-menu">
                                            {["Warriors", "Gladiators", "Hawks", "Jaguar", "Falcons"].map(
                                                (house) => (
                                                    <li
                                                        key={house}
                                                        style={{ cursor: "pointer" }}
                                                        className="dropdown-item pointer"
                                                        onClick={() => handleSelect(house)}
                                                    >
                                                        {house}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={4}>
                                <div>
                                    <Form.Label className='m-2'>Gender:</Form.Label>
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Male"
                                        name="gender"
                                        value="Male"
                                        checked={gender === 'Male'}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Female"
                                        name="gender"
                                        value="Female"
                                        checked={gender === 'Female'}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                </div>
                            </Col>
                            <Col sm={4}>
                                <Form.Control
                                     style={{
                                        border: 'none', 
                                        borderBottom: '2px solid #000',  
                                        borderRadius: '0'  
                                    }}
                                    placeholder="Mobile Number"
                                    value={details.mobileNumber}
                                    onChange={(e) => setDetails({ ...details, mobileNumber: e.target.value })}
                                />
                            </Col>
                        </Form.Group>
                    </div>
                    <Form.Group>
                        <h5>Sports Kit Size</h5>
                        <Row>
                            <Col>
                                <Form.Check
                                    type="radio"
                                    label="Small"
                                    name="kitSize"
                                    value="Small"
                                    checked={kitSize === 'Small'}
                                    onChange={(e) => setKitSize(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    type="radio"
                                    label="Medium"
                                    name="kitSize"
                                    value="Medium"
                                    checked={kitSize === 'Medium'}
                                    onChange={(e) => setKitSize(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    type="radio"
                                    label="Large"
                                    name="kitSize"
                                    value="Large"
                                    checked={kitSize === 'Large'}
                                    onChange={(e) => setKitSize(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    type="radio"
                                    label="Extra-Large"
                                    name="kitSize"
                                    value="Extra-Large"
                                    checked={kitSize === 'Extra-Large'}
                                    onChange={(e) => setKitSize(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                    <h3 className="mt-2">Game Preference</h3>
                    <Form.Group>
                        <Row>
                            <Col>
                            <h5>For Both Boys and Girls</h5>
                                <Form.Check
                                    type="checkbox"
                                    label="Cricket"
                                    checked={selectedGames.includes('Cricket')}
                                    onChange={() => handleGameSelection('Cricket')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Table Tennis"
                                    checked={selectedGames.includes('Table Tennis')}
                                    onChange={() => handleGameSelection('Table Tennis')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Badminton"
                                    checked={selectedGames.includes('Badminton')}
                                    onChange={() => handleGameSelection('Badminton')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="E-Gaming"
                                    checked={selectedGames.includes('E-Gaming')}
                                    onChange={() => handleGameSelection('E-Gaming')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Table Football"
                                    checked={selectedGames.includes('Table Football')}
                                    onChange={() => handleGameSelection('Table Football')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Arm Wrestling"
                                    checked={selectedGames.includes('Arm Wrestling')}
                                    onChange={() => handleGameSelection('Arm Wrestling')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Tug of War"
                                    checked={selectedGames.includes('Tug of War')}
                                    onChange={() => handleGameSelection('Tug of War')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Chess"
                                    checked={selectedGames.includes('Chess')}
                                    onChange={() => handleGameSelection('Chess')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Ludo"
                                    checked={selectedGames.includes('Ludo')}
                                    onChange={() => handleGameSelection('Ludo')}
                                />
                            </Col>
                            <Col>
                                <h5>For Boys Only</h5>
                                <Form.Check
                                    type="checkbox"
                                    label="Pillow Fight"
                                    disabled={gender === 'Female'}
                                    checked={selectedGames.includes('Pillow Fight')}
                                    onChange={() => handleGameSelection('Pillow Fight')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Snooker"
                                    disabled={gender === 'Female'}
                                    checked={selectedGames.includes('Snooker')}
                                    onChange={() => handleGameSelection('Snooker')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Futsal"
                                    disabled={gender === 'Female'}
                                    checked={selectedGames.includes('Futsal')}
                                    onChange={() => handleGameSelection('Futsal')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Volley Ball"
                                    disabled={gender === 'Female'}
                                    checked={selectedGames.includes('Volley Ball')}
                                    onChange={() => handleGameSelection('Volley Ball')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Carrom Board"
                                    disabled={gender === 'Female'}
                                    checked={selectedGames.includes('Carrom Board')}
                                    onChange={() => handleGameSelection('Carrom Board')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="100m Race"
                                    disabled={gender === 'Female'}
                                    checked={selectedGames.includes('100m Race')}
                                    onChange={() => handleGameSelection('100m Race')}
                                />
                            </Col>
                            <Col>
                            
                                <h5>For Girls Only</h5>
                                <Form.Check
                                    type="checkbox"
                                    label="Three Leg Race"
                                    disabled={gender === 'Male'}
                                    checked={selectedGames.includes('Three Leg Race')}
                                    onChange={() => handleGameSelection('Three Leg Race')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Sack Race"
                                    disabled={gender === 'Male'}
                                    checked={selectedGames.includes('Sack Race')}
                                    onChange={() => handleGameSelection('Sack Race')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Egg Spoon Race"
                                    disabled={gender === 'Male'}
                                    checked={selectedGames.includes('Egg Spoon Race')}
                                    onChange={() => handleGameSelection('Egg Spoon Race')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="50m Race"
                                    disabled={gender === 'Male'}
                                    checked={selectedGames.includes('50m Race')}
                                    onChange={() => handleGameSelection('50m Race')}
                                />
                            </Col>
                        </Row>
                    </Form.Group>

                    <div style={{ fontSize: '0.9em' }}>
                        <h3>Important Note</h3>
                        <p>* Students can select a maximum of 03 games to compete in.</p>
                        <p>* Students are required to pay Rs. 3500 as Entry fee to House In-charge with this form.</p>
                        <p>* Management will provide themed Sports Uppers/Zippers to all registered students as kit.</p>
                    </div>
                    <Button className="mt-4" variant="primary" onClick={handleDownload}>Download Form</Button>
                    
                </Form>
            </Container>
            </div>
    );
};

export default RegisterNow;