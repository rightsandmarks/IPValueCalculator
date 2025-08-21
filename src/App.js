import './App.css';
import React, { useState, useEffect } from 'react';
import ExpandablePanel from './ExpandablePanel.js';

function AdvisorTypewriter() {
  const text = `ABC Company is negotiating license the use of the trademark whose current market value is estimated to be $2 million. 
    ABC Company estimates that the royalty rate would lead to an annual stream of US $10,000 in 5 years. The risk adjusted discount rate has been estimated to be 89%.`;
  
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 17); // Adjust speed here (ms per character)
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <button className="advisor-answer">
      <span className="typewriter-text">{displayed}</span>
    </button>
  );
}

function App() {
  const statements = [
    "Welcome to IP Allies! Ready to value your digital assets?",
    "The first AI Enabled Value Calculator.",
    "Maximize the potential of your intellectual property.",
    "Join a community of investors and venture capitalist.",
    "Your digital assets, your future!",
    "What is the value of my IP Assets?",
    "Discover the power of AI in asset valuation.",
    "Transform your digital assets into tangible value.",
    "Unlock the secrets of your intellectual property.",
    "Empowering creators and innovators with AI-driven insights.",
    "Your journey to asset valuation starts here.",
  ];

  const [currentStatement, setCurrentStatement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatement((prev) => (prev + 1) % statements.length);
    }, 3000); // Change statement every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [statements.length]);

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo-container">
            <img src="/logo800.jpg" alt="Logo" className="logo" />
            <span className="logo-text">Premier IP Valuation Services</span>
            <button className="beta-button">Beta</button>
          </div>
          
          <div className="auth-buttons">
            <button className="auth-button">Sign In</button>
            <button className="auth-button2">Sign Up</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <img src="/BlueFuturisticBackground2.svg" alt="Hero" className="hero-image"  />
  
          </section>

<section className="circle-timeline">
  <div className="circle-row">
    <div className="circle-item">
      <div className="circle-img">
        <img src="/legal.png" alt="Businesses" />
      </div>
     
      <span className="circle-label">Businesses</span>
       <a href="https://link-to-signup" target="_blank" rel="noopener noreferrer">
     </a>
    </div>
    <div className="circle-connector"></div>  
     <div className="circle-item">
      <div className="circle-img">
        <img src="/advisor64.png" alt="Lawyers" />
      </div>
      
      <span className="circle-label">Lawyers</span>
    </div>
    <div className="circle-connector"></div>
    <div className="circle-item">
      <div className="circle-img">
        <img src="/advisor64.png" alt="Advisors" />
      </div>
     
      <span className="circle-label">Advisors</span>
    </div>
    <div className="circle-connector"></div>
    <div className="circle-item">
      <div className="circle-img">
        <img src="/investment.png" alt="Investors" />
      </div>
      
      <span className="circle-label">Investors</span>
     
    </div>
    <div className="circle-connector"></div>
    <div className="circle-item">
      <div className="circle-img">
        <img src="/buyer.png" alt="Buyers" />
      </div>
      
      <span className="circle-label">Buyers</span>
    </div>  
  </div>
</section>
         <section className="gradientbackground">

         
         <div className="text-box">
           <p>{statements[currentStatement]}</p>
           <button 
             className="circle-button"
             onClick={() => setCurrentStatement((currentStatement + 1) % statements.length)}
           >
             <span className="arrow">→</span>
           </button>
         </div>
         <p style={{ fontSize: "16px",  fontWeight: "normal", color: "#fff", marginTop: "-180px" }}>
           No credit card required. Instant Access.
         </p>
         <section className="three-boxes">
 <div className="box"> 90% Match Accuracy</div>
 <div className="box"> Trained on hundreds of Assets</div>
 <div className="box"> $ Millions raised through our tools</div>
       </section>
          </section>
        <section className="keyfeatures">
          <p style={{ fontSize: "24px", marginTop: "60px", fontWeight: "bold"}}>Key Platform Features</p>
          <p>Our AI Powered tools help you fundraise faster and more efficiently</p>
          <section className="feature-boxes">
  <div className="featurebox">
    <img src="/target-64.png" alt="Evaluate Assets" className="featurebox-image" />
    <h3>Evaluate Assets</h3>
    <p style={{ fontSize: "12px", fontWeight: "normal" }}>
      Evaluate assets that can be legally protected and can have an economic life.
    </p>
  </div>
  <div className="featurebox">
    <img src="/analysis-64.png" alt="IP Analyzer" className="featurebox-image" />
    <h3>IP Analyzer</h3>
    <p style={{ fontSize: "12px", fontWeight: "normal" }}>
       Provides insights into patents, trademarks, copyrights, and trade secrets—tracking ownership, usage, value, and potential risks.
    </p>
  </div>
  <div className="featurebox">
    <img src="/crowdfunding-64.png" alt="Fundraising CRM" className="featurebox-image" />
    <h3> Asset Management</h3>
    <p style={{ fontSize: "12px", fontWeight: "normal" }}>
      Enables organizations to track, manage, and optimize their assets throughout the entire lifecycle—from acquisition to retirement
    </p>
  </div>
  <div className="featurebox">
    <img src="/connect-64.png" alt="IP Readiness" className="featurebox-image" />
    <h3>Asset Performance</h3>
    <p style={{ fontSize: "12px", fontWeight: "normal" }}>
    Maximize the reliability, availability, and efficiency of 
     assets across their lifecycle. 
     
    </p>  
  </div>
