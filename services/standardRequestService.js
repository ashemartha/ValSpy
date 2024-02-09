
export const getAgents = async () => {
    const response = await fetch('https://valorant-api.com/v1/agents');
    const data = await response.json();
  
    if (response.ok) {
      return data.data;
    } else {
      throw new Error(data.status);
    }
  };