package com.ipl.utility;

import org.bson.codecs.configuration.CodecRegistry;
import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;
import org.bson.codecs.pojo.PojoCodecProvider;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoDatabase;  

public class DbUtlity {
	
	
	public static MongoDatabase getConnection() {
		CodecRegistry pojoCodecRegistry = fromRegistries(MongoClient.getDefaultCodecRegistry(),
                fromProviders(PojoCodecProvider.builder().automatic(true).build()));
		MongoClient mongoClient=null;
		MongoDatabase mongoDatabase=null;
		try{  
			mongoClient = new MongoClient( "localhost" , 27017 );  
			mongoDatabase = mongoClient.getDatabase("indianPremierLeague").withCodecRegistry(pojoCodecRegistry); 
			System.out.println("Connection Opend");
			}catch(Exception e){  
			System.out.println(e);  
			} 
		
		return mongoDatabase;
			  
	}

}
