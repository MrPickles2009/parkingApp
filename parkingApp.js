//JMU Parking App
let resident = [,Mon-Thu,Fri,Sat-Sun
R1 Lot,24 hrs/day,24 hrs/day,24 hrs/day
R2 Lot,24 hrs/day,24 hrs/day,24 hrs/day
R3 Lot,24 hrs/day,24 hrs/day,24 hrs/day
R4 Lot,24 hrs/day,24 hrs/day,24 hrs/day
R5 Lot,24 hrs/day,24 hrs/day,24 hrs/day
R7 Lot,24 hrs/day,24 hrs/day,24 hrs/day
R8 Lot,24 hrs/day,24 hrs/day,24 hrs/day
R9 Lot,24 hrs/day,24 hrs/day,24 hrs/day
R10 Lot,24 hrs/day,24 hrs/day,24 hrs/day
R11 Lot,24 hrs/day,24 hrs/day,24 hrs/day
R12 Lot,24 hrs/day,24 hrs/day,24 hrs/day
R13 Lot,24 hrs/day,24 hrs/day,24 hrs/day
R14 Lot,24 hrs/day,24 hrs/day,24 hrs/day
];

let commuter = [,Mon-Thu,Fri,Sat-Sun
C1 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C2 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C3 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C4 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C6 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C7 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C8 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C9 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C10 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C11 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C12 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C13 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C14 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C15 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C16 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C17 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C18 Lot,24 hrs/day,24 hrs/day,24 hrs/day
C19 Lot,24 hrs/day,24 hrs/day,24 hrs/day
Champions Drive Deck Level 2,24 hrs/day,24 hrs/day,24 hrs/day
Champions Drive Deck Level 3,24 hrs/day,24 hrs/day,24 hrs/day
Champions Drive Deck Level 4,24 hrs/day,24 hrs/day,24 hrs/day
Champions Drive Deck Level 5,24 hrs/day,24 hrs/day,24 hrs/day
Convo A,24 hrs/day,24 hrs/day,24 hrs/day
Convo B/E,24 hrs/day,24 hrs/day,24 hrs/day
Convo D,24 hrs/day,24 hrs/day,24 hrs/day
Convo F,24 hrs/day,24 hrs/day,24 hrs/day
Convo G,24 hrs/day,24 hrs/day,24 hrs/day
Mason Street Deck Commuter,24 hrs/day,24 hrs/day,24 hrs/day
U1 Lot,24 hrs/day,24 hrs/day,24 hrs/day
U2 Lot,24 hrs/day,24 hrs/day,24 hrs/day
U3 Lot,24 hrs/day,24 hrs/day,24 hrs/day
U4 Lot,24 hrs/day,24 hrs/day,24 hrs/day
U5 Lot,24 hrs/day,24 hrs/day,24 hrs/day
Warsaw Ave Deck Level 2 commuter,24 hrs/day,24 hrs/day,24 hrs/day
Warsaw Ave Deck Level 3,24 hrs/day,24 hrs/day,24 hrs/day
Warsaw Ave Deck Level 4,24 hrs/day,24 hrs/day,24 hrs/day
Warsaw Ave Deck Level 5,24 hrs/day,24 hrs/day,24 hrs/day
U5 Lot,24 hrs/day,24 hrs/day,24 hrs/day
Warsaw Ave Deck Level 2 commuter,24 hrs/day,24 hrs/day,24 hrs/day
Warsaw Ave Deck Level 3,24 hrs/day,24 hrs/day,24 hrs/day
Warsaw Ave Deck Level 4,24 hrs/day,24 hrs/day,24 hrs/day
Warsaw Ave Deck Level 5,24 hrs/day,24 hrs/day,24 hrs/day
];

