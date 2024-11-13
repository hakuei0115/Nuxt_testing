export const useHotel = () => {
    const roomList = ref([]);

    const getRoom = async () => {
        fetch('https://nuxr3.zeabur.app/api/v1/rooms', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            roomList.value = data.result;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return { roomList, getRoom }
}