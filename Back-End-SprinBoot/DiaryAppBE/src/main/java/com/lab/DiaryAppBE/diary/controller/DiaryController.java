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

    // CRUD REST 통신 처리 블락
    // get : 다이어리 글의 전체 리스트 정보  : /diary
    // http://localhost:9494/diary

    // get : 다이어리 글의 정보 : /api/diary/{id}
    //http://localhost:9494/diary/1

    // post : 다이어리 글을 등록 : /api/diary
    // http://localhost:9494/diary?firstName=감찬&lastName=강&emailId=aaa@aaa.com?!??

    // put : 다이어리 글를 수정 : /api/diary/{id}
    //http://localhost:9494/diary/1?firstName=대왕&lastName=세종&emailId=bbb@bbb.com?!??

    // delete : 다이어리 글를 삭제 : /diary/{id}
    //http://localhost:9494/diary/2

    private final DiaryRepository diaryRepository;
    private final DiaryService diaryService;

    //다이어리 글 등록
//    @PostMapping("/diary")
//    public ResponseEntity<String> insertDiary(@RequestBody DiaryDTO diaryDTO) {
//        System.out.println(diaryDTO.getId());
//        System.out.println(diaryDTO.getContent());
//        System.out.println(diaryDTO.getEmotionId());
//        System.out.println(diaryDTO.getDate());
//
//        String complate = diaryService.insertDiary(diaryDTO);
//        return new ResponseEntity<>(complate, HttpStatus.OK);
//    }

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
    @PutMapping("/diary")
    public Diary diaryUpdate(@RequestBody Diary diary) {
        System.out.println("diaryDTO");
        System.out.println(diary);
        return diaryService.modiDiary(diary);
    }


    //다이어리 글 삭제
    @DeleteMapping("/diary/{id}")
    public ResponseEntity<String> deleteDiary(@PathVariable long id) {
        diaryService.deleteDiary(id);
        return new ResponseEntity<>("삭제 성공", HttpStatus.OK);
    }

    //다이어리 글 상세 보기
    @GetMapping("/diary/{id}")
    public ResponseEntity getDetail(@PathVariable("id") long id) {
        DiaryDTO diaryDTO = diaryService.getDiaryDetail(id);

        return ResponseEntity.ok(diaryDTO);
    }
}
