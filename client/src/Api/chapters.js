import { apiurl } from ".";
import { getAuthToken } from "./journeys";


const token = getAuthToken();

  export const getChaptersByJourneyId = async(journeyId)=>{
    try {
        const response = await fetch(`${apiurl}/journeys/${journeyId}/chapters`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json' 
            },
          });
        const data = await response.json();
        return data
      } catch (error) {
        console.error('Error fetching chapters:', error);
      }
};
  