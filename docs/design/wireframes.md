# Wireframes — Event Management System

Low-fidelity layout sketches for the main pages of the Event Management System. The wireframes focus on page structure, navigation, and functionality rather than visual styling.

---

## 1. Login Page

```text
 ┌─────────────────────────────────────┐
 │       EVENT MANAGEMENT SYSTEM       │
 │                                     │
 │          Welcome Back               │
 │                                     │
 │   Email                             │
 │   [____________________________]    │
 │                                     │
 │   Password                          │
 │   [____________________________]    │
 │                                     │
 │          [       Login       ]      │
 │                                     │
 │   Don't have an account? Register   │
 └─────────────────────────────────────┘
```

---

## 2. Registration Page

```text
 ┌─────────────────────────────────────┐
 │       EVENT MANAGEMENT SYSTEM       │
 │                                     │
 │        Create New Account           │
 │                                     │
 │   Name                              │
 │   [____________________________]    │
 │                                     │
 │   Email                             │
 │   [____________________________]    │
 │                                     │
 │   Phone                             │
 │   [____________________________]    │
 │                                     │
 │   Password                          │
 │   [____________________________]    │
 │                                     │
 │          [     Register     ]       │
 │                                     │
 │   Already have an account? Login    │
 └─────────────────────────────────────┘
```

---

## 3. Public Home Page

```text
 ┌────────────────────────────────────────────────────────┐
 │ EVENT MANAGEMENT SYSTEM       Home Events Login Register│
 ├────────────────────────────────────────────────────────┤
 │                                                        │
 │             PLAN • ORGANIZE • MANAGE                  │
 │                                                        │
 │       Manage your events easily in one place.          │
 │                                                        │
 │             [ Browse Events ]                          │
 │                                                        │
 ├────────────────────────────────────────────────────────┤
 │                    Featured Events                     │
 │                                                        │
 │   ┌────────────┐  ┌────────────┐  ┌────────────┐      │
 │   │   Event 1  │  │   Event 2  │  │   Event 3  │      │
 │   │            │  │            │  │            │      │
 │   │  [Details] │  │  [Details] │  │  [Details] │      │
 │   └────────────┘  └────────────┘  └────────────┘      │
 │                                                        │
 └────────────────────────────────────────────────────────┘
```

---

## 4. Browse Events Page

```text
 ┌────────────────────────────────────────────────────────┐
 │ Events                              [Profile] [Logout] │
 ├────────────────────────────────────────────────────────┤
 │                                                        │
 │   Browse Events                                       │
 │                                                        │
 │   Search [________________________] [Search]           │
 │                                                        │
 │   Category [________]   Date [________]               │
 │                                                        │
 ├────────────────────────────────────────────────────────┤
 │ Event Name     Category      Date       Capacity       │
 │                                                        │
 │ Tech Seminar   Seminar       20/06/26   100   [View]  │
 │ Workshop       Workshop      25/06/26    50   [View]  │
 │ College Fest   Cultural      30/06/26   500   [View]  │
 │                                                        │
 └────────────────────────────────────────────────────────┘
```

---

## 5. Event Details Page

```text
 ┌────────────────────────────────────────────────────────┐
 │ Event Details                              [Back]      │
 ├────────────────────────────────────────────────────────┤
 │                                                        │
 │              EVENT NAME                               │
 │                                                        │
 │   Category     : Seminar                               │
 │   Date         : 20/06/2026                           │
 │   Time         : 10:00 AM                             │
 │   Venue        : Main Auditorium                      │
 │   Capacity     : 100 Participants                     │
 │                                                        │
 │   Description:                                         │
 │   _________________________________________________    │
 │   _________________________________________________    │
 │                                                        │
 │   Ticket Type [_____________]                          │
 │   Quantity    [____]                                   │
 │                                                        │
 │              [ Register Now ]                          │
 │                                                        │
 └────────────────────────────────────────────────────────┘
```

---

## 6. Participant Dashboard

```text
 ┌───────────────┬────────────────────────────────────────┐
 │   Sidebar     │         Participant Dashboard           │
 ├───────────────┤────────────────────────────────────────┤
 │ Dashboard     │ Welcome, [Participant]                 │
 │ Browse Events │                                        │
 │ My Bookings   │ ┌──────────┐ ┌──────────┐ ┌─────────┐│
 │ My Tickets    │ │ Bookings │ │ Tickets  │ │ Events  ││
 │ Payments      │ │    05    │ │    03    │ │   08    ││
 │ Notifications │ └──────────┘ └──────────┘ └─────────┘│
 │ Profile       │                                        │
 │ Logout        │ Recent Bookings                       │
 │               │ ───────────────────────────────────── │
 │               │ Event Name     Date       Status       │
 │               │ Seminar        20/06      Confirmed    │
 │               │ Workshop       25/06      Pending      │
 └───────────────┴────────────────────────────────────────┘
```

