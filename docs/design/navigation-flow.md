# Navigation Flow — Event Management System

The following diagram represents the complete navigation flow of the Event Management System, including public pages and role-based navigation for Administrator, Event Organizer, and Participant.

## Complete Navigation Flow

```mermaid
flowchart TD

    A[Home Page] --> B[Browse Events]
    A --> C[Login]
    A --> D[Register]
    A --> E[Contact]

    B --> F[Event Details]
    F --> G[Register for Event]
    G --> C

    D --> H[User Registration]
    H --> C

    C --> I{Check User Role}

    %% Administrator Flow
    I -->|Administrator| J[Administrator Dashboard]

    J --> J1[Users]
    J --> J2[Events]
    J --> J3[Participants]
    J --> J4[Registrations]
    J --> J5[Schedules]
    J --> J6[Tickets]
    J --> J7[Attendance]
    J --> J8[Reports]
    J --> J9[Profile]
    J --> J10[Settings]

    J2 --> J21[Create Event]
    J2 --> J22[Update Event]
    J2 --> J23[Delete Event]
    J2 --> J24[View Event Details]

    J4 --> J41[View Registrations]
    J4 --> J42[Approve Registration]
    J4 --> J43[Cancel Registration]

    J5 --> J51[Create Schedule]
    J5 --> J52[Update Schedule]
    J5 --> J53[Delete Schedule]

    J7 --> J71[Record Attendance]
    J7 --> J72[Attendance Reports]

    %% Organizer Flow
    I -->|Event Organizer| K[Organizer Dashboard]

    K --> K1[My Events]
    K --> K2[Create Event]
    K --> K3[Registrations]
    K --> K4[Schedules]
    K --> K5[Attendance]
    K --> K6[Reports]
    K --> K7[Profile]

    K1 --> K11[View Event]
    K1 --> K12[Update Event]
    K1 --> K13[Delete Event]

    K2 --> K21[Enter Event Details]
    K21 --> K22[Set Event Capacity]
    K22 --> K23[Save Event]

    K3 --> K31[View Registrations]
    K3 --> K32[Approve Registration]
    K3 --> K33[Cancel Registration]

    K4 --> K41[Create Schedule]
    K4 --> K42[Update Schedule]
    K4 --> K43[Delete Schedule]

    K5 --> K51[Record Attendance]
    K5 --> K52[View Attendance]

    K6 --> K61[Event Reports]
    K6 --> K62[Attendance Reports]

    %% Participant Flow
    I -->|Participant| L[Participant Dashboard]

    L --> L1[Browse Events]
    L --> L2[My Registrations]
    L --> L3[My Tickets]
    L --> L4[Event Schedule]
    L --> L5[Profile]

    L1 --> L11[View Event Details]
    L11 --> L12[Register for Event]
    L12 --> L13[Registration Confirmation]

    L2 --> L21[View Registration History]
    L2 --> L22[View Registration Status]
    L2 --> L23[Cancel Registration]

    L3 --> L31[View Ticket]
    L3 --> L32[Ticket Details]

    L4 --> L41[View Event Sessions]
    L4 --> L42[View Session Details]