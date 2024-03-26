package com.lab.DiaryAppBE.diary.controller;

import com.lab.DiaryAppBE.DiaryAppBeApplication;
import com.lab.DiaryAppBE.diary.dto.DiaryDTO;
import com.lab.DiaryAppBE.diary.entity.Diary;
import com.lab.DiaryAppBE.diary.repository.DiaryRepository;
import com.lab.DiaryAppBE.diary.service.DiaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")       //개발 시 cros 모두 허용: API
@RestController         //Rest API 통신: @RestController + @Controller
//@RequestMapping("/diary")       //@RequestMapping 하위 요청에 상속됨
@RequiredArgsConstructor
public class DiaryController {

    private final DiaryRepository diaryRepository;
    private final DiaryService diaryService;

    //다이어리 글 등록
    @PostMapping("/diary")
    public Diary createDiary(@RequestBody DiaryDTO diaryDTO) {
        System.out.println("diaryDTO");
        System.out.println(diaryDTO);
        return diaryService.createDiary(diaryDTO);
    }

    //다이어리 내용 출력 http://localhost:9494/diary
    @GetMapping("/diary")
    public ResponseEntity<List<DiaryDTO>> getDiaryAll() {

        System.out.println("get 요청 성공 ::::");
        List<DiaryDTO> diaryList = diaryService.getDiaryList();
        return new ResponseEntity<>(diaryList, HttpStatus.OK);
    }

    //다이어리 글 수정
    @PutMapping("/diary/{id}")
    public ResponseEntity diaryUpdate(
            @PathVariable("id") long id,
            @RequestBody DiaryDTO diaryDTO) {

        diaryService.updateDiary(id, diaryDTO);

        return ResponseEntity.ok(diaryDTO);
    }

    //다이어리 글 삭제
    @DeleteMapping("/diary/{id}")
    public ResponseEntity<String> deleteDiary(@PathVariable long id) {
        diaryService.deleteDiary(id);
        return new ResponseEntity<>("삭제 성공", HttpStatus.OK);
    }

}