---

## 7. Organizer Dashboard

```text
 ┌────────────────┬───────────────────────────────────────┐
 │    Sidebar     │          Organizer Dashboard           │
 ├────────────────┤───────────────────────────────────────┤
 │ Dashboard      │ Welcome, [Organizer]                  │
 │ My Events      │                                       │
 │ Create Event   │ ┌──────────┐ ┌──────────┐ ┌────────┐│
 │ Registrations  │ │  Events  │ │Bookings  │ │Attend. ││
 │ Schedules      │ │    08    │ │   120    │ │   95   ││
 │ Attendance     │ └──────────┘ └──────────┘ └────────┘│
 │ Reports        │                                       │
 │ Profile        │ My Events                            │
 │ Logout         │ ───────────────────────────────────── │
 │                │ Event Name       Date       Status    │
 │                │ Tech Seminar     20/06      Upcoming │
 │                │ Workshop         25/06      Upcoming │
 └────────────────┴───────────────────────────────────────┘
```

---

## 8. Create / Edit Event Page

```text
 ┌─────────────────────────────────────┐
 │       Create / Edit Event           │
 ├─────────────────────────────────────┤
 │                                     │
 │ Event Name                          │
 │ [____________________________]      │
 │                                     │
 │ Category                            │
 │ [____________________________]      │
 │                                     │
 │ Date             Time               │
 │ [____________]   [____________]     │
 │                                     │
 │ Venue                               │
 │ [____________________________]      │
 │                                     │
 │ Capacity                            │
 │ [____________________________]      │
 │                                     │
 │ Description                         │
 │ [____________________________]      │
 │ [____________________________]      │
 │                                     │
 │        [ Cancel ]  [ Save Event ]   │
 └─────────────────────────────────────┘
```

---

## 9. Registration / Booking Page

```text
 ┌────────────────────────────────────────┐
 │          Event Registration             │
 ├────────────────────────────────────────┤
 │                                        │
 │ Event: Tech Seminar                    │
 │ Date : 20/06/2026                     │
 │                                        │
 │ Participant Name                       │
 │ [____________________________]         │
 │                                        │
 │ Email                                  │
 │ [____________________________]         │
 │                                        │
 │ Ticket Type                            │
 │ [____________________________]         │
 │                                        │
 │ Quantity                               │
 │ [________]                             │
 │                                        │
 │ Registration Status: Pending           │
 │                                        │
 │        [ Cancel ] [ Submit ]           │
 └────────────────────────────────────────┘
```

---

## 10. Registration Management Page

```text
 ┌────────────────────────────────────────────────────────┐
 │ Registrations                                          │
 ├────────────────────────────────────────────────────────┤
 │                                                        │
 │ Search [________________________] [Search]             │
 │                                                        │
 │ Participant   Event          Date       Status Actions │
 │                                                        │
 │ John Doe      Tech Seminar   20/06      Pending [View]│
 │ Jane Roy      Workshop       25/06      Approved[View]│
 │ Rahul Shah    College Fest   30/06      Cancelled[View]│
 │                                                        │
 └────────────────────────────────────────────────────────┘
```

---

## 11. Schedule Management Page

```text
 ┌────────────────────────────────────────────────────────┐
 │ Event Schedule                         [+ Add Session] │
 ├────────────────────────────────────────────────────────┤
 │                                                        │
 │ Time       Session              Speaker       Actions  │
 │                                                        │
 │ 10:00 AM   Opening Ceremony     Organizer     [Edit]  │
 │ 11:00 AM   Technical Session    Speaker 1    [Edit]  │
 │ 01:00 PM   Lunch                -             [Edit]  │
 │ 02:00 PM   Workshop             Speaker 2    [Edit]  │
 │                                                        │
 └────────────────────────────────────────────────────────┘
```

---

## 12. Ticket Page

```text
 ┌─────────────────────────────────────┐
 │             EVENT TICKET             │
 ├─────────────────────────────────────┤
 │                                     │
 │ Event: Tech Seminar                 │
 │                                     │
 │ Participant: John Doe               │
 │                                     │
 │ Ticket Type: General                │
 │ Date: 20/06/2026                    │
 │ Time: 10:00 AM                      │
 │ Venue: Main Auditorium              │
 │                                     │
 │ Ticket ID: TKT-001                  │
 │                                     │
 │          [ Ticket Code ]            │
 │                                     │
 │          [ Download Ticket ]       │
 └─────────────────────────────────────┘
```

---

## 13. Attendance Management Page

