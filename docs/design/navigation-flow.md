# Navigation Flow — Event Management System

The navigation flow describes how different users move through the Event Management System based on their roles.

## 1. Administrator

```mermaid
graph TD
    Login[Login] --> Dashboard[Dashboard]

    Dashboard --> Events[Events]
    Dashboard --> Users[Users]
    Dashboard --> Venues[Venues]
    Dashboard --> Vendors[Vendors]
    Dashboard --> Bookings[Bookings]
    Dashboard --> Tickets[Tickets]
    Dashboard --> Payments[Payments]
    Dashboard --> Reports[Reports]
    Dashboard --> Notifications[Notifications]
    Dashboard --> Settings[Settings]
    flowchart TD
    A[Login] --> B[Organizer Dashboard]

    B --> C[My Events]
    B --> D[Create Event]
    B --> E[Manage Bookings]
    B --> F[Manage Tickets]
    B --> G[Vendors]
    B --> H[Reports]
    B --> I[Notifications]
    B --> J[Profile]

    C --> C1[View My Events]
    C --> C2[Edit Event]
    C --> C3[View Event Details]
    C --> C4[Cancel Event]

    D --> D1[Enter Event Details]
    D1 --> D2[Select Venue]
    D2 --> D3[Select Vendor]
    D3 --> D4[Set Capacity]
    D4 --> D5[Create Event]

    E --> E1[View Booking Requests]
    E --> E2[Confirm Booking]
    E --> E3[Reject Booking]
    E --> E4[View Participants]

    F --> F1[Create Ticket Type]
    F --> F2[Set Ticket Price]
    F --> F3[Set Ticket Quantity]
    F --> F4[View Available Tickets]

    G --> G1[View Vendors]
    G --> G2[Select Vendor]

    H --> H1[Event Reports]
    H --> H2[Booking Reports]
    H --> H3[Attendance Reports]

    I --> I1[View Notifications]

    J --> J1[View Profile]
    J --> J2[Edit Profile]

    flowchart TD
    A[Login] --> B[Participant Dashboard]

    B --> C[Browse Events]
    B --> D[My Bookings]
    B --> E[My Tickets]
    B --> F[Payments]
    B --> G[Notifications]
    B --> H[Profile]

    C --> C1[Search Events]
    C1 --> C2[Filter by Category]
    C2 --> C3[View Event Details]
    C3 --> C4[Choose Ticket Type]
    C4 --> C5[Select Quantity]
    C5 --> C6[Enter Booking Details]
    C6 --> C7[Submit Booking]

    C7 --> D1[Booking Created]
    D1 --> D2[Payment]
    D2 --> D3[Payment Successful]
    D3 --> E1[Ticket Generated]

    D --> D4[View Booking Details]
    D --> D5[Booking Status]
    D --> D6[Cancel Booking]

    E --> E2[View Ticket]
    E --> E3[Ticket Details]
    E --> E4[Ticket Verification]

    F --> F1[View Payment History]
    F --> F2[View Payment Status]

    G --> G1[View Notifications]
    G1 --> G2[Mark as Read]

    H --> H1[View Profile]
    H --> H2[Edit Profile]

    flowchart TD
    A[Login] --> B[Staff Dashboard]

    B --> C[Event Schedule]
    B --> D[Participant List]
    B --> E[Ticket Verification]
    B --> F[Attendance]
    B --> G[Notifications]
    B --> H[Profile]

    C --> C1[View Assigned Events]
    C1 --> C2[View Event Details]
    C2 --> C3[View Event Time]
    C3 --> C4[View Event Venue]

    D --> D1[View Participants]
    D1 --> D2[Search Participant]
    D2 --> D3[View Participant Details]

    E --> E1[Scan / Enter Ticket]
    E1 --> E2[Check Ticket]
    E2 --> E3{Ticket Valid?}
    E3 -->|Yes| E4[Allow Entry]
    E3 -->|No| E5[Reject Entry]

    F --> F1[Mark Attendance]
    F1 --> F2[View Attendance List]
    F2 --> F3[Update Attendance]

    G --> G1[View Notifications]

    H --> H1[View Profile]
    H --> H2[Edit Profile]

    flowchart TD
    A[Login] --> B[Manager Dashboard]

    B --> C[Events]
    B --> D[Bookings]
    B --> E[Vendors]
    B --> F[Reports]
    B --> G[Analytics]
    B --> H[Notifications]
    B --> I[Profile]

    C --> C1[View All Events]
    C1 --> C2[View Event Details]
    C2 --> C3[Monitor Event Status]
    C3 --> C4[Review Event Performance]

    D --> D1[View All Bookings]
    D1 --> D2[Booking Status]
    D2 --> D3[Confirmed Bookings]
    D2 --> D4[Pending Bookings]
    D2 --> D5[Cancelled Bookings]

    E --> E1[View Vendors]
    E1 --> E2[Vendor Services]
    E2 --> E3[Vendor Contact Details]

    F --> F1[Event Reports]
    F --> F2[Booking Reports]
    F --> F3[Payment Reports]
    F --> F4[Attendance Reports]

    G --> G1[Event Analytics]
    G --> G2[Booking Analytics]
    G --> G3[Revenue Analytics]
    G --> G4[Attendance Analytics]

    H --> H1[View Notifications]

    I --> I1[View Profile]
    I --> I2[Edit Profile]

    flowchart TD
    A[Login] --> B{Select User Role}

    B -->|Administrator| C[Admin Dashboard]
    B -->|Event Organizer| D[Organizer Dashboard]
    B -->|Participant| E[Participant Dashboard]
    B -->|Event Staff / Volunteer| F[Staff Dashboard]
    B -->|Organization Manager| G[Manager Dashboard]

    C --> C1[Users]
    C --> C2[Events]
    C --> C3[Venues]
    C --> C4[Vendors]
    C --> C5[Bookings]
    C --> C6[Tickets]
    C --> C7[Payments]
    C --> C8[Reports]
    C --> C9[Notifications]
    C --> C10[Settings]

    D --> D1[My Events]
    D --> D2[Create Event]
    D --> D3[Manage Bookings]
    D --> D4[Manage Tickets]
    D --> D5[Vendors]
    D --> D6[Reports]
    D --> D7[Notifications]
    D --> D8[Profile]

    E --> E1[Browse Events]
    E --> E2[My Bookings]
    E --> E3[My Tickets]
    E --> E4[Payments]
    E --> E5[Notifications]
    E --> E6[Profile]

    F --> F1[Event Schedule]
    F --> F2[Participant List]
    F --> F3[Ticket Verification]
    F --> F4[Attendance]
    F --> F5[Notifications]
    F --> F6[Profile]

    G --> G1[Events]
    G --> G2[Bookings]
    G --> G3[Vendors]
    G --> G4[Reports]
    G --> G5[Analytics]
    G --> G6[Notifications]
    G --> G7[Profile]

    flowchart TD
    A[Login] --> B[Participant Dashboard]
    B --> C[Browse Events]
    C --> D[Search / Filter Events]
    D --> E[Select Event]
    E --> F[View Event Details]
    F --> G[Choose Ticket Type]
    G --> H[Select Ticket Quantity]
    H --> I[Enter Booking Details]
    I --> J[Submit Booking]
    J --> K[(Bookings Collection)]
    K --> L[Proceed to Payment]
    L --> M[Enter Payment Details]
    M --> N[Process Payment]
    N --> O{Payment Successful?}

    O -->|Yes| P[(Payments Collection)]
    P --> Q[Generate Ticket]
    Q --> R[(Tickets Collection)]
    R --> S[Send Confirmation]
    S --> T[View Ticket in My Tickets]

    O -->|No| U[Payment Failed]
    U --> L