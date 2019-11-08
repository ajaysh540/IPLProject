package com.ipl.controller;

import static com.mongodb.client.model.Filters.eq;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.bson.Document;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ipl.utility.DbUtlity;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SeasonController {
	MongoDatabase mD=DbUtlity.getConnection();
	MongoCollection<Document> collection =	mD.getCollection("SeasonsData");
	@GetMapping("/seasons")
	public List<Object> getAllSeasons(){
		
		FindIterable<Document> it=collection.find();
		MongoCursor< Document> cursor=it.cursor();
		List<Object > li=new ArrayList<>();
		while(cursor.hasNext()) {
			li.add(cursor.next().get("season"));
		}
		return li;
	}
	
	
	@GetMapping("/season/{season}")
	public Object[] getBySeason(@PathVariable String season){
		
		MongoCursor<Document> cursor=collection.find(eq("season.season",season)).cursor();
		List<Object > li=new ArrayList<>();
//		Object[] o=null;
		while(cursor.hasNext()) {
			li.add(cursor.next().get("season"));
		}
		return li.toArray();
	}
	
	@GetMapping("/getseasons")
	public List<String> getSeasons() {
		
		MongoCursor<Document> cursor=collection.find().cursor();
		List<String> li=new ArrayList<>();
		while(cursor.hasNext()) {
			Document d=(Document) cursor.next().get("season");
//			System.out.println(d.get("season"));
			li.add((String) d.get("season"));
		}
		Collections.sort(li);
		return li;
	}

}
