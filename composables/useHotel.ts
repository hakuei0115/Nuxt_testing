type id = string;

interface Info {
    title: string;
    isProvide: boolean;
}

interface RoomDetail {
    _id: string; // 房間唯一識別碼
    name: string; // 房間名稱
    description: string; // 房間描述
    imageUrl: string; // 房間主圖片
    imageUrlList: string[]; // 房間其他圖片列表
    areaInfo: string; // 房間面積資訊
    bedInfo: string; // 床型資訊
    maxPeople: number; // 最大容納人數
    price: number; // 價格
    status: number; // 房間狀態（1 表示可用等）
    layoutInfo: Info[]; // 房間布局資訊
    facilityInfo: Info[]; // 房間內設施
    amenityInfo: Info[]; // 房間內附加設施
    createdAt: string; // 房間創建時間
    updatedAt: string; // 房間更新時間
}

interface RoomData {
    result: RoomDetail[];
}

interface ApiRoomDetail {
    status: boolean; // 表示請求是否成功
    result: RoomDetail; // 房間的詳細資訊
}

export const useHotel = () => {
    const roomList = ref<RoomDetail[]>([]);
    const roomDetail = ref<RoomDetail | null>({
        _id: '',
        name: '',
        description: '',
        imageUrl: '',
        imageUrlList: [],
        areaInfo: '',
        bedInfo: '',
        maxPeople: 0,
        price: 0,
        status: 0,
        layoutInfo: [],
        facilityInfo: [],
        amenityInfo: [],
        createdAt: '',
        updatedAt: '',
    });
    
    const getRoom = async () => {
        try {
            const { data, error } = await useAsyncData<RoomData>(
                'getRoom',
                () =>
                    $fetch('https://nuxr3.zeabur.app/api/v1/rooms', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }),
            );

            if (data.value) {
                roomList.value = data.value.result;
            } else {
                console.error('While fetch except error: ', error.value);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getRoomDetail = async (id: id) => {
        try {
            const { data, error } = await useAsyncData<ApiRoomDetail>(
                'getRoomDetail',
                () =>
                    $fetch<ApiRoomDetail>(`https://nuxr3.zeabur.app/api/v1/rooms/${id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
            );
    
            // data.value 是 ApiRoomDetail
            if (data.value) {
                roomDetail.value = data.value.result; // 提取 result 作為 RoomDetail
            } else {
                console.error('While fetching, exception occurred:', error.value);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return { roomList, roomDetail, getRoom, getRoomDetail }
}