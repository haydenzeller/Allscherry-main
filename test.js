

// URL of the REST API endpoint
const apiUrl = 'http://146.190.248.123:8055/items/products';

// Function to fetch data with error handling
async function fetchDataWithErrors() {
  try {
    const response = await fetch(apiUrl, {
        headers: {
            Authorization: 'Bearer r7OOZyObBBCgVXleoo79W-gkNhs1kqlE'
        },
        method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    if (error.name === 'TypeError') {
      console.error('Network error or invalid URL');
    } else {
      console.error('API responded with an error:', error);
    }
  }
}

// Call the function to fetch data with error handling
fetchDataWithErrors();
