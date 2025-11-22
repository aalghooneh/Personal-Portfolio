import React, { useState, useEffect, useRef } from "react";
import { realData } from "../mock/realData";
import { Mail, Linkedin, Github, Send, MapPin, Clock, GraduationCap } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { contact } = realData;
  const { toast } = useToast();
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animateElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-black bg-opacity-70 py-20 relative overflow-hidden z-10" ref={sectionRef}>
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title animate-on-scroll">{contact.title}</h2>
            <p className="contact-description animate-on-scroll">{contact.description}</p>
            
            <div className="contact-details">
              <div className="contact-item animate-on-scroll">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${contact.email}`} className="contact-value">
                    {contact.email}
                  </a>
                </div>
              </div>
              
              <div className="contact-item animate-on-scroll">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Status</span>
                  <span className="contact-value availability-status">
                    {contact.availability}
                  </span>
                </div>
              </div>
              
              <div className="contact-item animate-on-scroll">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Toronto, ON, Canada</span>
                </div>
              </div>
            </div>
            
            <div className="contact-social animate-on-scroll">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-button">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="social-button">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href={contact.scholar} target="_blank" rel="noopener noreferrer" className="social-button">
                <GraduationCap size={20} />
                <span>Scholar</span>
              </a>
            </div>
          </div>
          
          <div className="contact-form-container animate-on-scroll">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary form-submit">
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;