export const useHome = () => {
  const newList = ref([]);
  const isLoading = ref(false);

  const getNewList = async () => {
    isLoading.value = true;
    fetch('https://nuxr3.zeabur.app/api/v1/home/news/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      newList.value = data.result;
      isLoading.value = false;
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    .finally(() => {
      isLoading.value = false;
    })
  };

  return {
    newList,
    isLoading,
    getNewList,
  };
};
