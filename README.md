# React Router Demo

A comprehensive demonstration project showcasing the core features and capabilities of React Router v7. This project serves as a learning resource and practical example of client-side routing in React applications.

## 🚀 Features Demonstrated

This demo includes examples of:

- **Basic Navigation** - Simple route navigation between pages
- **Nested Routes** - Parent-child route relationships with `<Outlet />`
- **Dynamic Routes** - URL parameters using `:param` syntax
- **Optional Parameters** - Routes with optional segments using `?`
- **Catch-all Routes** - Wildcard routes (`*`) for 404 handling
- **Active Link Styling** - Using `NavLink` with active state management
- **Route Hooks** - `useParams()`, `useLocation()` for accessing route data
- **Debug Component** - Real-time route information display

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js) or **yarn**

You can verify your installation by running:

```bash
node --version
npm --version
```

## 🔧 Installation

1. **Clone or download this repository**

   If you have the repository URL:
   ```bash
   git clone <repository-url>
   cd react-router-example
   ```

   Or simply navigate to the project directory if you already have it.

2. **Install dependencies**

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**

   Using npm:
   ```bash
   npm run dev
   ```

   Or using yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser**

   The application will typically be available at `http://localhost:5173` (or the port shown in your terminal).

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component with NavLink examples
│   ├── Navbar.css
│   ├── FooterDebug.jsx     # Debug component showing route information
│   └── FooterDebug.css
├── pages/
│   ├── Home.jsx            # Home page
│   ├── About.jsx           # About page
│   ├── Login.jsx           # Login page
│   ├── Students.jsx       # Parent route with nested routes
│   ├── StudentList.jsx    # Index route for /students
│   ├── StudentsGrades.jsx # Nested route: /students/grades
│   ├── StudentProfile.jsx # Dynamic route: /students/:studentId
│   ├── StudentOptional.jsx # Optional route: /students/optional/:value?
│   ├── NotFound.jsx       # Catch-all route (404 page)
│   ├── User.jsx
│   └── Product.jsx
├── App.jsx                 # Main app component with route definitions
├── main.jsx               # Entry point with BrowserRouter
└── index.css              # Global styles
```

## 🛣️ Route Structure

The application demonstrates the following routing patterns:

### Basic Routes
- `/` - Home page
- `/about` - About page
- `/login` - Login page

### Nested Routes (Students Section)
- `/students` - Parent route (renders Students component)
  - `/students` (index) - StudentList component
  - `/students/grades` - StudentsGrades component
  - `/students/:studentId` - Dynamic route (StudentProfile component)
  - `/students/optional/:value?` - Optional parameter route
  - `/students/*` - Catch-all route for unmatched paths (NotFound)

## 🎯 Key React Router Concepts Demonstrated

### 1. **BrowserRouter**
Wraps the application to enable routing functionality.

### 2. **Routes and Route**
Defines the route configuration and component mapping.

### 3. **Link and NavLink**
- `Link` - Basic navigation component
- `NavLink` - Enhanced Link with active state styling

### 4. **Outlet**
Renders child route components in nested route structures.

### 5. **Route Hooks**
- `useParams()` - Access dynamic route parameters
- `useLocation()` - Access current location object

### 6. **Route Patterns**
- **Static routes**: `/about`, `/login`
- **Dynamic routes**: `/students/:studentId`
- **Optional parameters**: `/students/optional/:value?`
- **Wildcard routes**: `*` (catch-all)

## 🧪 Testing the Routes

Try navigating to these URLs to see different routing features:

1. **Basic Navigation**
   - Click on "Index", "About", or "Students" in the navbar

2. **Nested Routes**
   - Navigate to `/students` to see the parent route
   - Click "Default" to see the index route
   - Click "Grades" to see a nested route

3. **Dynamic Routes**
   - Go to `/students`
   - Enter a student ID in the input field
   - Click "Student Profile" to navigate to `/students/{id}`

4. **Optional Parameters**
   - Go to `/students`
   - Enter a value in the optional input
   - Click "Optional Segment" to navigate to `/students/optional/{value}`
   - Try navigating to `/students/optional` (without a value) to see optional parameter behavior

5. **404 Handling**
   - Navigate to any non-existent route (e.g., `/students/invalid/path`)
   - See the NotFound component render

6. **Debug Information**
   - Check the footer at the bottom of the page
   - It displays the current pathname, search params, and route key
   - This updates automatically as you navigate

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📚 Technologies Used

- **React** ^19.2.0
- **React Router DOM** ^7.9.6
- **Vite** ^7.2.4 - Build tool and dev server
- **ESLint** - Code linting

## 🎓 Learning Resources

This project is designed to help you understand:

- How to set up React Router in a React application
- The difference between `Link` and `NavLink`
- How nested routes work with `<Outlet />`
- How to handle dynamic and optional route parameters
- How to implement 404 pages with catch-all routes
- How to access route information using hooks

## 📝 Notes

- The debug footer component demonstrates how to track navigation using `useLocation()`
- Active link styling is implemented using `NavLink`'s `className` prop with a function
- All routes are defined in `App.jsx` using the `<Routes>` and `<Route>` components
- The `BrowserRouter` is set up in `main.jsx` to wrap the entire application

## 🤝 Contributing

This is a demonstration project. Feel free to experiment with it and modify it to explore different React Router features!

## 📄 License

This project is for educational purposes.

---

**Happy Routing! 🚀**
