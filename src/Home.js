
import logo from './imgs/SunWestLogo.png';
import './App.css';
import { Button } from 'reactstrap'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,  
} from "react-router-dom";
import Contact from "./Contact";
function Home() {
  return (
<div className="Mainapp">
    <div className="App">
      <div className="banner">
        <img src={logo} className="logo" alt="logo" />
        
      </div>
    </div>
    <div className="Bluebg">
      <div class="containers">
      <h2 className="LoanFast">LoanFast</h2>
    <h5 className="weekend">This weekend get your</h5>
    <h2 className="OFFERS">OFFERS ACCEPTED</h2>
    <ol>
      <li className="litextcolor">Submit a pre-approval request by 8pm Friday and get
     Pre-Approved by 8am Saturday</li>
     <p className="pcss">Make your offer with a thoroughly underwritten, Sun West Pre-Approval</p>
     <li className="litextcolor">Commit to the seller that the loan will be underwritten by
Monday morning</li>
<p className="pcss">All offers accepted and submitted to Sun West by 8pm Sunday will be underwritten
by 8am Monday</p>

    </ol>
    <p className="pcss"> Present offers with the knowledge and confidence that we are working according to your
``  buyer's schedule.
    </p>
    <p className="pcss">Sun West is owned and operated by loan originators. Because of our experience, our
technology is designed with the understanding that most offers are presented in the
evenings and over the weekend.
 </p>
    <p className="pcss"> Historically, the process of making an offer and getting conditional approval never
could be organized over a weekend and Sun West Mortgage Company is now
reimagining the approval process and making it more efficient with LoanFast. </p>

<br/>
<p className="pcssnormal">All products are subject to credit and property approval. Program terms and conditions are subject to change without prior notice. Other
restrictions and limitations apply. The content here does not substitute for professional legal, secu-rities, tax or accounting advice. Sun West
Mortgage Company, Inc. (NMLS ID 3277) in California holds a Financing Law License (#6030119) [Loans made or arranged pursuant to a
California Financing Law license], licensed by the California Department of Financial Protection and Innovation, Phone: (866) ASK-CORP, has a
DRE Real Estate Corporation License Endorsement (#00793885), licensed by the California Department of Real Estate, Phone: (877)
373-4542. For licensing information, go to: www.nmlsconsumeraccess.org and refer to www.swmc.com to see where Sun West Mortgage
Company, Inc. (NMLS ID 3277) is a licensed lender and servicer. In all jurisdictions, the principal (Main) licensed location of Sun West
Mortgage Company, Inc. is 6131 Orangethorpe Avenue, Suite 500, Buena Park, CA 90620, Phone: (800) 453-7884.
</p>
      </div>

    <div className="contacts">
    <Link to="/Contact">
     <Button color="inherit" className="contactbtn">Contact US</Button>
   </Link>
    </div>
    </div>
  
    </div>
  );
}

export default Home;
