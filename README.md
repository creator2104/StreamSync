# lifting the state up
✅ What is “Lifting the State Up” in React?
“Lifting state up” means moving the shared state to the closest common parent component when two or more child components need to access or modify the same state.

🧠 Why do we do this?
In React, state lives where it's needed. But if multiple components need the same state, it’s best to move the state to their common parent, and pass it down via props.

🔄 When to lift state up:
✅ Use lifting when:
Two or more child components need to share the same data.
One component needs to update state, and another needs to read it.
You want to avoid duplication of state logic in multiple places.

🔧 Tip:
If lifting state up becomes too messy, consider using Context API or Redux — especially for deep or global state needs.

# why do we use redux store
✅ 1. Centralized State Management
Redux creates a single source of truth for your app's data — stored in a global store. This makes it easier to:
Access data anywhere
Avoid prop drilling
Sync UI across components
Example:
Menu open/close state, user login info, cart items — all in one central store.

✅ 2. Predictable State Updates
Redux uses actions and reducers, which makes every change to the state clear and traceable.
Actions describe what happened
Reducers describe how the state changes
This improves:
Debugging
Consistency
Maintainability

✅ 3. Easier to Share State Between Components
Without Redux:
You’d pass props down through many layers (Header → Body → Sidebar → Component)
It gets messy in big apps
With Redux:
Any component can useSelector to read
Any component can dispatch actions to change state

✅ 4. Great Developer Tools
Redux DevTools Extension lets you:
Inspect current state
See what action changed the state
Time-travel debug your app

✅ 5. Scalable for Large Apps
Redux scales better for apps with:
Authentication
Shopping carts
Sidebar toggles
Notifications
API data caching

