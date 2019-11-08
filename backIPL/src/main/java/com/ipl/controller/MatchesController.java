package com.ipl.controller;

import static com.mongodb.client.model.Filters.eq;

import java.util.ArrayList;
import java.util.List;

import org.bson.Document;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ipl.utility.DbUtlity;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MatchesController {
	MongoDatabase mD=DbUtlity.getConnection();
	MongoCollection<Document> collection =	mD.getCollection("MatchData");
	
	@GetMapping("/matches")
	public List<Object> getMatches(){
		
		MongoCursor<Document> cursor=collection.find().cursor();
		List<Object > li=new ArrayList<>();
//		Object[] o=null;
		while(cursor.hasNext()) {
			li.add(cursor.next().get("match"));
		}

		return li;
	}
	
	@GetMapping("/match/{matchId}")
	public List<Object> getMatchByID(@PathVariable String matchId) {
		MongoCursor<Document> cursor=collection.find(eq("match.matchId",matchId)).cursor();
		List<Object > li=new ArrayList<>();
		while(cursor.hasNext()) {
			li.add(cursor.next().get("match"));
		}
		return li;
	}
}
