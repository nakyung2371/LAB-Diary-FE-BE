package com.lab.DiaryAppBE.diary.dto;

import com.lab.DiaryAppBE.diary.entity.Diary;
import lombok.*;
import org.modelmapper.ModelMapper;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@Setter
@Data
@NoArgsConstructor
public class DiaryDTO {

    private long id;

    private String content;

    private int emotionId;

    private String date;

    private static ModelMapper modelMapper = new ModelMapper();

    public Diary createDiary() {
        return modelMapper.map(this, Diary.class);
    }

    public static DiaryDTO of(Diary diary) { return modelMapper.map(diary, DiaryDTO.class);}
}
