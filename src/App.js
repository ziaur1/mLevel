import logo from './logo.svg';
import banar from './banar.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">       
		<img src={banar} className="Banar-slide" alt="banar" />	
	</header>
	<main className="main">
	   <section className="section">			
        <p>
          The MLM (Multi-Level Marketing) business model is a proven method for building a successful business by leveraging the power of network marketing. At our company, we offer a range of products and services in a variety of industries, and we're always looking for talented individuals to join our team and help us grow.
        </p>
       </section>
       <section className="section">	   
		<p>
          Our business model is built on the idea that everyone can achieve success if they're willing to work hard and stay committed to their goals. As a member of our team, you'll have access to a range of resources and tools to help you build your business, including online training, marketing materials, and one-on-one coaching.
        </p>
		 </section>
		  <section className="section">	  
		<p>
          We believe in rewarding hard work and dedication, which is why our compensation plan offers multiple ways to earn income and advance within the company. Whether you're looking to build a full-time business or just earn some extra income on the side, we have opportunities for you.
        </p>
		 </section>
		  <section className="section">	 
		<p>
          On our CMS website, you'll find a range of resources and information to help you get started on your MLM journey. Our home page is designed to provide an overview of our company and the opportunities we offer, as well as highlight our most popular products and services.
        </p>
		</section>
		  <section className="section">	 
		<p>
          You'll also find information on how to join our team, as well as details on our compensation plan and the benefits of working with us. Our blog is updated regularly with tips and strategies for building a successful MLM business, and our support team is always available to answer any questions you may have.
        </p>
		</section>
		  <section className="section">	 
		<p>
          Thank you for considering our company as your partner in network marketing. We believe in the power of MLM and are committed to helping our team members achieve their goals and dreams. Please contact us today to learn more about our opportunities and how we can help you succeed.
        </p>
		</section>
		  
     </main> 
	 <footer className="footer">
	     Contact Us
 vivecosmetic@gmail.com
 +91 8699748774
 Plot No. 773, Sector 82, JLPL, Ind. Area, Mohali, Punjab
	 </footer>
     
    </div>
  );
}

export default App;