let blue = [,Mon-Thu,Fri,Sat-Sun
1070 Virginia Avenue,24 hrs/day,24 hrs/day,24 hrs/day
220 University Boulevard,24 hrs/day,24 hrs/day,24 hrs/day
380 University Boulevard,24 hrs/day,24 hrs/day,24 hrs/day
Alumni Drive,24 hrs/day,24 hrs/day,24 hrs/day
Champions Drive Deck Level G,24 hrs/day,24 hrs/day,24 hrs/day
Convo C,24 hrs/day,24 hrs/day,24 hrs/day
D2 Lot,24 hrs/day,24 hrs/day,24 hrs/day
D3 Lot,24 hrs/day,24 hrs/day,24 hrs/day
D6 Lot,24 hrs/day,24 hrs/day,24 hrs/day
D8 Lot,24 hrs/day,24 hrs/day,24 hrs/day
E Lot,24 hrs/day,24 hrs/day,24 hrs/day
G Lot,24 hrs/day,24 hrs/day,24 hrs/day
L Lot,24 hrs/day,24 hrs/day,24 hrs/day
P Lot,24 hrs/day,24 hrs/day,24 hrs/day
R4 Lot IIHHS,24 hrs/day,24 hrs/day,24 hrs/day
WMRA Lot,24 hrs/day,24 hrs/day,24 hrs/day
];

let red = [,Mon-Thu,Fri,Sat-Sun
1077 South Main Street,24 hrs/day,24 hrs/day,24 hrs/day
131 West Grace Street,24 hrs/day,24 hrs/day,24 hrs/day
A Lot,24 hrs/day,24 hrs/day,24 hrs/day
B Lot,24 hrs/day,24 hrs/day,24 hrs/day
C6 Lot SADAH,24 hrs/day,24 hrs/day,24 hrs/day
Cantrell Ave Deck Level 2,24 hrs/day,24 hrs/day,24 hrs/day
Cantrell Ave Deck Level 3,24 hrs/day,24 hrs/day,24 hrs/day
Grace Street Deck Level 2,24 hrs/day,24 hrs/day,24 hrs/day
Grace Street Deck Level 3,24 hrs/day,24 hrs/day,24 hrs/day
Grace Street Deck Level 4,24 hrs/day,24 hrs/day,24 hrs/day
Grace Street Deck Level 5,24 hrs/day,24 hrs/day,24 hrs/day
Grace Street Deck Level 6,24 hrs/day,24 hrs/day,24 hrs/day
Grace Street Deck Level 7,24 hrs/day,24 hrs/day,24 hrs/day
I Lot,24 hrs/day,24 hrs/day,24 hrs/day
Ice House Lot,24 hrs/day,24 hrs/day,24 hrs/day
J lot,24 hrs/day,24 hrs/day,24 hrs/day
K Lot,24 hrs/day,24 hrs/day,24 hrs/day
M Lot,24 hrs/day,24 hrs/day,24 hrs/day
Mason Street Deck Faculty/Staff,24 hrs/day,24 hrs/day,24 hrs/day
Memorial Hall,24 hrs/day,24 hrs/day,24 hrs/day
N3 Lot,24 hrs/day,24 hrs/day,24 hrs/day
Q Lot East,24 hrs/day,24 hrs/day,24 hrs/day
Q Lot North,24 hrs/day,24 hrs/day,24 hrs/day
Q Lot West,24 hrs/day,24 hrs/day,24 hrs/day
R8 Lot Faculty/Staff,24 hrs/day,24 hrs/day,24 hrs/day
S Lot,24 hrs/day,24 hrs/day,24 hrs/day
T Lot,24 hrs/day,24 hrs/day,24 hrs/day
V Lot,24 hrs/day,24 hrs/day,24 hrs/day
W Lot,24 hrs/day,24 hrs/day,24 hrs/day
Warsaw Ave Deck Level 2 faculty/staff,24 hrs/day,24 hrs/day,24 hrs/day
Warsaw Ave Deck Level G,24 hrs/day,24 hrs/day,24 hrs/day
X Lot,24 hrs/day,24 hrs/day,24 hrs/day
Y Lot,24 hrs/day,24 hrs/day,24 hrs/day
Z Lot,24 hrs/day,24 hrs/day,24 hrs/day
];

let visitor = console.log('Parking Services provides visitors with parking permits at no charge during our normal business hours (7:00 AM - 5:00 PM Monday through Friday). Visitors who arrive at times other than those specified above should park in R1, R2, or R4 Lots and obtain a permit from Parking Services as soon as possible. (If a visitor receives a citation in the specified lots, they should contact Parking Services during business hours.) Visitors are not required to display permits after 3:00 PM on Friday through 7:00 AM Monday and may park in Commuter and Resident lots.')
