import axios from 'axios';

export interface Specialty {
  _id: string;
  name: string;
}

export const getSpecialties = async (): Promise<Specialty[]> => {
  try {
    const response = await axios.get('api/v1/specialties');
    console.log('Specialties response:', response.data);
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching specialties:', error);
    throw error;
  }
};
