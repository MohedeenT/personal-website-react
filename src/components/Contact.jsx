export default function Contact(){
    return(
    <main>
    <div id="contact-text">
        <h3>Contact me</h3>
        <p>Fill out the form below to send me an email</p>
      </div>
      <div className="contact-form">
        <label htmlFor="Name">Name</label>
        <input type="text" />

        <label htmlFor="Email">Email</label>
        <input type="email" />

        <label htmlFor="Subject">Subject</label>
        <input type="text" />

        <label htmlFor="Message">Message</label>
        <textarea id="comments-section"></textarea>

        <button id="send-btn">Send Now</button>
      </div>
    </main>)
}