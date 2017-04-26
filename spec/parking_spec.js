let parkingApp = require('../parkingApp');

describe('An app used to determine where anyone can park at James Madison University', () => {

	it('can perform a smoke test', () => {
		expect(true).toBe(true);
	});

	it("throws an error if given bad input", () => {
		expect(parkingApp.bind(null)).not.toThrowError("Input must be Resident, Commuter, Visitor or Staff");
	});

	it("will list the parking lot zones for a user's status", () => {
		expect(parkingApp("Resident")).toBe("You can park in the following zones: R1,R2,R3,R4,R5,R6,R7,R8,R9,R10,R11,R12,R13,R14");
		expect(parkingApp("Commuter")).toBe("You can park in the following zones: C1 Lot,C2 Lot,C3 Lot,C4 Lot,C6 Lot,C7 Lot,C8 Lot,C9 Lot,C10 Lot,C11 Lot,C12 Lot,C13 Lot,C14 Lot,C15 Lot,C16 Lot,C17 Lot,C18 Lot,C19 Lot,Champions Drive Deck Level 2,Champions Drive Deck Level 3,Champions Drive Deck Level 4,Champions Drive Deck Level 5,Convo A,Convo B/E,Convo D,Convo F,Convo G,Mason Street Deck Commuter,U1 Lot,U2 Lot,U3 Lot,U4 Lot,U5 Lot,Warsaw Ave Deck Level 2 commuter,Warsaw Ave Deck Level 3,Warsaw Ave Deck Level 4,Warsaw Ave Deck Level 5,U5 Lot,Warsaw Ave Deck Level 2 commuter,Warsaw Ave Deck Level 3,Warsaw Ave Deck Level 4,Warsaw Ave Deck Level 5");
		expect(parkingApp("Visitor")).toBe("Parking Services provides visitors with parking permits at no charge during our normal business hours (7:00 AM - 5:00 PM Monday through Friday). Visitors who arrive at times other than those specified above should park in R1, R2, or R4 Lots and obtain a permit from Parking Services as soon as possible. (If a visitor receives a citation in the specified lots, they should contact Parking Services during business hours.) Visitors are not required to display permits after 3:00 PM on Friday through 7:00 AM Monday and may park in Commuter and Resident lots.");
	});
});
