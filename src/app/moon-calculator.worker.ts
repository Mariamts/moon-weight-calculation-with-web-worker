self.addEventListener('message', (event) => {
    const userWeight = event.data;
  
    const moonGravity = 1.625;
    const earthGravity = 9.81;
  
    const moonWeight = (userWeight / earthGravity) * moonGravity;
  
    self.postMessage(moonWeight);
});
  