package com.lab.DiaryAppBE;

import com.lab.DiaryAppBE.diary.entity.Diary;
import com.lab.DiaryAppBE.diary.repository.DiaryRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@SpringBootTest
class DiaryAppBeApplicationTests {

	@Test
	void contextLoads() {

	}

	@Autowired
	private DiaryRepository diaryRepository;

	@Test
	void testJpa() {

		Diary d1 = new Diary();
		d1.setContent("내용 1");
		d1.setDate(Timestamp.valueOf(LocalDateTime.now()));
		d1.setEmotionId(1);
		this.diaryRepository.save(d1);

		Diary d2 = new Diary();
		d2.setContent("내용 2");
		d2.setDate(Timestamp.valueOf(LocalDateTime.now()));
		d2.setEmotionId(2);
		this.diaryRepository.save(d2);

		Diary d3 = new Diary();
		d3.setContent("내용 3");
		d3.setDate(Timestamp.valueOf(LocalDateTime.now()));
		d3.setEmotionId(3);
		this.diaryRepository.save(d3);

		Diary d4 = new Diary();
		d4.setContent("내용 4");
		d4.setDate(Timestamp.valueOf(LocalDateTime.now()));
		d4.setEmotionId(4);
		this.diaryRepository.save(d4);

		Diary d5 = new Diary();
		d5.setContent("내용 5");
		d5.setDate(Timestamp.valueOf(LocalDateTime.now()));
		d5.setEmotionId(5);
		this.diaryRepository.save(d5);


		}

	}



