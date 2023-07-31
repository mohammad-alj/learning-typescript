class Ride {
	private static activeRides: number = 0;

	start() {
		Ride.activeRides++;
	}

	stop() {
		Ride.activeRides--;
	}

	get activeRides(): number {
		return Ride.activeRides;
	}
}