```text
 ┌────────────────────────────────────────────────────────┐
 │ Attendance                                             │
 ├────────────────────────────────────────────────────────┤
 │                                                        │
 │ Event: Tech Seminar                                    │
 │                                                        │
 │ Search Participant [________________] [Search]         │
 │                                                        │
 │ Participant     Ticket ID     Check-in      Action     │
 │                                                        │
 │ John Doe        TKT-001       Present       [Update]  │
 │ Jane Roy        TKT-002       Present       [Update]  │
 │ Rahul Shah      TKT-003       Absent        [Check In]│
 │                                                        │
 ├────────────────────────────────────────────────────────┤
 │ Total Participants: 100                               │
 │ Present: 85                                           │
 │ Absent: 15                                            │
 └────────────────────────────────────────────────────────┘
```

---

## 14. Reports Page

```text
 ┌────────────────────────────────────────────────────────┐
 │ Reports                                                │
 ├────────────────────────────────────────────────────────┤
 │                                                        │
 │ Select Event [____________________]                    │
 │                                                        │
 │ ┌─────────────┐ ┌─────────────┐ ┌─────────────────┐  │
 │ │ Registrations│ │ Attendance │ │ Available Seats │  │
 │ │     100      │ │     85     │ │       15        │  │
 │ └─────────────┘ └─────────────┘ └─────────────────┘  │
 │                                                        │
 │ Attendance Report                                     │
 │ ─────────────────────────────────────────────────────  │
 │ Present       85                                      │
 │ Absent        15                                      │
 │                                                        │
 │ [ View Report ] [ Download Report ]                   │
 └────────────────────────────────────────────────────────┘
```

---

## 15. Profile Page

```text
 ┌─────────────────────────────────────┐
 │              My Profile             │
 ├─────────────────────────────────────┤
 │                                     │
 │             [ Avatar ]              │
 │                                     │
 │ Name                                │
 │ [____________________________]      │
 │                                     │
 │ Email                               │
 │ [____________________________]      │
 │                                     │
 │ Phone                               │
 │ [____________________________]      │
 │                                     │
 │ Role: Participant                   │
 │                                     │
 │        [ Save Changes ]             │
 └─────────────────────────────────────┘
```

---

## 16. Administrator Dashboard

```text
 ┌────────────────┬───────────────────────────────────────┐
 │    Sidebar     │          Administrator Dashboard       │
 ├────────────────┤───────────────────────────────────────┤
 │ Dashboard      │ Welcome, [Administrator]             │
 │ Users          │                                       │
 │ Events         │ ┌────────┐ ┌────────┐ ┌────────────┐│
 │ Participants   │ │ Users  │ │ Events │ │Registrations││
 │ Registrations  │ │  250   │ │   35   │ │    850     ││
 │ Schedules      │ └────────┘ └────────┘ └────────────┘│
 │ Attendance     │                                       │
 │ Reports        │ Recent Events                        │
 │ Profile        │ ───────────────────────────────────── │
 │ Settings       │ Event Name       Date       Status    │
 │ Logout         │ Tech Seminar     20/06      Upcoming │
 │                │ Workshop         25/06      Ongoing  │
 └────────────────┴───────────────────────────────────────┘
```

---

## 17. Common Navigation Structure

```text
 ┌────────────────────────────────────────────────────────┐
 │              EVENT MANAGEMENT SYSTEM                   │
 ├────────────────────────────────────────────────────────┤
 │                                                        │
 │ Login                                                  │
 │   │                                                    │
 │   ▼                                                    │
 │ Dashboard                                              │
 │   │                                                    │
 │   ├── Events                                           │
 │   ├── Registrations / Bookings                         │
 │   ├── Tickets                                          │
 │   ├── Schedules                                        │
 │   ├── Attendance                                       │
 │   ├── Reports                                          │
 │   ├── Notifications                                    │
 │   └── Profile                                          │
 │                                                        │
 └────────────────────────────────────────────────────────┘
```

---

## 18. Wireframe Summary

| Page | Main Purpose |
|---|---|
| Login | Authenticate users |
| Registration | Create a new user account |
| Home | Introduce the system and display events |
| Browse Events | Search and view available events |
| Event Details | Display complete event information |
| Dashboard | Display role-specific information |
| Create/Edit Event | Manage event information |
| Registration/Booking | Register for an event |
| Registration Management | Manage participant registrations |
| Schedule Management | Manage event sessions |
| Ticket | Display participant ticket |
| Attendance | Record and monitor attendance |
| Reports | Display event statistics |
| Profile | Manage user profile |

---

## Document Information

**Project:** Event Management System  
**Technology:** MERN Stack  
**Document:** Wireframes  
**File Location:** `docs/design/wireframes.md`