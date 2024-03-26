package com.lab.DiaryAppBE.diary.service;

import com.lab.DiaryAppBE.diary.dto.DiaryDTO;
import com.lab.DiaryAppBE.diary.entity.Diary;
import com.lab.DiaryAppBE.diary.repository.DiaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DiaryService {

    private final DiaryRepository diaryRepository;

    //다이어리 글 등록
    public Diary createDiary(DiaryDTO diaryDTO) {
        Diary diary = new Diary(diaryDTO);

        System.out.println("글 등록 성공");
        return diaryRepository.save(diary);
    }

    //다이어리 글 리스트
    public List<DiaryDTO> getDiaryList() {
        List<DiaryDTO> diaryList = new ArrayList<>();

        List<Diary> diaryListDB = diaryRepository.findAll();

        for (int i = 0; i < diaryListDB.size(); i++) {
            Diary diary = diaryListDB.get(i);
            DiaryDTO diaryDTO = new DiaryDTO();
            diaryDTO = diaryDTO.of(diary);
            diaryList.add(diaryDTO);
        }

        return diaryList;
    }

    //다이어리 글 수정
    public void updateDiary(long id, DiaryDTO diaryDTO) {
        Optional<Diary> op = diaryRepository.findById(id);
        Diary diary = op.get();

        diary.setContent(diaryDTO.getContent());
        diary.setDate(diaryDTO.getDate());
        diary.setEmotionId(diaryDTO.getEmotionId());

        diaryRepository.save(diary);
    }

    //다이어리 삭제
    public void deleteDiary(long id) {
        Optional<Diary> op = diaryRepository.findById(id);
        Diary diary = null;
        try {
            diary = op.get();
        } catch (Exception e) {

        }

        diaryRepository.delete(diary);
        System.out.println("DB에서 삭제 성공");
    }
}
