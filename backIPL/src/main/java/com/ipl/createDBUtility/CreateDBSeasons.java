package com.ipl.createDBUtility;

import java.util.ArrayList;
import java.util.List;

import org.bson.Document;

import com.ipl.model.MatchInfo;
import com.ipl.model.Seasons;
import com.ipl.utility.DbUtlity;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class CreateDBSeasons {
	
	public static void createSeasons(List<Seasons> seasons)
	{
		
		for(int i=0;i<seasons.size();i++) {
			Seasons s=seasons.get(i);
			Document doc=new Document();
			doc.put("season",s);
//			doc.put("id",s.getId());
//			doc.put("season",s.getSeason());
//			List<MatchInfo> mI=s.getMatchInfo();
//			List<Document> lD=new ArrayList<>();
//			for(int j=0;j<mI.size();j++) {
//				Document matchDoc=new Document();
//				MatchInfo matchInfo=mI.get(j);
//				matchDoc.put("id",matchInfo.getId());
//				matchDoc.put("city",matchInfo.getCity());
//				matchDoc.put("date",matchInfo.getDate());
//				matchDoc.put("dl_applied",matchInfo.getDlApplied());
//				matchDoc.put("player_of_match",matchInfo.getPlayerOfMatch());
//				matchDoc.put("result",matchInfo.getResult());
//				matchDoc.put("team1",matchInfo.getTeam1());
//				matchDoc.put("team2",matchInfo.getTeam2());
//				matchDoc.put("toss_decision",matchInfo.getTossDecision());
//				matchDoc.put("toss_winner",matchInfo.getTossWinner());
//				matchDoc.put("umpire1",matchInfo.getUmpire1());
//				matchDoc.put("umpire2",matchInfo.getUmpire2());
//				matchDoc.put("umpire3",matchInfo.getUmpire3());
//				matchDoc.put("venue",matchInfo.getVenue());
//				matchDoc.put("win_by_runs",matchInfo.getWinByRuns());
//				matchDoc.put("win_by_wickets",matchInfo.getWinByWickets());
//				matchDoc.put("winner",matchInfo.getWinner());
//				lD.add(matchDoc);
//				}
//			doc.put("matches",lD);
//			Document d=new Document();
//			d.put("seasons",doc);
			MongoDatabase mongoDatabase=DbUtlity.getConnection();			
			//---------- Creating Collection -------------------------//  
			MongoCollection<Document> table = mongoDatabase.getCollection("Seasons");  
			table.insertOne(doc);
			System.out.println("Inserted Record" +i);
		}
		
	}
}
