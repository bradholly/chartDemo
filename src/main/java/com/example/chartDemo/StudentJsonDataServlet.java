package com.example.chartDemo;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
public class StudentJsonDataServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@RequestMapping("/StudentJsonDataServlet")
	public String student() {

		List<Student> listOfStudent = getStudentData();

		Gson gson = new Gson();

		String jsonString = gson.toJson(listOfStudent);

		return jsonString;
	}

	private List<Student> getStudentData() {

		List<Student> listOfStudent = new ArrayList<Student>();
		Student s1 = new Student();
		s1.setName("Sandeep");
		s1.setComputerMark(75);
		s1.setMathematicsMark(26);
		s1.setGeographyMark(91);
		s1.setHistoryMark(55);
		s1.setLitratureMark(36);
		listOfStudent.add(s1);

		return listOfStudent;
	}
}