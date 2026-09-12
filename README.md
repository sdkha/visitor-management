# Visitor Management System
A simple and responsive **Visitor Management System** built with React, TypeScript, React Router and Tailwind CSS.

The application allows users to add visitors, view the visitor list, search/manage visitor records, approve or reject visitors, and delete visitor records.

## Features
* Add new visitors
* View all visitors
* Visitor details:

  * Name
  * Phone Number
  * Unit Number
  * Visit Date
  * Status
* Visitor status management

  * Pending
  * Approved
  * Rejected
* Delete visitors
* Search/filter visitors
* Visitor List navigation
* Add Visitor navigation
* Data persistence using browser `localStorage`
* Responsive UI
* Clean and modern design using Tailwind CSS

## Technologies Used
* React.js
* TypeScript
* React Router DOM
* Tailwind CSS
* Vite
* Browser LocalStorage

## Project Structure
```text
src/
├── pages/
│   ├── Visitor.tsx
│   └── VisitorList.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

## Installation
Clone the project and install dependencies:

```bash
npm install
```

##  Run the Project
Start the development server:

```bash
npm run dev
```

The application will run on the local development server provided by Vite.

## Usage

### Add Visitor

1. Open the Visitor page.
2. Enter visitor name.
3. Enter phone number.
4. Enter unit number.
5. Select visit date.
6. Click **Submit**.
7. Visitor data will be stored in browser `localStorage`.
8. The application redirects to the Visitor List.

### Visitor List
The Visitor List displays all saved visitors.

Available actions:

* **Approve** — Changes visitor status to Approved.
* **Reject** — Changes visitor status to Rejected.
* **Delete** — Removes the visitor from the list.
* **Add Visitor** — Navigates back to the visitor form.

##  Data Storage
For this machine-test project, visitor data is stored in the browser's `localStorage`.

The storage key used by the application is:

```text
visitors
```

This allows visitor data to remain available even after refreshing the page.

## Routes

| Route           | Description               |
| --------------- | ------------------------- |
| `/`             | Redirects to Visitor page |
| `/visitor`      | Add Visitor               |
| `/visitor-list` | Visitor List              |

## Visitor Status
New visitors are created with:

```text
Pending
```

The status can then be changed to:

```text
Approved
Rejected
```

## Responsive Design
The application uses Tailwind CSS utility classes to provide a responsive interface that works across desktop, tablet and mobile screen sizes.

## Future Improvements
The application can be extended with:

* Backend API integration
* Database integration
* User authentication
* Edit visitor functionality
* Pagination
* Advanced search and filtering
* Visitor history
* Admin dashboard
* Email/SMS notifications

## Login Credentials
For testing purposes:
- **Username:** `emilys`
- **Password:** `emilyspass`