</section>
<section className="feature-boxes">
  <div className="featurebox"> <img src="/value-64.png" alt="Valuation" classname="featurebox-image" />
  <h3> IP Asset Valuation</h3>
  <p style={{ fontSize: "12px", fontWeight: "normal" }}>
  Calculate the economic value of your intellectual property, such as patents, trademarks, copyrights, trade secrets, and brand equity.
  </p>
  </div>
  <div className="featurebox"> <img src="/combo-chart-64.png" alt="Preparation" classname="featurebox-image" />
  <h3> Smart Prep</h3>
  <p style={{ fontSize: "12px", fontWeight: "normal" }}>
   Prepare the right answers to tough questions.
  </p></div>
  <div className="featurebox"> <img src="/calculator-64.png" alt="Calculator" classname="featurebox-image" />
  <h3> IP Calculator Tools</h3>
  <p style={{ fontSize: "12px", fontWeight: "normal" }}>
    Understand the real impact of your assets. Raise like a pro, even if it is your first raise.
  </p></div>
  <div className="featurebox"> <img src="/analysis2-64.png" alt="Advisor" classname="featurebox-image" />
  <h3> AI Advisor</h3>
  <p style={{ fontSize: "12px", fontWeight: "normal" }}>
    Ask anything about your assets and get AI-driven insights. Get instant answers from AI trained on IP data.
  </p></div>
  </section>
        </section> 
        <section className="cta">
          <h1 style={{fontSize: "36px" }}>Value Smarter, Close Faster. Here's How</h1>
          
         <button className="cta-button">Get Started</button>
        </section>
        
        <section className="feature-boxes">
  <div className="featurebox">
    <img src="/share-64.png" alt="Connect" className="featurebox-image" />
    <h3>Connect & Analyze</h3>
    <p style={{ fontSize: "12px", fontWeight: "normal" }}>
      Upload your files to get instant feedback on your IP, trademark, copyright, and patent assets.
    </p>
  </div>
  <div className="featurebox">
    <img src="/value-64.png" alt="Valuation" className="featurebox-image" />
    <h3>Valuation</h3> 
    <p style={{ fontSize: "12px", fontWeight: "normal" }}>
      AI helps you define your capital amount, timeline, and investor targeting based on trends.
    </p>
  </div>
  <div className="featurebox">
    <img src="/share-64.png" alt="Matching" className="featurebox-image" />
    <h3>Get Matched</h3>
    <p style={{ fontSize: "12px", fontWeight: "normal" }}>
      Transact with confidence. License your IP with pre-vetted investors and buyers.
      </p>
  </div>
  <div className="featurebox">
    <img src="/track2-64.png" alt="TrackingAssets" className="featurebox-image" />
    <h3>Track Your Assets</h3>
    <p style={{ fontSize: "12px", fontWeight: "normal" }}>
      Track your assets, intros inside your individual command center.
    </p>
  </div>
</section>
<section className="cta">
  <h2>Your Accelerated IP Valuation Journey</h2>
  <p style={{ fontSize: "16px", fontWeight: "normal" }}>
      From startup to full IP Valuation in less than 30 days with our expert legal counsel.</p>
  
