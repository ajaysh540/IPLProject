package com.ipl.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.bson.Document;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ipl.model.Seasons;
import com.ipl.utility.DbUtlity;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SeasonController {
	
	@GetMapping("/seasons")
	public List<Object> getAllSeasons(){
		
		MongoDatabase mD=DbUtlity.getConnection();
		MongoCollection<Document> collection =	mD.getCollection("SeasonsData");
		FindIterable<Document> it=collection.find();
		MongoCursor< Document> cursor=it.cursor();
		List<Object > li=new ArrayList<>();
		while(cursor.hasNext()) {
			li.add(cursor.next().get("season"));
		}
		return li;
	}
	
	

	public List<Seasons> getSeasons() {
		MongoDatabase mD=DbUtlity.getConnection();
		MongoCollection<Document> collection =	mD.getCollection("SeasonRecords");
		FindIterable<Document> i=collection.find();
		ObjectMapper mapper=new ObjectMapper();
		List<Seasons> l=new ArrayList<Seasons>();
		for(Document d:i) {
			try {
			String s=(String)d.get(d.keySet().toArray()[1]);
			Seasons s1=mapper.readValue(s, Seasons.class);
//			s1.set_Id(new ObjectId());
			System.out.println(s1.toString());
			l.add(s1);
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		}
//		CreateDBSeasons.createSeasons(l);
		return l;
	}	
}
