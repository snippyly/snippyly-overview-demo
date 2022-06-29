const loadSnippyly = (callback: Function) => {
    const snippylyScriptTag = document.getElementById('snippylyScript');
    if (!snippylyScriptTag) {
      const script = document.createElement('script');
      // Ensure that you add the latest version of the SDK from: https://www.npmjs.com/package/@snippyly/sdk
      script.src = 'https://cdn.jsdelivr.net/npm/@snippyly/sdk@1.0.33/snippyly.js';
      script.id = 'snippylyScript';
      script.type = 'module';
      document.body.appendChild(script);
      script.onload = () => {
        if (callback) callback();
      };
    } else {
     if (callback) {
       callback(); 
     }
    }
  };
  export default loadSnippyly;