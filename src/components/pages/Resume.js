import React from 'react';

export default function Resume() {
  return (
    <div className='page-container'>
      <div className='page-card'>
        <button onClick={() => {
            const site = window.location.href;
            const url = site.split('#')[0]+'/resume.pdf';
            fetch(url)
            .then((response) => {
                response.blob().then(blob => {
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'SamplePDF.pdf';
                    alink.click();
                })}) 
        
            }}>Download Resume</button>
      </div>
    </div>
  );
}
