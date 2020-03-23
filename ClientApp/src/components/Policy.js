import React, { Component } from "react";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";

export class Policy extends Component {

    componentDidMount() {
        document.title = "Genesis Trust: Policies";
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href={require("./main.css")} />
                <link rel="stylesheet" href={require("./policy.css")} />
                <NavigationBar active={3}/>
                <div className="policy-container">

                    <div className="content-container">


                        <div className="policy-type1">

                            <h2><br /> Volunteer Handbook</h2>
                            <p>Want to get involved with volunteering at Genesis trust but don't know what we do or how to help?<br /><br />
                    Take a look at our Volunteer Handbook below to browse some of our activities and learn what we as a charity are about, and how you as an individual can come together as part of a greater team, and help us achieve something great!
                </p>
                            <img alt="Genesis Trust" src={require("./Resources/Volunteer-Hands2.jpg")} width="400px" />


                            <ul>
                                <a href="http://genesistrust.org.uk/wp-content/uploads/2019/09/Volunteer-Handbook_2019.pdf">Volunteer Handbook</a><br />
                                <br /><br />
                            </ul>
                        </div>

                        <div className="policy-type2">
                            <h2>Volunteer Policy</h2>
                            <p>Thinking of becoming a volunteer?<br /><br />
                Have a browse through our volunteer policy to see how Genesis Trust will support you as individuals as a volunteer.
                </p>
                            <img alt="Genesis Trust" src={require("./Resources/volunteer-policy.png")} width="400px" />


                            <ul>
                                <a href="http://genesistrust.org.uk/wp-content/uploads/2019/10/volunteer-policy-2019.pdf">Volunteer Policy</a><br />
                                <br /><br />
                            </ul>
                        </div>


                        <div className="policy-type1">
                            <h2>Induction Checklist</h2>
                            <p>Before you can become a fully qualified volunteer with us a supervisor must ensure you are up to the job.<br /><br />
                    Below is a checklist that we will use to assess your ability and help you in your journey to becoming a volunteer with Genesis Trust.

                </p>
                            <img alt="Genesis Trust" src={require("./Resources/AdobeStock_190479583-e1567431988792.jpeg")} width="400px" />



                            <ul>
                                <a href="genesistrust.org.uk/wp-content/uploads/2019/10/Induction-Checklist_template.pdf
                    ">Induction Checklist</a><br />
                                <br /><br />
                            </ul>
                        </div>



                        <div className="policy-type2">
                            <h2>Health & Safety Policy</h2>
                            <p>At Genesis Trust we take health and safety very seriously. <br /><br /> At the forefront of everything we do, is the safety of our employees ad volunteers.
                    <br /><br />For this reason we always stick to the health and safety policy and ensure we never put our employees and volunteers into dangerous or unsafe situations.
                    <br /><br />Have a look through the health and safety policy and see if you are already using good practices!
                </p>

                            <img alt="Genesis Trust" src={require("./Resources/Webp.net-resizeimage-5-1200x627.jpg")} width="400px" />




                            <ul>
                                <a href="http://genesistrust.org.uk/wp-content/uploads/2019/09/Health-and-Safety-Policy-August-2019.pdf">Health and Safety Policy</a><br />
                                <br /><br />
                            </ul>
                        </div>


                        <div className="policy-type1">
                            <h2>Equal Opportunities Policy</h2>
                            <p>As part of our Charity we work with a varied group of people. <br /><br />
                It is important to us that we NEVER discriminate against anyone, so to ensure this is taken seriously, we adhere to out Equal Opportunities Policy
                </p>

                            <img alt="Genesis Trust" src={require("./Resources/20180409PHT01212_original.jpg")} width="400px" />



                            <ul>
                                <a href="http://genesistrust.org.uk/wp-content/uploads/2019/01/Equal_Opportunities_Policy.pdf">Equal OpportunitesPolicy</a><br />
                                <br /><br />
                            </ul>
                        </div>



                        <div className="policy-type2">
                            <h2>Ethical And Environmental Policy</h2>
                            <p>GenesisTrust is committed to minimising the environmental impact of our actions, and to upholding ethical standards. Read a little bit about how we do this below

                </p>
                            <img alt="Genesis Trust" src={require("./Resources/Global-Environmental-Change-Why-We-Need-International-Relations-Experts-737x415.jpg")} width="400px" />


                            <ul>
                                <a href="http://genesistrust.org.uk/wp-content/uploads/2019/01/Ethical__Environmental_Policy.pdf">Ethical and Environmental Policy</a><br />
                                <br /><br />
                            </ul>
                        </div>

                        <div className="policy-type1">
                            <h2>Policy For Safeguarding Adults</h2>
                            <p>
                                Adults are our number one group to aid when it comes to Genesis Trust. <br /><br />
                    We like to ensure all adults feel safe when we are dealing with them, and do everything possible to ensure our employees and volunteers are kept safe.<br /><br /> Read about our Safeguarding policy below.
                </p>
                            <img alt="Genesis Trust" src={require("./Resources/safeguarding_triratna.jpg")} width="400px" />

                            <ul>
                                <a href="http://genesistrust.org.uk/wp-content/uploads/2019/10/Policy-for-Safeguarding-Adults-August-2019.pdf">Policy for Safeguarding Adults</a><br />
                                <br /><br />
                            </ul>

                            <div className="policy-type2">
                                <h2>Data Policy</h2>
                                <p>As part of our job it is important we take details from volunteers and clients to ensure we can aid in the most appropriate way, however we pride ourselves on our data protection. <br /><br /> Take a look at our data policy to see for yourselves what we do to keep your data safe!</p>
                                <img alt="Genesis Trust" src={require("./Resources/data-analytics-picture--global-en-.jpg")} width="800px" />



                                <ul>
                                    <a href="http://genesistrust.org.uk/wp-content/uploads/2018/10/Data-Policy-V1-2018.pdf">Data Policy</a><br />
                                    <br /><br />
                                </ul>
                            </div>

                            <div className="policy-type1">
                                <h2>Complaints Procedure</h2>
                                <p>Here at Genesis Trust we take any complaints very seriosuly, so if you have any complaints then please see our complaints policy. <br /><br />If you require further information, please do not hesitate to contact us at genesis trust using the contact tab below.</p>

                                <img alt="Genesis Trust" src={require("./Resources/complaint-box-1200xx1500-844-0-81.jpg")} width="400px" />


                                <ul>

                                    <a href="http://genesistrust.org.uk/wp-content/uploads/2018/10/Genesis_Complaints_Procedure_Issue1.pdf">Complaints Procedure    </a><br />

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}

