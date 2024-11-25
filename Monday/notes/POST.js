async function sendPost(){
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data)
        })

        let data = await response.json()
        console.log(data)
    } catch (error) {
        
    }
}

// async function postData(url = '', data = {}) {
//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const result = await response.json();
//         console.log('Success:', result);
//         return result;
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// }

// // Example usage:
// postData('https://example.com/api/data', {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
// });

// async function updateData(url = '', data = {}) {
//     try {
//         const response = await fetch(url, {
//             method: 'PUT', // Specify PUT method
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data), // Convert data to JSON
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const result = await response.json();
//         console.log('Data successfully updated:', result);
//         return result;
//     } catch (error) {
//         console.error('Error updating data:', error.message);
//     }
// }

// // Example usage:
// updateData('https://example.com/api/data/1', {
//     name: 'Jane Doe',
//     email: 'jane.doe@example.com',
// });
