package com.lab.DiaryAppBE.diary.entity;

import com.lab.DiaryAppBE.diary.dto.DiaryDTO;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Diary {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;

    @Column (name = "content")
    private String content;

    @Column (name = "emotion_id")
    private int emotionId;

    @Column (name = "date")
    private String date;

    public Diary (DiaryDTO diaryDTO) {
        this.content = diaryDTO.getContent();
        this.emotionId = diaryDTO.getEmotionId();
        this.date = diaryDTO.getDate();
    }
}
