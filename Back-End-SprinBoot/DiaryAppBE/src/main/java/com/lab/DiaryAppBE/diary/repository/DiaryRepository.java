package com.lab.DiaryAppBE.diary.repository;

import com.lab.DiaryAppBE.diary.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryRepository extends JpaRepository<Diary, Long> {
}
