export function handleResize(callback) {
    const handleResize = () => {
      callback(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
    handleResize();
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
  