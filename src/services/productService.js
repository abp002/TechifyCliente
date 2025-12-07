const API_BASE_URL = 'http://localhost:8000/api';

export const getSmartphones = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/smartphones`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching smartphones:', error);
        throw error;
    }
};
