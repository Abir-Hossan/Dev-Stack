# 🚀 Dev Stack

### Build Your Ideal Development Stack

**Dev Stack** is a modern, responsive web application that helps developers explore popular development technologies and build their own personalized technology stack.

Browse technologies across different categories such as **Frontend, Backend, Database, Language, Styling, and DevOps**, then add the technologies you want to your stack. The selected technologies are displayed in a dedicated sidebar where they can be removed individually or cleared at once.

---

## ✨ Features

* 🧩 **Explore Technologies** — Browse a curated collection of popular development technologies with their category, difficulty level, rating, description, and icon.
* 🛠️ **Build Your Stack** — Add technologies to your personal stack and see your selections update instantly.
* 📱 **Responsive Design** — The interface adapts smoothly to desktop, tablet, and mobile screen sizes.
* ⚡ **Loading Experience** — A short loading state provides a smoother initial application experience.
* 🎨 **Modern UI** — Clean cards, gradients, responsive layouts, and a simple visual hierarchy make the application easy to use.

---

## 🛠️ Technologies Used

| Technology         | Purpose                                       |
| ------------------ | --------------------------------------------- |
| **React**          | Building reusable UI components               |
| **TypeScript**     | Type safety and maintainable code             |
| **Vite**           | Fast development and production build tooling |
| **Tailwind CSS**   | Responsive and utility-first styling          |
| **React Toastify** | User feedback and notification messages       |
| **Lucide React**   | Lightweight interface icons                   |
| **JSON**           | Storing and managing technology information   |

---

## 📂 Project Structure

```text
src/
├── assets/
│   └── stack-illustration.svg
│
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Loading.tsx
│   ├── Navbar.tsx
│   ├── StackSidebar.tsx
│   ├── TechnologyCard.tsx
│   └── TechnologyGrid.tsx
│
├── data/
│   └── technologies.json
│
├── hooks/
│
├── types/
│   └── technology.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Abir-Hossan/Dev-Stack.git
```

### 2. Navigate to the project

```bash
cd Dev-Stack
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available through the local Vite development URL shown in your terminal.

### 5. Build for production

```bash
npm run build
```

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript or TypeScript. It makes React code easier to read and helps us create the UI in a simple way.

For example:

```tsx
<h1>Build Your Development Stack</h1>
```

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. A child component cannot directly change its props.

**State** is data that belongs to a component and can change when the user interacts with the application.

In this project, `TechnologyCard` gets technology information through props, while the selected technologies are stored in state in `App.tsx`.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a React component.

In this project, I used it in `App.tsx` to keep track of the technology list, selected technologies, and loading state.

```tsx
const [technologies, setTechnologies] = useState<Technology[]>([])

const [selected, setSelected] = useState<Technology[]>([])

const [loading, setLoading] = useState(true)
```

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used when we need to perform something after a component renders.

In this project, I used it when the `App` component loads to put the technology data into state. It also controls the short loading time before the data is displayed.

```tsx
useEffect(() => {
  const timer = window.setTimeout(() => {
    setTechnologies(technologiesData as Technology[])
    setLoading(false)
  }, 650)

  return () => window.clearTimeout(timer)
}, [])
```

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to tell each item in a list apart.

It helps React know which item was added, removed, or changed, so it can update the UI properly.

In this project, I used the technology's `id` as the key:

```tsx
technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))
```

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition.

For example, in this project, when no technology has been added to the stack, it shows an empty-stack message:

```tsx
{selected.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  // Display selected technologies
)}
```

If the stack is empty, the message is shown. Otherwise, the selected technologies are displayed.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child using **props**.

For example, `App.tsx` passes the technology list and the `onAdd` function to `TechnologyGrid`:

```tsx
<TechnologyGrid
  technologies={technologies}
  selectedIds={selectedIds}
  onAdd={addTechnology}
/>
```

The child can send something back to the parent by calling a function that the parent passed through props.

For example:

```tsx
onAdd(technology)
```

This calls the `addTechnology` function in the parent component.

The basic flow is:

```text
Parent
  │
  │  Pass data using props
  ▼
Child
  │
  │  Call callback function
  ▼
Parent
```


## 📌 Project Highlights

**Dev Stack** demonstrates several important React concepts in a practical project:

* Component-based architecture
* Props and callback functions
* State management with `useState`
* Side effects with `useEffect`
* Conditional rendering
* Rendering lists with `.map()`
* Unique React `key` props
* TypeScript interfaces and type safety
* Responsive Tailwind CSS design

---

