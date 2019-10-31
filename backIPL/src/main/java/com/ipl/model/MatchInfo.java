package com.ipl.model;

import com.fasterxml.jackson.annotation.JsonProperty;



public class MatchInfo {
	
	@JsonProperty("id")
	private String id;
	
	@JsonProperty("city")
	private String city;
	
	@JsonProperty("date")
	private String date;
	
	@JsonProperty("team1")
	private String team1;
	
	@JsonProperty("team2")
	private String team2;
	
	@JsonProperty("toss_winner")
	private String tossWinner;
	
	@JsonProperty("toss_decision")
	private String tossDecision;
	
	@JsonProperty("result")
	private String result;
	
	@JsonProperty("dl_applied")
	private String dlApplied;
	
	@JsonProperty("winner")
	private String winner;
	
	@JsonProperty("win_by_runs")
	private String winByRuns;
	
	@JsonProperty("win_by_wickets")
	private String winByWickets;
	
	@JsonProperty("player_of_match")
	private String playerOfMatch;
	
	@JsonProperty("venue")
	private String venue;
	
	@JsonProperty("umpire1")
	private String umpire1;
	
	@Override
	public String toString() {
		return "MatchInfo [id=" + id + ", city=" + city + ", date=" + date + ", team1=" + team1 + ", team2=" + team2
				+ ", tossWinner=" + tossWinner + ", tossDecision=" + tossDecision + ", result=" + result
				+ ", dlApplied=" + dlApplied + ", winner=" + winner + ", winByRuns=" + winByRuns + ", winByWickets="
				+ winByWickets + ", playerOfMatch=" + playerOfMatch + ", venue=" + venue + ", umpire1=" + umpire1
				+ ", umpire2=" + umpire2 + ", umpire3=" + umpire3 + "]";
	}

	@JsonProperty("umpire2")
	private String umpire2;
	
	@JsonProperty("umpire3")
	private String umpire3;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTeam1() {
		return team1;
	}

	public void setTeam1(String team1) {
		this.team1 = team1;
	}

	public String getTeam2() {
		return team2;
	}

	public void setTeam2(String team2) {
		this.team2 = team2;
	}

	public String getTossWinner() {
		return tossWinner;
	}

	public void setTossWinner(String tossWinner) {
		this.tossWinner = tossWinner;
	}

	public String getTossDecision() {
		return tossDecision;
	}

	public void setTossDecision(String tossDecision) {
		this.tossDecision = tossDecision;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public String getDlApplied() {
		return dlApplied;
	}

	public void setDlApplied(String dlApplied) {
		this.dlApplied = dlApplied;
	}

	public String getWinner() {
		return winner;
	}

	public void setWinner(String winner) {
		this.winner = winner;
	}

	public String getWinByRuns() {
		return winByRuns;
	}

	public void setWinByRuns(String winByRuns) {
		this.winByRuns = winByRuns;
	}

	public String getWinByWickets() {
		return winByWickets;
	}

	public void setWinByWickets(String winByWickets) {
		this.winByWickets = winByWickets;
	}

	public String getPlayerOfMatch() {
		return playerOfMatch;
	}

	public void setPlayerOfMatch(String playerOfMatch) {
		this.playerOfMatch = playerOfMatch;
	}

	public String getVenue() {
		return venue;
	}

	public void setVenue(String venue) {
		this.venue = venue;
	}

	public String getUmpire1() {
		return umpire1;
	}

	public void setUmpire1(String umpire1) {
		this.umpire1 = umpire1;
	}

	public String getUmpire2() {
		return umpire2;
	}

	public void setUmpire2(String umpire2) {
		this.umpire2 = umpire2;
	}

	public String getUmpire3() {
		return umpire3;
	}

	public void setUmpire3(String umpire3) {
		this.umpire3 = umpire3;
	}
																
	
}
