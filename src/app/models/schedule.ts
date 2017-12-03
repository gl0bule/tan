interface Schedule {
    arret : CodeStop;
    prochainsParcours: Array<Route>;
    ligne: Line;
    codeCouleur: string;
    plageDeService: string;
    notes: Array<Note>;
    prochainsHoraires: Array<StopSchedule>;
    horaires: Array<StopSchedule>;
}