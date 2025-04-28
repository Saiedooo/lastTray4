import axios from 'axios';

export interface Specialty {
  _id: string;
  name: string;
  description?: string;
  personalPhoto?: string;
  __v?: number;
}

export const getSpecialties = async (): Promise<Specialty[]> => {
  try {
    console.log('Making request to fetch specialties...');
    const response = await axios.get('/api/v1/specialties');
    console.log('Raw specialties response:', response);

    if (!response.data) {
      console.error('No data received from specialties endpoint');
      return [];
    }

    // The API returns the array directly, not wrapped in a data property
    if (Array.isArray(response.data)) {
      console.log('Specialties found:', response.data.length);
      return response.data;
    }

    console.error('Invalid response format:', response.data);
    return [];
  } catch (error: any) {
    console.error('Error fetching specialties:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    throw error;
  }
};
