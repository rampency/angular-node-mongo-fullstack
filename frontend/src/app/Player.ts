export interface Player {
  player_id: number;
  codename: string;
  team: number;
  activity: Array<Activity>;
  sum?:number;
}

export interface Activity {
  codename: string;
  points: number;
}
