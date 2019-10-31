package com.ipl.model;

import java.util.List;

import javax.annotation.Generated;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonProperty;



public class Seasons {
	

	@Override
	public String toString() {
		return "Seasons [ id=" + id + ", season=" + season + ", matchInfo=" + matchInfo + "]";
	}
//	@Id
//	@JsonProperty("_Id")
//    private ObjectId _Id;
	
	@JsonProperty
	private String id;
	
//    public ObjectId get_Id() {
//		return _Id;
//	}
//	public void set_Id(ObjectId _Id) {
//		this._Id = _Id;
//	}
	public void setId(String id) {
		this.id = id;
	}
	@JsonProperty("season")
    private String season;
    @JsonProperty("match")
	private List<MatchInfo> matchInfo;

	public String getSeason() {
		return season;
	}
	public void setSeason(String season) {
		this.season = season;
	}
	public List<MatchInfo> getMatchInfo() {
		return matchInfo;
	}
	public void setMatchInfo(List<MatchInfo> matchInfo) {
		this.matchInfo = matchInfo;
	}
    
}
