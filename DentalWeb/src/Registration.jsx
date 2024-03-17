import React from "react";

function Registration() {
    return (
        <>
            <header className="header">
                <h1>DenTalCare</h1>
                <nav>
                    <ul>
                        <li ><a href="">Home</a></li>
                        <li><a href="">Appointment</a></li>
                        <li><a href="">Service</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
                <button className="bookbut"><p>BOOK APPOINTMENT</p></button>
            </header>
            <div className="Info">
                <div className="text">
                    <h3>WELCOME TO DENTALCARE</h3>
                    <h1>We Are Best Dental Service</h1><br></br>
                    <p>Our dental services is the best in the universe. So what are you waiting fir book now and have the best services with u
                        awe dental care ph. We are founded by ranulfo jopia the best in dentist in the planet</p>
                    <br></br><br></br>
                    <input className="input" type="text" value="Your Email Adress.." oninput="clearText()" /> <button className="getcall">GET CALL BACK</button>

                </div>
                <div className="imagediv">
                    <img className="Dimage" src="https://www.capitolphotointeractive.com/wp-content/uploads/2015/04/Dollarphotoclub_68564658.jpg" alt="Description of the image"></img>
                </div>
            </div>
            <br /> <br />
            <h3 className="ourservices">OUR SERVICES</h3>
            <h2 className="provide">What We Provide</h2>
            <div className="Provide-Container">
                <div className="Root-Canal">
                    <div className="Root">
                        <img className="rooting" src="https://thumbs.dreamstime.com/b/root-canal-icon-263141882.jpg" alt="root canal"></img>
                        <p><h4>Root Canal</h4><br></br>Aenans danse the asdw dase asheff aahedbf akfeijfa asfc.</p>
                    </div>
                    <div className="Cosmetic">
                        <img className="cos" src="https://tse1.mm.bing.net/th?id=OIP.tESbdURq57Qp5ggiVn0o3QHaHa&pid=Api&P=0&h=180https://cdn1.iconfinder.com/data/icons/dental-48/64/Brush-tooth-teeth-clean-dental-1024.png" alt="Cosmetic"></img>
                        <p><h4>Cosmetic Teeth</h4><br></br>Aenans danse the asdw dase asheff aahedbf akfeijfa asfc.</p>
                    </div> 
                    <div className="Live">
                        <img className="live" src="https://cdn0.iconfinder.com/data/icons/dental-butterscotch-series/256/Sensitive_Tooth-512.png" alt="live advisory" />
                        <p><h4>live Advisory</h4><br></br>Aenans danse the asdw dase asheff aahedbf akfeijfa asfc.</p>
                    </div>

                </div>

                <div className="Tooth">
                    <img className="tooth" src="https://www.pngitem.com/pimgs/m/162-1621073_tooth-vector-png-hd-png-download-teeth-logo.png" alt="teeth" />
                </div>

                <div className="Alignment">
                    <div className="align">
                        <img className="ali " src="https://cdn2.iconfinder.com/data/icons/stomatology-linear-outline/300/203450322Untitled-3-512.png" alt="align" />
                        <p><h4>Alignment of Teeth</h4><br></br>Aenans danse the asdw dase asheff aahedbf akfeijfa asfc.</p>
                    </div>
                    <div className="oral">
                    <img className="ara " src="https://cdn3.iconfinder.com/data/icons/dental-premium-color-symbol/91/Dental_-_Tooth_-_Dentist_-_Dentistry_34-512.png" alt="align" />
                        <p><h4>Oral Hygiene</h4><br></br>Aenans danse the asdw dase asheff aahedbf akfeijfa asfc.</p>
                    </div>
                    <div className="cavity">
                    <img className="cav " src="https://cdn3.iconfinder.com/data/icons/dental-premium-color-symbol/91/Dental_-_Tooth_-_Dentist_-_Dentistry_38-512.png" alt="align" />
                        <p><h4>Cavity Inspection</h4><br></br>Aenans danse the asdw dase asheff aahedbf akfeijfa asfc.</p>
                    </div>

                </div>

            </div>

        </>
    );
};

export default Registration;