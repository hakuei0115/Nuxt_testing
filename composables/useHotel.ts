export const useHotel = () => {
    const roomList = ref([]);
    const roomDetail = ref({});

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

    const getRoomDetail = async (id: string) => {
        fetch(`https://nuxr3.zeabur.app/api/v1/rooms/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            roomDetail.value = data.result;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return { roomList, roomDetail, getRoom, getRoomDetail }
}