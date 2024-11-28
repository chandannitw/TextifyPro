// Components/About.js
import React from 'react';
import './About.css'; 
export default function About(props) {
  return (
    <div className={`about-container about-container-${props.mode}`}>
      <h1 className="about-title">About Our Platform</h1>
      <p className="about-description">
        <strong>TextifyPro</strong> is a powerful web application built with ReactJS, designed to make your text-handling experience more efficient. While simple text editors like WordPad or Notepad serve their purpose, <strong>TextifyPro</strong> goes beyond the basics, offering a wide range of tools for text manipulation and analysis. Whether you need to change the case of your text, extract valuable data from a body of content, or clean up unwanted spaces, this tool can do it all.
        <br /><br />
        With <strong>TextifyPro</strong>, you can also convert your text into speech, making it a great solution for multitaskers. Furthermore, it provides in-depth analytics, including word and character counts, reading time, and much more. Best of all, it’s an open-source project that continues to improve with new features.
      </p>
      <h2 className="features-heading">Core Features</h2>
      <div className="features">
        <div
          className={`feature-item feature-item-${props.mode}`}
        >
          <i className="fas fa-cogs"></i>
          <h3>Comprehensive Text Analysis</h3>
          <p>
            Our <strong>Advanced Text Analyzer</strong> helps you gain insights
            into your text, from word and character counts to reading time.
          </p>
        </div>
        <div
          className={`feature-item feature-item-${props.mode}`}
        >
          <i className="fas fa-check-circle"></i>
          <h3>Completely Free</h3>
          <p>All features of TextifyPro are completely free to use, with no hidden charges.</p>
        </div>
        <div
          className={`feature-item feature-item-${props.mode}`}
        >
          <i className="fas fa-globe"></i>
          <h3>Cross-Browser Support</h3>
          <p>Enjoy a seamless experience across all modern browsers without compatibility issues.</p>
        </div>
        <div
          className={`feature-item feature-item-${props.mode}`}
        >
          <i className="fas fa-volume-up"></i>
          <h3>Text-to-Speech Conversion</h3>
          <p>Convert your text into speech and listen to it, making multitasking easier and improving accessibility.</p>
        </div>
      </div>
    </div>
  );
}
