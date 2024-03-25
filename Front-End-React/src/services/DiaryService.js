import axios from "axios";

const DIARY_BASE_REST_API_URL = "http://localhost:9494/diary"
class DiaryService {

    getAllDiary() {
        return axios.get(DIARY_BASE_REST_API_URL);
    }

    createDiary(diary) {
        return axios.post(DIARY_BASE_REST_API_URL, diary);
    }

    getDiaryById(diaryId) {
        return axios.get(DIARY_BASE_REST_API_URL + '/' + diaryId);
    }

    updateDiary(diary) {
        return axios.put(DIARY_BASE_REST_API_URL, diary);
    }

    deleteDiary(diaryId) {
        return axios.delete(DIARY_BASE_REST_API_URL + '/' + diaryId);
    }
}

export default new DiaryService();