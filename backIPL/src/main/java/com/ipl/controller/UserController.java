package com.ipl.controller;
import static com.mongodb.client.model.Filters.*;

import java.util.ArrayList;
import java.util.List;

import org.bson.Document;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ipl.model.User;
import com.ipl.utility.DbUtlity;
import com.mongodb.BasicDBObject;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
	static MongoDatabase mD=DbUtlity.getConnection();
	static MongoCollection<Document> collection =	mD.getCollection("IplUsers");
	
	@PostMapping("/register")
	public static ResponseEntity<String> registerUser(@RequestBody User user) {
//		System.out.println(user.toString());
		try {
			user.setPassword(user.getPassword().toLowerCase());
			user.setUsername(user.getUsername().toLowerCase());
			if(user.getPassword()==null|| user.getPassword()=="" || user.getUsername()==null || user.getUsername()=="") {
				throw new Exception("Invalid Entry");
			}
			MongoCursor<Document> m= collection.find(eq("user.username",user.getUsername())).cursor();
			if(m.hasNext()) {
				throw new Exception("Username Taken!!!");
			}
			Document d=new Document();
			d.put("user",user);
			collection.insertOne(d);
			return new ResponseEntity<>("Success", HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
		}
		
	}
//	@GetMapping("/getusers")
//	private List<Object> getUsers(){
//		MongoCursor<Document> m=collection.find().cursor();
//		List<Object> li=new ArrayList<>();
//		while(m.hasNext()) {
//			Object o=m.next().get("user");
//			li.add(o);
//		}
//		return li;
//	}
	@PostMapping("/signin")
	private ResponseEntity<User> loginUser(@RequestBody String credentials) {
		BasicDBObject o=BasicDBObject.parse(credentials);
		String username = o.getString("username");
		String password = o.getString("password");
//		System.out.println(username+" "+password);
		try {
		MongoCursor<Document> m=collection.find(and(eq("user.username",username),eq("user.password",password))).cursor();
		if(m.hasNext()) {
//			System.out.println("entered");
			Document db= (Document) m.next().get("user");
			User u=new User(db.getString("username"),db.getString("password"),db.getString("type"));
			
			return new ResponseEntity<>(u, HttpStatus.OK);
		}
		else {
			throw new Exception("Invalid Entry");
		}}
		catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
	}
	
	
}
