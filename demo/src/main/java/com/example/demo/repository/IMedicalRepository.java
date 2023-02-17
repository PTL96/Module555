package com.example.demo.repository;

import com.example.demo.model.Medical;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IMedicalRepository extends JpaRepository<Medical, Integer> {
    @Query(value = "select * from medical", nativeQuery = true)
    List<Medical> allList();

   @Transactional
    @Modifying
    @Query(value ="DELETE FROM medical WHERE id =:id", nativeQuery = true)
    void deleteMedical(@Param("id") Integer id);

}
