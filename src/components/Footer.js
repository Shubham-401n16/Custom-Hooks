import React from 'react';
export default function Footer() {
  return (
    <footer>
      <div id="external-account">
        <h1>Shubham Majumdar</h1>
        <a href='https://www.linkedin.com/in/majumdar-shubham' target='_blank'>
          <img src={'/assets/linkedin.jpg'} alt={'LinkedIn'} />
        </a>
        <a href='https://github.com/smajumdar22' target='_blank'>
          <img src={'/assets/github.png'} alt={'GitHub'} />
        </a>
      </div>
    </footer>
  )
}