</section>
<section className="staggered-boxes">
  <div className="stagbox stagbox-1">
    <button className="stagbox-button" >Step 1</button>
    <h4>Setup & Profile</h4>
    <p>Setup your profile, Valuation Goals to get started.</p>
  </div>
  <div className="stagbox stagbox-2">
    <button className="stagbox-button2">Step 2</button>
    <h4>Valuation</h4>
    <p>Get your assets valued with expert legal counsel.</p>
  </div>
  <div className="stagbox stagbox-3">
    <button className="stagbox-button3">Step 3</button>
    <h4>Connection</h4>
    <p>Connect with Investors and begin sharing your valuation.</p>
  </div>
  <div className="stagbox stagbox-4">
    <button className="stagbox-button4">Step 4</button>
    <h4>Get Funded</h4>
    <p>Negotiate Terms to Close Funding.</p>
  </div>
  
</section>

<section className="ready-box">
  <div className="rbox ready-box-content">
    <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#fff"}}>Ready to Start Your Journey</h1>
    <p style={{ fontSize: "16px", fontWeight: "normal", color: "#fff" }}> Value your assets and prepare for raising millions.</p>
    <button className="start-button" >Get Started Today</button>
  </div>
</section>

<section className="ai-advisor">
  <div className="ai-advisor-content">
  <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#000" }}>IP Advisor At Your Service</h1>
  <p style={{ fontSize: "16px", fontWeight: "normal", color: "#000" }}>
    Ask anything about your assets and get AI-driven insights.   
  </p>
  <p style={{ fontSize: "16px", fontWeight: "normal", color: "#000" }}>
    <img src ="/files.png" alt="AI Advisor Icon" className="ai-advisor-icon" />
   Upload your files to get instant feedback on your IP assets.  
  </p>
  <p style={{ fontSize: "16px", fontWeight: "normal", color: "#000" }}>
  <img src ="/matchesinv.png" alt="AI Advisor Icon" className="ai-advisor-icon" />
   Access investor matches. No more cold emails.   
  </p>
  <p style={{ fontSize: "16px", fontWeight: "normal", color: "#000" }}>
  <img src ="/agentai.png" alt="AI Advisor Icon" className="ai-advisor-icon" />
   Get instant answers from AI trained on IP data.   
  </p>
  </div>
  <section className="advisor-text-box">
  <div className="text-box-content">
    <h2>AI Advisor</h2>
    <img src="/share-64.png" alt="AI Advisor" className="aiadvisor-image" align="left"/>
    <button className="advisor-button">What is the value of my IP assets?</button>
    <AdvisorTypewriter/>
    </div>
</section>
</section>
<section className="stories">
  <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#000" }}>Real Clients. Real Results.</h2>
  <p style={{ fontSize: "16px", fontWeight: "normal", color: "f0f0f0" }}>
    Join hundreds of clients who has used our platform to value their assets and raise millions.</p>
      <h3 style={{ fontSize: "16px", fontWeight: "normal", color: "1e0383" }}>
    Be the next success story.</h3>
      </section>
      <section className="side-by-side-text-boxes">
  <div className="side-box">
    <h3>Meet Jane: Visionary Creator</h3>
    <p>
      IP Allies valuation guidance helped Jane sharpen her story, leading to a $200 Million Valuation.
    </p>
    <table className="custom-table">
  <tbody>
    <tr>
      <td>Valuation</td>
      <td>Assets
      </td>
    </tr>
    <tr>
      <td> $100M +</td>
      <td> 15+ </td>
    </tr>
  </tbody>
</table>
  </div>
  <div className="side-box">
    <img src="/stockimage.jpg" alt="Jane's Story" className="story-image" />
  </div>

</section>
 <section className="product-reviews">
  <div className="review-box">
     <img src="/SonaliProfile-Pic.jpg" alt="Jane's Photo" className="review-image" />
    <h3>Sonal K. </h3>
    <h5>Co-Founder, Geneos</h5>
    <p>"Amazing tool! Helped us value our IP in minutes." Comprehensive analysis and detailed reporting that we could share with future investors.</p>
    <span>⭐⭐⭐⭐⭐</span>
  </div>
  <div className="review-box">
    <img src="/prodreview2.jpg" alt="John's Photo" className="review-image" />
    <h3>Jamie S.</h3>
    <h5>Co-Founder, ProtonAI</h5>
    <p>"Investor matching was spot on and saved us weeks." The speed and accuracy of the match really helped our company reach our goals.</p>
    <span>⭐⭐⭐⭐</span>
  </div>
  <div className="review-box">
    <img src="/sunkanprofile.jpeg" alt="John's Photo" className="review-image" />
    <h3>Nicholas B.</h3>
    <h5>Co-Founder, ReliAI</h5>
    <p>"The AI advisor answered all our questions instantly." The IP Valuation process was made easy with relevant information provided at each step.</p>
    <span>⭐⭐⭐⭐⭐</span>
  </div>
  <div className="review-box">
    <img src="/AokiStock.jpg" alt="John's Photo" className="review-image" />
    <h3>Aoiki M.</h3>
    <h5>Co-Founder, Calisco</h5>
    <p>"Easy to use and very insightful analytics." The detailed breakdown of the process steps made it easy to understand</p>
    <span>⭐⭐⭐⭐</span>
  </div>
  <div className="review-box">
    <img src="/Mikeman.jpg" alt="John's Photo" className="review-image" />
    <h3>Mike O.</h3>
    <h5>Co-Founder, CrowdSource</h5>
    <p>"Raised our first round with confidence thanks to IP Allies." The experienced IP Lawyers available gave us added confidence in the process.</p>
    <span>⭐⭐⭐⭐⭐</span>
  </div>
