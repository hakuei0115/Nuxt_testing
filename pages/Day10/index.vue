<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()
    const { roomList, getRoom } = useHotel()

    definePageMeta({
        layout: false
    })

    // 在掛載時調用 API 取得房型列表
    
    getRoom();

    function goToRoomDetail(id) {
        router.push(`/Day10/${id}`)
    }
</script>

<template>
    <h1>房型列表頁面</h1>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-8 col-md-6 col-lg-3" v-for="room in roomList" :key="room._id">
                <div class="card h-100 shadow-sm" @click="goToRoomDetail(room._id)">
                    <img :src="room.imageUrl" class="card-img-top" alt="Room Image" />
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">{{ room.name }}</h3>
                        <p class="card-text flex-grow-1">{{ room.description }}</p>
                        <ul class="list-unstyled">
                            <li><strong>面積:</strong> {{ room.areaInfo }}</li>
                            <li><strong>床型:</strong> {{ room.bedInfo }}</li>
                            <li><strong>最大容納人數:</strong> {{ room.maxPeople }}</li>
                            <li><strong>價格:</strong> {{ room.price }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-img-top {
    object-fit: cover;
    height: 200px;
    max-width: 100%;
}
</style>
