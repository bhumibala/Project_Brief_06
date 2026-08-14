# Database Design — Event Management System

## 1. Database Overview

The Event Management System uses MongoDB as the database. The system stores users, events, venues, vendors, bookings, tickets, payments, and notifications in separate collections.

MongoDB ObjectId references are used to connect related collections.

---

## 2. Users Collection

Stores login information, roles, and profile details of system users.

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Unique user identifier |
| `name` | String | Full name of the user |
| `email` | String | Login email, should be unique |
| `passwordHash` | String | Hashed user password |
| `role` | String | `admin`, `organizer`, or `participant` |
| `phone` | String | User phone number |
| `createdAt` | Date | Account creation date |

---

## 3. Events Collection

Stores information about events created and managed by organizers.

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Unique event identifier |
| `venueId` | ObjectId | Reference to `Venues` |
| `vendorId` | ObjectId | Reference to `Vendors` |
| `eventName` | String | Name of the event |
| `category` | String | Event category |
| `date` | Date | Event date |
| `time` | String | Event time |
| `description` | String | Event description |
| `capacity` | Number | Maximum participant capacity |
| `status` | String | `upcoming`, `ongoing`, `completed`, or `cancelled` |
| `createdAt` | Date | Event creation date |

---

## 4. Venues Collection

Stores information about locations where events are organized.

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Unique venue identifier |
| `venueName` | String | Name of the venue |
| `location` | String | Venue address/location |
| `capacity` | Number | Maximum venue capacity |
| `price` | Number | Venue booking price |
| `contact` | String | Venue contact number |
| `createdAt` | Date | Venue creation date |

---

## 5. Bookings Collection

Stores participant booking information for events.

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Unique booking identifier |
| `userId` | ObjectId | Reference to `Users` |
| `eventId` | ObjectId | Reference to `Events` |
| `bookingDate` | Date | Date of booking |
| `quantity` | Number | Number of tickets booked |
| `status` | String | `pending`, `confirmed`, or `cancelled` |
| `createdAt` | Date | Booking creation date |

---

## 6. Tickets Collection

Stores ticket information associated with events.

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Unique ticket identifier |
| `eventId` | ObjectId | Reference to `Events` |
| `ticketType` | String | Type of ticket |
| `price` | Number | Ticket price |
| `quantity` | Number | Total number of tickets |
| `availableTickets` | Number | Number of available tickets |
| `createdAt` | Date | Ticket creation date |

---

## 7. Payments Collection

Stores payment records related to bookings.

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Unique payment identifier |
| `bookingId` | ObjectId | Reference to `Bookings` |
| `amount` | Number | Payment amount |
| `paymentDate` | Date | Payment date |
| `paymentMethod` | String | Payment method |
| `status` | String | `pending`, `paid`, or `failed` |
| `createdAt` | Date | Payment record creation date |

> Note: Online payment gateway integration is outside the required scope of Project Brief 06. This collection can be kept for future enhancement or payment record management if required.

---

## 8. Vendors Collection

Stores information about vendors who provide services for events.

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Unique vendor identifier |
| `vendorName` | String | Name of the vendor |
| `serviceType` | String | Type of event service |
| `contact` | String | Vendor contact number |
| `email` | String | Vendor email |
| `address` | String | Vendor address |
| `createdAt` | Date | Vendor creation date |

---

## 9. Notifications Collection

Stores notifications sent to users.

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Unique notification identifier |
| `userId` | ObjectId | Reference to `Users` |
| `message` | String | Notification message |
| `notificationType` | String | Type of notification |
| `date` | Date | Notification date |
| `status` | String | `read` or `unread` |
| `createdAt` | Date | Notification creation date |

---

## 10. Collection Relationships

| Relationship | Cardinality |
|---|---:|
| User → Bookings | 1 : N |
| Event → Bookings | 1 : N |
| Venue → Events | 1 : N |
| Vendor → Events | 1 : N |
| Event → Tickets | 1 : N |
| Booking → Payment | 1 : 1 |
| User → Notifications | 1 : N |

---

## 11. Database Relationship Diagram

```mermaid
erDiagram

    USERS ||--o{ BOOKINGS : "makes"
    EVENTS ||--o{ BOOKINGS : "has"
    VENUES ||--o{ EVENTS : "hosts"
    VENDORS ||--o{ EVENTS : "provides"
    EVENTS ||--o{ TICKETS : "offers"
    BOOKINGS ||--o| PAYMENTS : "has"
    USERS ||--o{ NOTIFICATIONS : "receives"

    USERS {
        ObjectId _id
        string name
        string email
        string passwordHash
        string role
        string phone
        date createdAt
    }

    EVENTS {
        ObjectId _id
        ObjectId venueId
        ObjectId vendorId
        string eventName
        string category
        date date
        string time
        string description
        number capacity
        string status
        date createdAt
    }

    VENUES {
        ObjectId _id
        string venueName
        string location
        number capacity
        number price
        string contact
        date createdAt
    }

    BOOKINGS {
        ObjectId _id
        ObjectId userId
        ObjectId eventId
        date bookingDate
        number quantity
        string status
        date createdAt
    }

    TICKETS {
        ObjectId _id
        ObjectId eventId
        string ticketType
        number price
        number quantity
        number availableTickets
        date createdAt
    }

    PAYMENTS {
        ObjectId _id
        ObjectId bookingId
        number amount
        date paymentDate
        string paymentMethod
        string status
        date createdAt
    }

    VENDORS {
        ObjectId _id
        string vendorName
        string serviceType
        string contact
        string email
        string address
        date createdAt
    }

    NOTIFICATIONS {
        ObjectId _id
        ObjectId userId
        string message
        string notificationType
        date date
        string status
        date createdAt
    }