</section>
<section className="image-left-text-right">
  <div className="image-text-box">
    <img src="/FoundersFour.svg" alt="Description" className="image-side" />
    <div className="text-side">
      <h3>Meet the Founders: Bala & Latanya has over 40+ years experience combined in Intellectual Property Law and Technology</h3>
      <p>
        Bala's expertise and legal background has enabled IP Allies to help you value, protect, and monetize your intellectual property. Join hundreds of successful founders and investors who trust IP Allies for their IP journey.
        Latanya's vision is to empower creators and innovators with the tools they need to succeed in today's digital landscape. <br /> <br />
        They have dedicated their careers to helping startups and established businesses alike navigate the complexities of intellectual property law.
        With a passion for innovation and a commitment to excellence, Bala and Latanya has built IP Allies into a leading platform for IP valuation and management.
        Their expertise in the field has been instrumental in shaping the company mission and value.
      </p>
      <button className="founder-button">Get Started</button>
    </div>
  </div>
</section>
<section className="questions-section">
  <div className="questions-box">
    <h2>Frequently Asked Questions</h2>
    <p>Got Questions? We have answers. If you cannot find what you are looking for, reach out to our support team. </p>
    
<ExpandablePanel title="How does IP Allies value my assets?">
  Our platform uses AI-driven analysis and expert legal counsel to provide accurate valuations for your intellectual property.
</ExpandablePanel>
<ExpandablePanel title="How does IP Allies value my assets?">
  Our platform uses AI-driven analysis and expert legal counsel to provide accurate valuations for your intellectual property.
</ExpandablePanel>
<ExpandablePanel title="How does IP Allies value my assets?">
  Our platform uses AI-driven analysis and expert legal counsel to provide accurate valuations for your intellectual property.
</ExpandablePanel>
<ExpandablePanel title="How does IP Allies value my assets?">
  Our platform uses AI-driven analysis and expert legal counsel to provide accurate valuations for your intellectual property.
</ExpandablePanel>
<ExpandablePanel title="How does IP Allies value my assets?">
  Our platform uses AI-driven analysis and expert legal counsel to provide accurate valuations for your intellectual property.
</ExpandablePanel>
<ExpandablePanel title="How does IP Allies value my assets?">
  Our platform uses AI-driven analysis and expert legal counsel to provide accurate valuations for your intellectual property.
</ExpandablePanel>
  </div>
</section>
<footer className="footer-section">
  <div className="footer-box">
    <h4>Contact Us</h4>
    <p>Email: support@ipallies.com<br /><br />Phone: (555) 123-4567</p>
  </div>
  <div className="footer-box">
    <h4>Quick Links</h4>
    <p>
      <a href="#features">Privacy Policy</a><br /><br />
      <a href="#pricing">Terms & Conditions</a><br /><br />
      <a href="#faq">Disclaimer</a><br /><br />
       <a href="#faq">Cookie Policy</a><br /><br />
        <a href="#faq">Cancellation Policy</a><br /><br />
         <a href="#faq">Accessibility Statement</a><br /><br />
           <a href="#faq">Support</a><br />

    </p>
  </div>
  <div className="footer-box">
    <h4>Follow Us</h4>
    <p>
      
      <a href="www.linkedin.com/company/ipallies"> LinkedIn
            </a><br /><br />
      <a href="#">Twitter</a><br /><br />
      <a href="#">Facebook</a><br /><br />
    </p>
  </div>
</footer>

      </main>
    </div>
  );
}

export default App;
